import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { notifications } from "../../_store/_actions";

import { areas, types } from "./helpers/optionsData";

import serverStatuses from "../../_config/serverStatuses";

import {
    Button,
    DatePicker,
    Form,
    Input,
    InputNumber,
    Select,
    message,
} from "antd";

const { Item } = Form;
const { Option } = Select;

const { STATUS_OK } = serverStatuses;

const NotificationCreator = () => {
    const errorMessage = useSelector(
        (state) => state.notifications.errorMessage
    );

    const status = useSelector((state) => state.notifications.status);

    const dispatch = useDispatch();

    const handleFormSending = (values) => {
        dispatch(
            notifications.addNotification(
                values.title,
                values.area,
                values.type,
                values.startDate,
                values.finishDate,
                values.quantity
            )
        );
        if (status === STATUS_OK) {
            message.success(
                `${errorMessage} Zostań, aby dodać kolejne rekordy albo wróć do panelu.`
            );
        }
    };

    return (
        <Form
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 14 }}
            layout="horizontal"
            size="large"
            onFinish={handleFormSending}
        >
            <Item name="title" label="Tytuł zgłoszenia" required>
                <Input />
            </Item>
            <Item name="area" label="Obszar" required>
                <Select>
                    {areas.map((area) => (
                        <Option key={area} value={area}>
                            {area}
                        </Option>
                    ))}
                </Select>
            </Item>
            <Item name="type" label="Typ palety" required>
                <Select>
                    {types.map((type) => (
                        <Option key={type} value={type}>
                            {type}
                        </Option>
                    ))}
                </Select>
            </Item>

            <Item name="startDate" label="Data zgłoszenia" required>
                <DatePicker />
            </Item>
            <Item name="finishDate" label="Data realizacji" required>
                <DatePicker />
            </Item>

            <Item name="quantity" label="Liczba palet" required>
                <InputNumber />
            </Item>
            <Item label="Button">
                <Button type="primary" htmlType="submit">
                    Wyślij
                </Button>
            </Item>
        </Form>
    );
};

export default NotificationCreator;
