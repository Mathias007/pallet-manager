export const CASE_UNAUTHORIZED_MESSAGE = (section) => {
    return `Wystąpił problem z autoryzacją przy pobieraniu danych dla sekcji ${section}.`;
};

export const CASE_NOT_FOUND_MESSAGE = (section) => {
    return `Nie znaleziono danych dla sekcji ${section}.`;
};

export const CASE_SUCCESS_MESSAGE = (section) => {
    return `Dane dla sekcji ${section} zostały pomyślnie załadowane.`;
};

export const DATABASE_CONNECTION_ERROR_MESSAGE = (error) => {
    return `Error: Could not connect to MongoDB - ${error}`;
};

export const PORT_LISTENING_START_MESSAGE = (port) => {
    return `Serwer działa na porcie ${port}`;
};

export const ROOT_API_MESSAGE = (req, res) => {
    res.json({
        message: "Witamy w Pallet App - API",
    });
};
