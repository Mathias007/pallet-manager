import {NotificationSchema} from "../schemas/NotificationSchema";

async function isNotificationExists() {
    const exec = await NotificationSchema.find().exec();
    return (exec.length = 0);
}

// Initialize first sample notification
export const initializeNotificationsData = async () => {
    if (!(await isNotificationExists())) {
        const notification = [
            new NotificationSchema({
                title: "Zgłoszenie testowe",
                area: "Kraków",
                type: "EUR",
                startDate: new Date(),
                finishDate: new Date(),
                quantity: 1
            })
        ];
        let done = 0;
        for (let i = 0; i < notification.length; i++) {
            notification[i].save((err, result) => {
                done++;
            });
        }
    }
};
