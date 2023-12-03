import mongoose from "mongoose";

import { folderSchema } from "../models/folderModel.js"
import { entrySchema } from "../models/entryModel.js";
import { mediaSchema } from "../models/mediaModel.js";

mongoose.set('autoCreate', false)

const userInfoSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please fill out the name field."]
        },
        username: {
            type: String,
            required: [true, "Please fill out the username field."]
        },
        email: {
            type: String,
            required: [true, "Please fill out the email field"]
        },
        password: {
            type: String,
            required: [true, "Please fill out the password field"]
        },
        user_settings: {
            display_mode: {
                type: String,
                required: [true, "Please fill out the display mode field"]
            },
            advanced_display: {
                text_size: {
                    type: Number,
                    required: [true, "Please fill out the advanced display - text size field"],
                    default: 12
                },
                text_color: {
                    type: String,
                    required: [true, "Please fill out the advanced display - text color field"],
                    default: "#000000"
                },
                background_color: {
                    type: String,
                    required: [true, "Please fill out the advanced display - background color field"],
                    default: "#000000"
                },
            },
            default_camera_view: {
                type: String,
                required: [true, "Please fill out the default camera view field"],
                default: "back"
            },
            default_media_form: {
                type: String,
                required: [true, "Please fill out the default media form field"],
                default: "photo"
            },
            default_download_format: {
                entries: {
                    type: String,
                    required: [true, "Please fill out the default download format - entries field"],
                    default: ".pdf"
                },
                media: {
                    photos: {
                        type: String,
                        required: [true, "Please fill out the default download format - media - photos field"],
                        default: ".png"
                    },
                    videos: {
                        type: String,
                        required: [true, "Please fill out the default download format - media - videos field"],
                        default: ".mp4"
                    },
                }
            }
        }   
    },
    { _id: false },
    { autoCreate: false }
)

const userDataSchema = mongoose.Schema(
    {
        folders: {
            type: [folderSchema],
            required: false,
            ref: "Folder"
        },
        entries: {
            type: [entrySchema],
            required: false,
            ref: "Entry"
        },
        media: {
            type: [mediaSchema],
            required: false,
            ref: "Media"
        }
    },
    { _id: false },
    { autoCreate: false }
)

const userSchema = mongoose.Schema(
    {
        user: {
            type: userInfoSchema, 
            required: [true, "You have no user info"]
        },
        data: {
            type: userDataSchema,
            required: [true, "You have no user data"]
        }
    },
    { collection: 'users' }
)

const User = mongoose.model('User', userSchema);

// const user = User.create()

export default User;