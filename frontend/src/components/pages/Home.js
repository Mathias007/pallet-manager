import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";

import { Link } from "react-router-dom";

import { Button, Card, Col, Row } from "antd";

import ColumnChart from "../charts/ColumnChart";
import LineChart from "../charts/LineChart";

import routesPaths from "../../_config/routesPaths";
const { GENERAL, NOTIFICATIONS } = routesPaths;

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
        <div className="layout-content">
            <Row gutter={[24, 0]}>
                <Col xs={24} sm={24} md={12} lg={12} xl={10} className="mb-24">
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
                <Col xs={24} sm={24} md={12} lg={12} xl={14} className="mb-24">
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
    );
});

export default Home;
