import { Button, Typography, Divider } from "antd";
import { Link } from "react-router-dom";

import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

import {
    showLongDate,
    sumQuantityOfType,
    sumQuantityOfArea,
    getDurationInDays,
} from "./countMethods";

import addressFragments from "../../../_config/addressFragments";

const { NOTIFICATIONS, EDIT, REMOVE } = addressFragments;

const { Title } = Typography;

const renderTitle = (title) => (
    <div className="author-info">
        <Title level={5}>{title}</Title>
    </div>
);

const renderArea = (area) => (
    <div className="author-info">
        <Title level={5}>{area}</Title>
    </div>
);

const renderType = (type) => (
    <Button type="primary" className="tag-primary">
        {type}
    </Button>
);

const renderDate = (date) => (
    <div className="ant-employed">
        <span>{showLongDate(date)}</span>
    </div>
);

const renderQuantity = (quantity) => (
    <div className="ant-employed">
        <span>{quantity}</span>
    </div>
);

const renderTime = (time) => (
    <div className="ant-employed">
        <span>{time} dni</span>
    </div>
);

const renderOptions = (id) => (
    <div className="ant-employed">
        <Divider type="vertical" />
        <Link to={`${NOTIFICATIONS}/${EDIT}/${id}`}>
            <EditOutlined />
        </Link>
        <Divider type="vertical" />
        <Link to={`${NOTIFICATIONS}/${REMOVE}/${id}`}>
            <DeleteOutlined />
        </Link>
    </div>
);

const renderTypesFilters = (list) => {
    const typesObj = sumQuantityOfType(list);

    let typesArr = [];

    for (const [key, value] of Object.entries(typesObj)) {
        typesArr.push({ text: key, value: key });
    }

    return typesArr;
};

const renderAreasFilters = (list) => {
    const typesObj = sumQuantityOfArea(list);

    let areasArr = [];

    for (const [key, value] of Object.entries(typesObj)) {
        areasArr.push({ text: key, value: key });
    }

    return areasArr;
};

export const renderNotificationsColumns = (notificationsList) => [
    {
        title: "Tytuł zgłoszenia",
        dataIndex: "title",
        key: "title",
        render: (title) => renderTitle(title),
        sorter: (a, b) => a.title.localeCompare(b.title),
        sortDirections: ["descend", "ascend"],
    },
    {
        title: "Obszar realizacji",
        dataIndex: "area",
        key: "area",
        render: (area) => renderArea(area),
        filters: renderAreasFilters(notificationsList),
        onFilter: (value, record) => record.area.indexOf(value) === 0,
    },

    {
        title: "Typ palet",
        key: "type",
        dataIndex: "type",
        render: (type) => renderType(type),
        filters: renderTypesFilters(notificationsList),
        onFilter: (value, record) => record.type.indexOf(value) === 0,
    },
    {
        title: "Data przyjęcia",
        key: "startDate",
        dataIndex: "startDate",
        render: (date) => renderDate(date),
        sorter: (a, b) =>
            new Date(a.startDate).getTime() - new Date(b.startDate).getTime(),
        sortDirections: ["descend", "ascend"],
    },
    {
        title: "Data zakończenia",
        key: "finishDate",
        dataIndex: "finishDate",
        render: (date) => renderDate(date),
        sorter: (a, b) =>
            new Date(a.finishDate).getTime() - new Date(b.finishDate).getTime(),
        sortDirections: ["descend", "ascend"],
    },
    {
        title: "Liczba palet",
        key: "quantity",
        dataIndex: "quantity",
        render: (quantity) => renderQuantity(quantity),
        sorter: (a, b) => a.quantity - b.quantity,
        sortDirections: ["descend", "ascend"],
    },
    {
        title: "Czas realizacji",
        key: "realizationTime",
        dataIndex: "realizationTime",
        render: (time) => renderTime(time),
    },
    {
        title: "Opcje",
        key: "options",
        dataIndex: "options",
        render: (id) => renderOptions(id),
    },
];

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
                title: title,
                area: area,
                type: type,
                startDate: startDate,
                finishDate: finishDate,
                realizationTime: getDurationInDays(startDate, finishDate),
                quantity: quantity,
                options: _id,
            };
        });
    }
};
