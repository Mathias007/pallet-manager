const DATES = {
    locale: "pl-PL",
    timeStringOptions: {
        hour: "2-digit",
        minute: "2-digit",
    },
    shortDateStringOptions: {
        month: "long",
        day: "numeric",
    },
    longDateStringOptions: {
        weekday: "short",
        year: "numeric",
        month: "long",
        day: "numeric",
    },
};

export const getDataBetweenDates = (inputData, minDate, maxDate) => {
    const finalData = inputData.filter((record) => {
        const { startDate } = record;
        return (
            new Date(startDate).getTime() >= new Date(minDate).getTime() &&
            new Date(startDate).getTime() <= new Date(maxDate).getTime()
        );
    });

    return finalData;
};

export const getDataFromSelectedMonth = (inputData, month) => {
    const finalData = inputData.filter((record) => {
        const { startDate } = record;
        return new Date(startDate).getMonth() === month;
    });

    return finalData;
};

export const showLongDate = (date) =>
    new Date(date).toLocaleDateString(
        DATES.locale,
        DATES.longDateStringOptions
    );

export const showShortDate = (date) =>
    new Date(date).toLocaleDateString(
        DATES.locale,
        DATES.shortDateStringOptions
    );

export const getDurationInDays = (startDate, finishDate) => {
    const start = new Date(startDate).getTime();
    const finish = new Date(finishDate).getTime();

    const durationInDays = Math.floor((finish - start) / (1000 * 60 * 60 * 24));

    return durationInDays;
};

export const sumDurationInDays = (list) => {
    return list.reduce((acc, curr) => {
        return {
            ...acc,
            [curr.type]:
                (acc[curr.type] || 0) +
                getDurationInDays(curr.startDate, curr.finishDate),
        };
    }, {});
};

export const sumNotificationsByType = (list) => {
    return list.reduce((acc, curr) => {
        return {
            ...acc,
            [curr.type]: (acc[curr.type] || 0) + 1,
        };
    }, {});
};

export const sumQuantityOfType = (list) => {
    return list.reduce((acc, curr) => {
        return {
            ...acc,
            [curr.type]: (acc[curr.type] || 0) + curr.quantity,
        };
    }, {});
};

export const sumQuantityOfArea = (list) => {
    return list.reduce((acc, curr) => {
        return {
            ...acc,
            [curr.area]: (acc[curr.area] || 0) + curr.quantity,
        };
    }, {});
};

export const sumTotalQuantity = (listOfTypes) => {
    let totalQuantity = 0;

    for (const [key, value] of Object.entries(listOfTypes)) {
        totalQuantity += value;
    }

    return totalQuantity;
};
