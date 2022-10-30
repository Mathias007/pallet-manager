import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import ReactApexChart from "react-apexcharts";
import { Row, Col, Typography } from "antd";

import { notifications } from "../../_store/_actions";

import {
    sumNotificationsByType,
    sumQuantityOfType,
    sumQuantityOfArea,
} from "../pages/helpers/countMethods";

import {
    customizeChartConfiguration,
    generateChartSummary,
} from "./helpers/columnChartCreator";

const { Title, Paragraph } = Typography;

function ColumnChart() {
    const notificationsList = useSelector(
        (state) => state.notifications.notificationsList
    );

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(notifications.showNotificationsList());
    }, []);

    const typesObj = sumQuantityOfType(notificationsList);
    const areasObj = sumQuantityOfArea(notificationsList);
    const nofificationsByTypeObj = sumNotificationsByType(notificationsList);

    let typesDataArr = [];
    let typesCategoriesArr = [];
    let notificationsByTypeArr = [];

    for (const [key, value] of Object.entries(typesObj)) {
        typesDataArr.push(value);
        typesCategoriesArr.push(key);
    }

    for (const [key, value] of Object.entries(nofificationsByTypeObj)) {
        notificationsByTypeArr.push(value);
    }

    const chartConfiguration = customizeChartConfiguration(
        typesDataArr,
        typesCategoriesArr
    );

    const chartSummary = generateChartSummary(
        notificationsList,
        typesObj,
        areasObj
    );

    return (
        <>
            <div id="chart">
                <ReactApexChart
                    className="bar-chart"
                    options={chartConfiguration.options}
                    series={chartConfiguration.series}
                    type="bar"
                    height={220}
                    data={notificationsList}
                />
            </div>
            <div className="chart-vistior">
                <Title level={5}>
                    Suma dostarczonych palet poszczególnych typów.{" "}
                </Title>
                <Paragraph className="lastweek">
                    Nasza oferta wciąż się{" "}
                    <span className="bnb2">poszerza</span>!
                </Paragraph>
                <Paragraph className="lastweek">
                    Nasza działalność w liczbach:
                </Paragraph>
                <Row gutter>
                    {chartSummary.map((v, index) => (
                        <Col xs={6} xl={6} sm={6} md={6} key={index}>
                            <div className="chart-visitor-count">
                                <Title level={4}>{v.Title}</Title>
                                <span>{v.user}</span>
                            </div>
                        </Col>
                    ))}
                </Row>
            </div>
        </>
    );
}

export default ColumnChart;
