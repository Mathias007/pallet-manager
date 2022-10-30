import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";

import { Link } from "react-router-dom";

import { Button, Card, Col, Row, Typography } from "antd";

import ColumnChart from "../charts/ColumnChart";
import LineChart from "../charts/LineChart";

import { count } from "./helpers/homeAdditions";

import routesPaths from "../../_config/routesPaths";
const { GENERAL, NOTIFICATIONS } = routesPaths;

const { Title } = Typography;

const Home = React.forwardRef((props, ref) => {
    const columnChartComponentRef = useRef();
    const lineChartComponentRef = useRef();

    const handlePrintColumnChart = useReactToPrint({
        content: () => columnChartComponentRef.current,
    });

    const handlePrintLineChart = useReactToPrint({
        content: () => lineChartComponentRef.current,
    });

    return (
        <>
            <div className="layout-content">
                <Row className="rowgap-vbox" gutter={[24, 0]}>
                    {count.map((c, index) => (
                        <Col
                            key={index}
                            xs={24}
                            sm={24}
                            md={12}
                            lg={6}
                            xl={6}
                            className="mb-24"
                        >
                            <Card bordered={false} className="criclebox ">
                                <div className="number">
                                    <Row align="middle" gutter={[24, 0]}>
                                        <Col xs={18}>
                                            <span>{c.today}</span>
                                            <Title level={3}>
                                                {c.title}{" "}
                                                <small className={c.bnb}>
                                                    {c.persent}
                                                </small>
                                            </Title>
                                        </Col>
                                        <Col xs={6}>
                                            <div className="icon-box">
                                                {c.icon}
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Card>
                        </Col>
                    ))}
                </Row>

                <Row gutter={[24, 0]}>
                    <Col
                        xs={24}
                        sm={24}
                        md={12}
                        lg={12}
                        xl={10}
                        className="mb-24"
                    >
                        <Card
                            bordered={false}
                            className="criclebox h-full"
                            ref={columnChartComponentRef}
                            extra={
                                <>
                                    <Button>
                                        <Link to={GENERAL.TABLES}>
                                            Przejdź do zestawień
                                        </Link>
                                    </Button>
                                    <Button>
                                        <Link to={NOTIFICATIONS.ADD}>
                                            Nowe zgłoszenie
                                        </Link>
                                    </Button>
                                    <Button
                                        onClick={handlePrintColumnChart}
                                        type="primary"
                                    >
                                        Druk lub PDF
                                    </Button>
                                </>
                            }
                        >
                            <ColumnChart />
                        </Card>
                    </Col>
                    <Col
                        xs={24}
                        sm={24}
                        md={12}
                        lg={12}
                        xl={14}
                        className="mb-24"
                    >
                        <Card
                            bordered={false}
                            className="criclebox h-full"
                            ref={lineChartComponentRef}
                            extra={
                                <>
                                    <Button>
                                        <Link to={GENERAL.TABLES}>
                                            Przejdź do zestawień
                                        </Link>
                                    </Button>
                                    <Button>
                                        <Link to={NOTIFICATIONS.ADD}>
                                            Nowe zgłoszenie
                                        </Link>
                                    </Button>
                                    <Button
                                        onClick={handlePrintLineChart}
                                        type="primary"
                                    >
                                        Druk lub PDF
                                    </Button>
                                </>
                            }
                        >
                            <LineChart />
                        </Card>
                    </Col>
                </Row>
            </div>
        </>
    );
});

export default Home;
