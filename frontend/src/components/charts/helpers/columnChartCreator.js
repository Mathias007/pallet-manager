import { sumTotalQuantity } from "../../pages/helpers/countMethods";

const charAdditionalStyles = {
    primaryColor: "#fff",
    secondaryColor: "transparent",
    borderColor: "#ccc",
    show: true,
    align: "right",
};

export const generateChartSummary = (notificationsList, typesObj, areasObj) => [
    {
        Title: notificationsList.length,
        user: "Zamówień",
    },
    {
        Title: sumTotalQuantity(typesObj),
        user: "Dostarczonych palet",
    },
    {
        Title: Object.keys(areasObj).length,
        user: "Obszarów realizacji",
    },
    {
        Title: Object.keys(typesObj).length,
        user: "Typów palet",
    },
];

export const customizeChartConfiguration = (
    typesDataArr,
    typesCategoriesArr
) => {
    return {
        series: [
            {
                name: "Ilość palet",
                data: typesDataArr,
                color: charAdditionalStyles.primaryColor,
            },
        ],

        options: {
            chart: {
                type: "bar",
                width: "100%",
                height: "auto",

                toolbar: {
                    show: !charAdditionalStyles.show,
                },
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: "55%",
                    borderRadius: 5,
                },
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                show: charAdditionalStyles.show,
                width: 1,
                colors: [charAdditionalStyles.secondaryColor],
            },
            grid: {
                show: charAdditionalStyles.show,
                borderColor: charAdditionalStyles.borderColor,
                strokeDashArray: 2,
            },
            xaxis: {
                categories: typesCategoriesArr,
                labels: {
                    show: charAdditionalStyles.show,
                    align: charAdditionalStyles.align,
                    minWidth: 0,
                    maxWidth: 160,
                    style: {
                        colors: typesCategoriesArr.map(
                            (category) => charAdditionalStyles.primaryColor
                        ),
                    },
                },
            },
            yaxis: {
                labels: {
                    show: charAdditionalStyles.show,
                    align: charAdditionalStyles.align,
                    minWidth: 0,
                    maxWidth: 160,
                    style: {
                        colors: typesCategoriesArr.map(
                            (category) => charAdditionalStyles.primaryColor
                        ),
                    },
                },
            },

            tooltip: {
                y: {
                    formatter: function (val) {
                        return val;
                    },
                },
            },
        },
    };
};
