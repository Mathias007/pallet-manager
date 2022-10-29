import { Row, Col, Card, Radio, Table, Upload, Button } from "antd";

import { ToTopOutlined } from "@ant-design/icons";

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { notifications } from "../../_store/_actions";

import { notificationsColumns, typesColumns } from "./helpers/tablesColumns";
import {
    renderNotificationsList,
    renderTypesList,
} from "./helpers/tablesGenerators";
import { uploadProps } from "./helpers/uploadData";

function Tables() {
    const onChange = (e) => console.log(`radio checked:${e.target.value}`);

    const notificationsList = useSelector(
        (state) => state.notifications.notificationsList
    );

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(notifications.showNotificationsList());
    }, []);

    const notificationsData = renderNotificationsList(notificationsList);
    const typesData = renderTypesList(notificationsList);

    return (
        <>
            <div className="tabled">
                <Row gutter={[24, 0]}>
                    <Col xs={6} sm={6} md={12} lg={24} xl={24}>
                        <Card
                            bordered={false}
                            className="criclebox tablespace mb-24"
                            title="Lista zgłoszeń"
                            extra={
                                <>
                                    <Radio.Group
                                        onChange={onChange}
                                        defaultValue="all"
                                    >
                                        <Radio.Button value="all">
                                            Wszystkie
                                        </Radio.Button>
                                        <Radio.Button value="online">
                                            Filtruj
                                        </Radio.Button>
                                    </Radio.Group>
                                    {"      "}
                                    <Button>Nowe zgłoszenie</Button>
                                </>
                            }
                        >
                            <div className="table-responsive">
                                <Table
                                    columns={notificationsColumns}
                                    dataSource={notificationsData}
                                    pagination={true}
                                    className="ant-border-space"
                                />
                            </div>
                        </Card>

                        <div className="uploadfile pb-15 shadow-none">
                            <Upload {...uploadProps}>
                                <Button
                                    type="dashed"
                                    className="ant-full-box"
                                    icon={<ToTopOutlined />}
                                >
                                    Kliknij, aby wgrać plik CSV
                                </Button>
                            </Upload>
                        </div>

                        <Card
                            bordered={false}
                            className="criclebox tablespace mb-24"
                            title="Podsumowanie typów"
                            extra={null}
                        >
                            <div className="table-responsive">
                                <Table
                                    columns={typesColumns}
                                    dataSource={typesData}
                                    pagination={false}
                                    className="ant-border-space"
                                />
                            </div>
                        </Card>
                    </Col>
                </Row>
            </div>
        </>
    );
}

export default Tables;
