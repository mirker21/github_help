import mongoose from "mongoose";

export const mediaSchema = mongoose.Schema(
    {
        file_type: {
            type: String,
            required: [true, "Media must have file type property"],
            default: "media"
        },
        favorite: {
            type: Boolean,
            required: [true, "Media must have favorite property"],
            default: false
        },
        media_type: {
            type: String,
            required: [true, "Media must have media type property"]
        },
        media_name: {
            type: String,
            required: [true, "Media must have media name property"]
        },
        media_path: {
            type: String,
            required: [true, "Media must have media path property"]
        }
    }
)

const Media = mongoose.model('Media', mediaSchema);

export default Media;