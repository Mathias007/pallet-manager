import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import ReactApexChart from "react-apexcharts";
import { Typography } from "antd";
import { MinusOutlined } from "@ant-design/icons";

import {
    generateChartContent,
    customizeChartConfiguration,
} from "./helpers/lineChartCreator";

import { notifications } from "../../_store/_actions";

const { Title, Paragraph } = Typography;

function LineChart() {
    const notificationsList = useSelector(
        (state) => state.notifications.notificationsList
    );

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(notifications.showNotificationsList());
    }, []);

    const minDate = new Date("2015, 01, 01");
    const maxDate = new Date("2015, 12, 31");

    const chartConfiguration = customizeChartConfiguration(
        generateChartContent(minDate, maxDate, notificationsList)
    );

    return (
        <>
            <div className="linechart">
                <div>
                    <Title level={5}>Realizacja</Title>
                    <Paragraph className="lastweek">
                        Staramy się <span className="bnb2">poprawiać</span> czas
                        realizacji usług.
                    </Paragraph>
                </div>
                <div className="sales">
                    <ul>
                        <li>{<MinusOutlined />} Liczba zgłoszeń</li>
                        <li>
                            {<MinusOutlined />} Średni czas realizacji palety
                        </li>
                    </ul>
                </div>
            </div>

            <ReactApexChart
                className="full-width"
                options={chartConfiguration.options}
                series={chartConfiguration.series}
                type="area"
                height={350}
                width={"100%"}
            />
        </>
    );
}

export default LineChart;
