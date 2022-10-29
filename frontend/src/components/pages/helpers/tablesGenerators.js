import { Progress, Button, Typography } from "antd";

import {
    getDurationInDays,
    showLongDate,
    sumDurationInDays,
    sumNotificationsByType,
    sumQuantityOfType,
    sumTotalQuantity,
} from "./countMethods";

const { Title } = Typography;

export const renderNotificationsList = (notificationsList) => {
    if (notificationsList) {
        return notificationsList.map((notificationRecord, index) => {
            const {
                _id,
                title,
                area,
                type,
                startDate,
                finishDate,
                quantity,
            } = notificationRecord;

            return {
                key: _id,
                title: (
                    <div className="author-info">
                        <Title level={5}>{title}</Title>
                    </div>
                ),
                area: (
                    <div className="author-info">
                        <Title level={5}>{area}</Title>
                    </div>
                ),
                type: (
                    <Button type="primary" className="tag-primary">
                        {type}
                    </Button>
                ),
                startDate: (
                    <div className="ant-employed">
                        <span>{showLongDate(startDate)}</span>
                    </div>
                ),
                finishDate: (
                    <div className="ant-employed">
                        <span>{showLongDate(finishDate)}</span>
                    </div>
                ),
                realizationTime: (
                    <div className="ant-employed">
                        <span>
                            {getDurationInDays(startDate, finishDate)} dni
                        </span>
                    </div>
                ),
                quantity: (
                    <div className="ant-employed">
                        <span>{quantity}</span>
                    </div>
                ),
                options: (
                    <div className="ant-employed">
                        <a href={`#${_id}`}>Edit</a>
                        <a href={`#${_id}`}>Remove</a>
                    </div>
                ),
            };
        });
    }
};

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

            type: (
                <Button type="primary" className="tag-primary">
                    {key}
                </Button>
            ),
            notificationsQuantity: (
                <div className="semibold">{notificationsQuantity[key]}</div>
            ),
            palletsQuantity: <div className="text-sm">{value}</div>,
            averageTime: (
                <div className="text-sm">
                    {Math.floor(
                        totalDuration[key] / notificationsQuantity[key]
                    )}{" "}
                    dni
                </div>
            ),
            completion: (
                <div className="ant-progress-project">
                    <Progress percent={percentage} size="small" />
                </div>
            ),
        };

        dataArray.push(row);
    }

    return dataArray;
};
