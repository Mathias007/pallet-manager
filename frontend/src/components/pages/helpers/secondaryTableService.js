import { Progress, Button } from "antd";

import {
    sumDurationInDays,
    sumNotificationsByType,
    sumQuantityOfType,
    sumTotalQuantity,
} from "./countMethods";

const renderType = (type) => (
    <Button type="primary" className="tag-primary">
        {type}
    </Button>
);

const renderNotificationsQuantity = (notificationsQuantity) => (
    <div className="semibold">{notificationsQuantity}</div>
);
const renderPalletsQuantity = (quantity) => (
    <div className="text-sm">{quantity}</div>
);

const renderAverageTime = (time) => <div className="text-sm">{time} dni</div>;

const renderCompletion = (percentage) => (
    <div className="ant-progress-project">
        <Progress percent={percentage} size="small" />
    </div>
);

export const renderTypesColumns = [
    {
        title: "Typ palet",
        dataIndex: "type",
        key: "type",
        render: (type) => renderType(type),
    },
    {
        title: "Ilość zgłoszeń",
        dataIndex: "notificationsQuantity",
        key: "notificationsQuantity",
        render: (quantity) => renderNotificationsQuantity(quantity),
    },
    {
        title: "Suma palet",
        dataIndex: "palletsQuantity",
        kay: "palletsQuantity",
        render: (quantity) => renderPalletsQuantity(quantity),
    },
    {
        title: "Średni czas realizacji palety",
        dataIndex: "averageTime",
        key: "averageTime",
        render: (time) => renderAverageTime(time),
    },
    {
        title: "Udział",
        dataIndex: "completion",
        key: "completion",
        render: (percentage) => renderCompletion(percentage),
    },
];

export const renderTypesList = (notificationsList) => {
    const notificationsQuantity = sumNotificationsByType(notificationsList);
    const countedQuantity = sumQuantityOfType(notificationsList);
    const totalQuantity = sumTotalQuantity(countedQuantity);
    const totalDuration = sumDurationInDays(notificationsList);

    let dataArray = [];

    for (const [key, value] of Object.entries(countedQuantity)) {
        let percentage = Math.floor((value / totalQuantity) * 100);

        let row = {
            key,
            type: key,
            notificationsQuantity: notificationsQuantity[key],
            palletsQuantity: value,
            averageTime: Math.floor(
                totalDuration[key] / notificationsQuantity[key]
            ),
            completion: percentage,
        };

        dataArray.push(row);
    }

    return dataArray;
};
