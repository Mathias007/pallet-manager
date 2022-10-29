export const notificationsColumns = [
    {
        title: "Tytuł zgłoszenia",
        dataIndex: "title",
        key: "title",
    },
    {
        title: "Obszar realizacji",
        dataIndex: "area",
        key: "area",
    },

    {
        title: "Typ palet",
        key: "type",
        dataIndex: "type",
    },
    {
        title: "Data przyjęcia",
        key: "startDate",
        dataIndex: "startDate",
    },
    {
        title: "Data zakończenia",
        key: "finishDate",
        dataIndex: "finishDate",
    },
    {
        title: "Liczba palet",
        key: "quantity",
        dataIndex: "quantity",
    },
    {
        title: "Czas realizacji",
        key: "realizationTime",
        dataIndex: "realizationTime",
    },
    {
        title: "Opcje",
        key: "options",
        dataIndex: "options",
    },
];

export const typesColumns = [
    {
        title: "Typ palet",
        dataIndex: "type",
    },
    {
        title: "Ilość zgłoszeń",
        dataIndex: "notificationsQuantity",
    },
    {
        title: "Suma palet",
        dataIndex: "palletsQuantity",
    },
    {
        title: "Średni czas realizacji palety",
        dataIndex: "averageTime",
    },
    {
        title: "Udział",
        dataIndex: "completion",
    },
];
