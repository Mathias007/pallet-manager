import csv from "csvtojson";

import { NotificationSchema } from "../schemas/NotificationSchema";

export async function dataConverter(inputDatabaseInCSV) {
    const convertedData = await csv().fromFile(inputDatabaseInCSV);

    NotificationSchema.insertMany(convertedData)
        .then(
            console.log(
                "Dane zapisane w pliku CSV zostały skutecznie przekształcone do formatu JSON i przekazane do bazy"
            )
        )
        .catch((error) => console.log(error));
}
