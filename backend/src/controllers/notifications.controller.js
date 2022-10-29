import mongoose from "mongoose";

import { NotificationSchema } from "../schemas/NotificationSchema";
import { dataConverter } from "../helpers/notificationsDataConverter";

import statuses from "../config/statuses";

import {
    CASE_UNAUTHORIZED_MESSAGE,
    CASE_NOT_FOUND_MESSAGE,
    CASE_SUCCESS_MESSAGE,
} from "../config/messages";

const { UNAUTHORIZED, NOT_FOUND, CONFLICT } = statuses;

export const getNotificationsList = (req, res, next) => {
    NotificationSchema.find({}, {}, (err, notificationsData) => {
        if (err || !notificationsData) {
            res.status(UNAUTHORIZED).send({
                message: CASE_UNAUTHORIZED_MESSAGE("NOTIFICATIONS"),
            });
            next(err);
        } else if (!notificationsData) {
            res.status(NOT_FOUND).send({
                message: CASE_NOT_FOUND_MESSAGE("NOTIFICATIONS"),
            });
        } else {
            res.json({
                message: CASE_SUCCESS_MESSAGE("NOTIFICATIONS"),
                notificationsData,
            });
            console.log(notificationsData);
        }
    });
};

export const getNotificationById = (req, res, next) => {
    const messages = {
        CASE_UNAUTHORIZED_MESSAGE: "Wystąpił problem z autoryzacją!",
        CASE_NOT_FOUND_MESSAGE:
            "Nie znaleziono zgłoszenia o podanym identyfikatorze!",
        CASE_SUCCESS_MESSAGE:
            "Wyszukiwanie zgłoszenia zakończyło się powodzeniem.",
    };

    const {
        CASE_UNAUTHORIZED_MESSAGE,
        CASE_NOT_FOUND_MESSAGE,
        CASE_SUCCESS_MESSAGE,
    } = messages;

    let notificationID = mongoose.Types.ObjectId(req.body.id);
    NotificationSchema.findOne({ _id: notificationID }, (err, notification) => {
        if (err) {
            res.status(UNAUTHORIZED).send({
                message: CASE_UNAUTHORIZED_MESSAGE,
            });
            next(err);
        } else if (!notification) {
            res.status(NOT_FOUND).send({ message: CASE_NOT_FOUND_MESSAGE });
        } else {
            console.log(notification);
            res.json({
                message: CASE_SUCCESS_MESSAGE,
                notification,
            });
        }
    });
};

export const uploadFileAndSaveNotifications = async (req, res, next) => {
    try {
        if (!req.files) {
            res.send({
                status: false,
                message: "No file uploaded",
            });
        } else {
            let notificationsDataFile = req.files.file;

            await notificationsDataFile.mv(
                "./uploads/" + notificationsDataFile.name
            );

            dataConverter("uploads/" + notificationsDataFile.name);

            res.send({
                status: true,
                message:
                    "Dane zapisane w pliku CSV zostały skutecznie przekształcone do formatu JSON i przekazane do bazy. Kopię pliku CSV zapisano na serwerze.",
                data: {
                    name: notificationsDataFile.name,
                    mimetype: notificationsDataFile.mimetype,
                    size: notificationsDataFile.size,
                },
            });
        }
    } catch (err) {
        res.status(500).send(err);
    }
};

export const createNotification = (req, res, next) => {
    const messages = {
        CASE_SUCCESS_MESSAGE: "Zgłoszenie zostało skutecznie utworzone!",
        CASE_CONFLICT_MESSAGE:
            "Żądanie nie może zostać wykonane z powodu zaistnienia konfliktu!",
    };

    const { CASE_CONFLICT_MESSAGE, CASE_SUCCESS_MESSAGE } = messages;

    NotificationSchema.create(
        {
            title: req.body.title,
            area: req.body.area,
            type: req.body.type,
            startDate: req.body.startDate,
            finishDate: req.body.finishDate,
            quantity: req.body.quantity,
        },
        (error, result) => {
            if (error) next(error);
            else
                res.json({
                    message: CASE_SUCCESS_MESSAGE,
                });
        }
    );
};

export const createManyNotifications = (req, res, next) => {
    const messages = {
        CASE_SUCCESS_MESSAGE:
            "Zestaw zgłoszeń został skutecznie umieszczony w bazie!",
        CASE_CONFLICT_MESSAGE:
            "Żądanie nie może zostać wykonane z powodu zaistnienia konfliktu!",
    };

    const { CASE_CONFLICT_MESSAGE, CASE_SUCCESS_MESSAGE } = messages;

    console.log(req.body.notificationsArray);

    NotificationSchema.insertMany(req.body.notificationsArray)
        .then(res.json({ message: CASE_SUCCESS_MESSAGE }))
        .catch((error) => next(error));
};

export const modifNotificationById = (req, res, next) => {
    const messages = {
        CASE_UNAUTHORIZED_MESSAGE:
            "Wystąpił problem z autoryzacją podczas modyfikacji zgłoszenia!",
        CASE_NOT_FOUND_MESSAGE:
            "Nie znaleziono zgłoszenia o wybranym identyfikatorze!",
        CASE_SUCCESS_MESSAGE: "Dane zgłoszenia zostały zmodyfikowane!",
    };

    const {
        CASE_UNAUTHORIZED_MESSAGE,
        CASE_NOT_FOUND_MESSAGE,
        CASE_SUCCESS_MESSAGE,
    } = messages;

    let notificationID = mongoose.Types.ObjectId(req.body.id);

    NotificationSchema.updateOne(
        { _id: notificationID },
        {
            $set: req.body,
        },
        (err, notification) => {
            if (err) {
                res.status(UNAUTHORIZED).send({
                    message: CASE_UNAUTHORIZED_MESSAGE,
                });
                next(err);
            } else if (!notification) {
                res.status(NOT_FOUND).send({
                    message: CASE_NOT_FOUND_MESSAGE,
                });
            } else {
                console.log(notification);
                res.json({ message: CASE_SUCCESS_MESSAGE, notification });
            }
        }
    );
};

export const deleteNotificationById = (req, res, next) => {
    const messages = {
        CASE_UNAUTHORIZED_MESSAGE:
            "Wystąpił problem z autoryzacją podczas usuwania zgłoszenia!",
        CASE_NOT_FOUND_MESSAGE: "Nie ma zgłoszenia o wybranym identyfikatorze!",
        CASE_SUCCESS_MESSAGE: "Wybrane zgłoszenie zostało usunięte!",
    };

    const {
        CASE_UNAUTHORIZED_MESSAGE,
        CASE_NOT_FOUND_MESSAGE,
        CASE_SUCCESS_MESSAGE,
    } = messages;

    let notificationID = mongoose.Types.ObjectId(req.body.id);

    NotificationSchema.deleteOne(
        { _id: notificationID },
        (err, notification) => {
            if (err) {
                res.status(UNAUTHORIZED).send({
                    message: CASE_UNAUTHORIZED_MESSAGE,
                });
                next(err);
            } else if (!notification.deletedCount) {
                res.status(NOT_FOUND).send({
                    message: CASE_NOT_FOUND_MESSAGE,
                });
            } else {
                console.log(notification);
                res.json({ message: CASE_SUCCESS_MESSAGE });
            }
        }
    );
};
