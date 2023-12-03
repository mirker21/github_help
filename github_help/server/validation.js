import { body, check, validationResult } from 'express-validator';

// const validate = (req, res, next) => {
//     const errors = validationResult(req);
//     console.log(errors)
//     if (errors.isEmpty()) {
//         return next();
//     }
//     const extractedErrors = []
//     errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }))
//     return res.status(422).json({
//         errors: extractedErrors
//     })
// }

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
                // throw error if passwords do not match
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

        check('password')
        .trim()
        .escape()
        .isString()
        .notEmpty(),
    ]
}

export {
    // validate,
    checkRegister,
    checkLogin,
}

        // check('password')
        // .notEmpty()
        // .trim()
        // .escape()
        // .custom((password, {req}) => {
        //     if (password !== req.body.confirmPassword) {
        //         // throw error if passwords do not match
        //         throw new Error("Passwords don't match");
        //     } else {
        //         return password;
        //     }
        // })