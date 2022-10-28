import express from "express";

import {
    getNotificationsList,
    getNotificationById,
    createNotification,
    createManyNotifications,
    modifNotificationById,
    deleteNotificationById,
} from "./controllers/notifications.controller";

import { ROOT_API_MESSAGE } from "./config/messages";

import routesPaths from "./config/routesPaths";
const { ROOT, NOTIFICATIONS } = routesPaths;

const router = express.Router();

router.get(ROOT, ROOT_API_MESSAGE);
router.get(NOTIFICATIONS.LIST, getNotificationsList);
router.post(NOTIFICATIONS.SINGLE, getNotificationById);
router.post(NOTIFICATIONS.ADD, createNotification);
router.post(NOTIFICATIONS.ADD_MANY, createManyNotifications);
router.patch(NOTIFICATIONS.EDIT, modifNotificationById);
router.delete(NOTIFICATIONS.REMOVE, deleteNotificationById);

export default router;
