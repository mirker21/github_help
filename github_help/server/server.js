import 'dotenv/config'
const PORT = 8080;
import cors from 'cors';
import mongoose from 'mongoose';
import express from "express";
import session from 'express-session';
import MongoStore from 'connect-mongo';
import bcrypt from 'bcrypt';
import User from './models/userModel.js'

import { checkRegister, checkLogin } from './validation.js';
import { validationResult } from 'express-validator';

const app = express();

app.use(express.urlencoded({ extended: true })); // for application/x-www-form-urlencoded (forms)
app.use(express.json()); // for application/json (postman requests)
app.use(cors(
    { 
        origin: true, 
        credentials: true, 
        preflightContinue: true,
        methods: ["GET", "PATCH", "POST", "DELETE"],
        allowedHeaders: ["Access-Control-Allow-Headers"],
        optionsSuccessStatus: 200
    }
)); // allows cross-site origin resource sharing, between next.js frontend and express.js backend

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.setHeader("Access-Control-Allow-Credentials", true);
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Cookie"
    );
    next();
});

const clientP = mongoose.connect(
    process.env.MONGODB_URI,
    { dbName: 'my_db' }
)
.then(m => m.connection.getClient())
.then(() => {
    console.log('MongoDB Connected')
    app.listen(PORT, () => {
        console.log(`- - - Listening on PORT ${PORT} - - -`)
    })
})
.catch(err => console.log(err));

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    // resave means for every request to the server, 
    // we will create a new session even 
    // though it's the same user and browser.
    saveUninitialized: false,
    // if we have not modified the session,
    // we do not want it to save.
    rolling: true, 
    store: MongoStore.create({
      mongoUrl: process.env.MONGODB_URI,
      dbName: "my_db",
      collectionName: 'sessions',
      clientPromise: clientP,
      autoRemove: 'native',
      autoRemoveInterval: 15,
      crypto: {
        secret: process.env.SESSION_STORE_CRYPTO_SECRET
      },
      ttl: 14 * 24 * 60 * 60,
    }),
    cookie: {
        // sameSite: 'none',
        // secure: true, 
        httpOnly: false,
        maxAge: 14 * 24 * 60 * 60,
    },
}));

// app.use((req, res, next) => {
//     if(!req.session._id || !req.session.isAuth)
//       res.clearCookie('', {path: '/'});
//     next();
// });

const isAuth = (req, res, next) => {
    console.log(req.session);
    if (req.session.isAuth) {
        console.log('is auth is true!')
        next();
    } else {
        console.log('is auth is false!')
        return res.status(400).send({ message: "Authentication Failed" });
    }

}

app.get("/api/home", (req, res) => {
    res.json({ message: "Hello World!" });
})

app.post('/register', checkRegister(), async (req, res) => {
    try {
        validationResult(req);

        const {name, username, email, password} = req.body;
        
        const userExist = await User.find({ 
            'user.name': name,
            'user.username': username,
            'user.email': email,
        }).exec()

        if (userExist.length > 0) {
            // if user does not exist
            return res.status(400).send({ message: "Authentication Failed" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        // create hashed password with a salt using bcrypt

        await User.create(
            {
                user: {
                    name: name,
                    username: username,
                    email: email,
                    password: hashedPassword,
                    user_settings: {
                        display_mode: "light",
                        advanced_display: {
                            text_size: 12,
                            text_color: "#000000",
                            background_color: "#000000",
                        },
                        default_camera_view: "back",
                        default_media_form: "photo",
                        default_download_format: {
                            entries: ".pdf",
                            media: {
                                photos: ".png",
                                videos: ".mp4",
                            }
                        }
                    }
                },
                data: {
                    folders: [],
                    entries: [],
                    media: []
                }
            }
        );

        return res.status(201).send({ 
            message: "Authentication Successful, Return to Login Page" 
        });

    } catch (error) {
        console.log(error.message)
        res.status(500).send({ message: error.message })
    }

})

app.post("/login", checkLogin(), async (req, res) => {
    try {
        validationResult(req);
        
        const { username, email, password } = req.body;

        if (username === undefined) {
            console.log('set up email verification!')
        }

        const user = await User.find({ 'user.username': username })

        if (user === null) {
            console.log('user does not exist')
            return res.status(400).send({ message: "Authentication Failed" });
        }

        if (await bcrypt.compare(password, user[0].user.password)) {

            console.log(user[0]._id)
            req.session['isAuth'] = true;
            req.session['userId'] = user[0]._id;

            // res.cookie("_id", user[0]._id, {
            //     sameSite: 'none',
            //     secure: true, 
            //     httpOnly: true,
            //     maxAge: 14 * 24 * 60 * 60,
            // })
            
            // res.cookie("isAuth", true, {
            //     sameSite: 'none',
            //     secure: true, 
            //     httpOnly: true,
            //     maxAge: 14 * 24 * 60 * 60,
            // })

            req.session.save();
            console.log('bcrypt compare is true')
            console.log(req.session)
            return res.status(201).send("Authentication Successful");

            // req.session.reload()
     

            return res.status(201).end("Authentication Successful");

        } else {
            console.log('bcrypt compare is false')
            return res.status(400).end("Authentication Failed");
        }

    } catch (error) {
        console.log(error.message)
        res.status(500).send({ message: error.message })
    }

});

app.get("/user", isAuth, async (req, res) => {

    console.log('get user', req.session)

    const user = await User.find({ _id: req.session._id })

    console.log(user)

    if (user === null) {
        return res.status(400).send({ message: "Authentication Failed" });
    }

    return res.status(201).json(user);
});

app.post("/logout", async (req, res) => {
    req.session.destroy((error) => {
        if (error) throw new Error(error);
        return res.status(201).send({ message: "Logout Successful" });
    })
});