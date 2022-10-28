import mongoose from "mongoose";

import { collections } from "../config/names";

const Schema = mongoose.Schema;

const Notification = new Schema(
    {
        title: {
            type: String,
            trim: true,
            required: true,
        },
        area: {
            type: String,
            trim: true,
            required: true,
        },
        type: {
            type: String,
            trim: true,
            required: true,
        },
        startDate: {
            type: Date,
            default: new Date(),
        },
        finishDate: {
            type: Date,
            default: new Date(),
        },
        quantity: {
            type: Number,
            required: true,
        },
    },
    {
        versionKey: false,
    }
);

export const NotificationSchema = mongoose.model(
    collections.notifications,
    Notification,
    collections.notifications
);
