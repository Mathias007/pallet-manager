import { Card, Col, Row, Typography } from "antd";

import ColumnChart from "../charts/ColumnChart";
import LineChart from "../charts/LineChart";

import { count } from "./helpers/homeAdditions";

const { Title } = Typography;

function Home() {
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
                        <Card bordered={false} className="criclebox h-full">
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
                        <Card bordered={false} className="criclebox h-full">
                            <LineChart />
                        </Card>
                    </Col>
                </Row>
            </div>
        </>
    );
}

export default Home;
