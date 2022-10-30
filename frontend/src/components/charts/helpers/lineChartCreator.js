import {
    getDataBetweenDates,
    getDataFromSelectedMonth,
    getDurationInDays,
} from "../../pages/helpers/countMethods";

const charAdditionalStyles = {
    fontSize: "14px",
    fontWeight: 600,
    primaryColor: "#8c8c8c",
    show: true,
};

export const monthsLabels = [
    "Styczeń",
    "Luty",
    "Marzec",
    "Kwiecień",
    "Maj",
    "Czerwiec",
    "Lipiec",
    "Sierpień",
    "Wrzesień",
    "Październik",
    "Listopad",
    "Grudzień",
];

const generateMonthlyNotifications = (filteredData) => {
    const monthlyNotifications = monthsLabels.map(
        (month, index) => getDataFromSelectedMonth(filteredData, index).length
    );

    return monthlyNotifications;
};

const generateMonthlyAverageTime = (filteredData) => {
    const monthlyAverageTime = monthsLabels.map((month, index) => {
        const selectedMonthData = getDataFromSelectedMonth(filteredData, index);

        const monthRealizationSingularTimes = selectedMonthData.map(
            (record, index) => {
                const { startDate, finishDate } = record;
                return getDurationInDays(startDate, finishDate);
            }
        );

        let monthRealizationTotalTime = 0;

        monthRealizationSingularTimes.forEach(
            (item) => (monthRealizationTotalTime += item)
        );

        return selectedMonthData.length > 0
            ? Math.floor(monthRealizationTotalTime / selectedMonthData.length)
            : 0;
    });

    return monthlyAverageTime;
};

export const generateChartContent = (minDate, maxDate, notificationsList) => {
    const filteredData = getDataBetweenDates(
        notificationsList,
        minDate,
        maxDate
    );

    const monthlyNotifications = generateMonthlyNotifications(filteredData);
    const monthlyAverageTime = generateMonthlyAverageTime(filteredData);

    return [monthlyNotifications, monthlyAverageTime];
};

export const customizeChartConfiguration = (series) => {
    return {
        series: [
            {
                name: "Liczba zgłoszeń",
                data: series[0],
                offsetY: 0,
            },
            {
                name: "Czas realizacji",
                data: series[1],
                offsetY: 0,
            },
        ],

        options: {
            chart: {
                width: "100%",
                height: 350,
                type: "area",
                toolbar: {
                    show: !charAdditionalStyles.show,
                },
            },

            legend: {
                show: !charAdditionalStyles.show,
            },

            dataLabels: {
                enabled: false,
            },
            stroke: {
                curve: "smooth",
            },

            yaxis: {
                labels: {
                    style: {
                        fontSize: charAdditionalStyles.fontSize,
                        fontWeight: charAdditionalStyles.fontWeight,
                        colors: [charAdditionalStyles.primaryColor],
                    },
                },
            },

            xaxis: {
                labels: {
                    style: {
                        fontSize: charAdditionalStyles.fontSize,
                        fontWeight: charAdditionalStyles.fontWeight,
                        colors: monthsLabels.map(
                            (label) => charAdditionalStyles.primaryColor
                        ),
                    },
                },
                categories: monthsLabels,
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
