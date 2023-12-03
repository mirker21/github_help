import mongoose from "mongoose";

import { mediaSchema } from "../models/mediaModel.js";

const groupMemberSchema = mongoose.Schema(
    {
        name: String
    }
)

const toolSchema = mongoose.Schema(
    {
        name: String
    }
)

export const entrySchema = mongoose.Schema(
    {
        file_type: {
            type: String,
            required: [true, "Entry must have file type property"],
            default: "entry"
        },
        favorite: {
            type: Boolean,
            required: [true, "Entry must have favorite property"],
            default: false
        },
        entry_name: {
            type: String,
            required: [true, "Entry must have entry name property"],
        },
        entry_date: {
            type: Date,
            required: [true, "Entry must have entry date property"],
            default: Date.now
        },
        weather: {
            type: String,
            required: [true, "Entry must have weather property"],
        },
        group_members: {
            type: [groupMemberSchema],
            required: false,
        },
        location: {
            latitude: {
                type: mongoose.Schema.Types.Decimal128,
                required: [true, "Entry must have location - latitude property"],
            },
            longitude: {
                type: mongoose.Schema.Types.Decimal128,
                required: [true, "Entry must have location - longitude property"],
            }
        },
        location_description: {
            type: String,
            required: [true, "Entry must have location description property"],
        },
        tools: {
            type: [toolSchema],
            required: [true, "Entry must have tools property"],
        },
        methods: {
            type: String,
            required: [true, "Entry must have methods property"],
        },
        specimen_description: {
            type: String,
            required: [true, "Entry must have specimen description property"],
        },
        specimen_details: {
            color: {
                type: String,
                required: [true, "Entry must have specimen details - color property"],
            },
            hardness: {
                type: Number,
                required: [true, "Entry must have specimen details - hardness property"],
            },
            luster: {
                type: String,
                required: [true, "Entry must have specimen details - luster property"],
            },
            crystal_forms: {
                type: String,
                required: [true, "Entry must have specimen details - crystal forms property"],
            },
        },
        media: {
            type: [mediaSchema],
            required: false
        }
    }
)

const Entry = mongoose.model('Entry', entrySchema);

export default Entry;