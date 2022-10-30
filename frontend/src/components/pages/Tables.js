import React, { useEffect, useRef } from "react";
import { useReactToPrint } from "react-to-print";

import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { Row, Col, Card, Table, Upload, Button } from "antd";
import { ToTopOutlined } from "@ant-design/icons";

import { notifications } from "../../_store/_actions";

import {
    renderNotificationsList,
    renderNotificationsColumns,
} from "./helpers/mainTableService";

import {
    renderTypesList,
    renderTypesColumns,
} from "./helpers/secondaryTableService";

import { uploadProps } from "./helpers/uploadData";

import routesPaths from "../../_config/routesPaths";

const { NOTIFICATIONS } = routesPaths;

const Tables = React.forwardRef((props, ref) => {
    const mainTableComponentRef = useRef();
    const secondaryTableComponentRef = useRef();

    const handlePrintMainTable = useReactToPrint({
        content: () => mainTableComponentRef.current,
    });

    const handlePrintSecondaryTable = useReactToPrint({
        content: () => secondaryTableComponentRef.current,
    });

    const notificationsList = useSelector(
        (state) => state.notifications.notificationsList
    );

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(notifications.showNotificationsList());
    }, []);

    const notificationsColumns = renderNotificationsColumns(notificationsList);
    const typesColumns = renderTypesColumns;

    const notificationsData = renderNotificationsList(notificationsList);
    const typesData = renderTypesList(notificationsList);

    return (
        <div className="tabled">
            <Row gutter={[24, 0]}>
                <Col xs={6} sm={6} md={12} lg={24} xl={24}>
                    <Card
                        bordered={false}
                        className="criclebox tablespace mb-24"
                        title="Lista zgłoszeń"
                        extra={
                            <>
                                <Button>
                                    <Link to={NOTIFICATIONS.ADD}>
                                        Nowe zgłoszenie
                                    </Link>
                                </Button>
                                <Button
                                    onClick={handlePrintMainTable}
                                    type="primary"
                                >
                                    Druk lub PDF
                                </Button>
                            </>
                        }
                    >
                        <div className="table-responsive">
                            <Table
                                ref={mainTableComponentRef}
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
                        extra={
                            <>
                                <Button
                                    onClick={handlePrintSecondaryTable}
                                    type="primary"
                                >
                                    Druk lub PDF
                                </Button>
                            </>
                        }
                    >
                        <div className="table-responsive">
                            <Table
                                ref={secondaryTableComponentRef}
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
    );
});

export default Tables;
