import mongoose from "mongoose";

import { entrySchema } from "../models/entryModel.js";

export const folderSchema = mongoose.Schema(
    {
        file_type: {
            type: String,
            required: [true, "Folder must have file type property"],
            default: "folder"
        },
        favorite: {
            type: Boolean,
            required: [true, "Folder must have favorite property"],
            default: false
        },
        folder_name: {
            type: String,
            required: [true, "Folder must have name property"]
        },
        entries: {
            type: [entrySchema],
            required: false,
        }
    }
)

const Folder = mongoose.model('Folder', folderSchema);

export default Folder;

// module.exports = {
//     Folder,
//     folderSchema
// };