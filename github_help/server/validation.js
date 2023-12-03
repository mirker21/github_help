import { check, validationResult } from 'express-validator';

function checkRegister() {
    return [
        check('name')
        .trim()
        .escape()
        .notEmpty(),

        check('username')
        .trim()
        .escape()
        .notEmpty(),

        check('email')
        .trim()
        .escape()
        .notEmpty()
        .isEmail(),

        check('password')
        .trim()
        .escape()
        .isString()
        .notEmpty()
        .custom((password, {req}) => {
            if (password !== req.body.confirm_password) {
                throw new Error("Passwords don't match");
            } else {
                return password;
            }
        }),

        check('confirm_password')
        .notEmpty()
        .trim()
        .escape()
        .notEmpty(),
    ]
}

function checkLogin() {
    return [
        check('username')
        .trim()
        .escape()
        .notEmpty(),

        // check('email')
        // .trim()
        // .escape()
        // .notEmpty()
        // .isEmail(),
        
        // I will get email up and running
        // as soon as I know that username
        // login and session works properly.

        check('password')
        .trim()
        .escape()
        .isString()
        .notEmpty(),
    ]
}

export {
    checkRegister,
    checkLogin,
}
