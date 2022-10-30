import { message } from "antd";
import apiAddresses from "../../../_config/apiAddresses";

const { NOTIFICATIONS } = apiAddresses;

export const uploadProps = {
    name: "file",
    action: NOTIFICATIONS.UPLOAD,
    headers: {
        authorization: "authorization-text",
    },
    onChange(info) {
        if (info.file.status !== "uploading") {
            console.log(info.file, info.fileList);
        }
        if (info.file.status === "done") {
            message.success(
                `Plik ${info.file.name} został skutecznie przesłany. Odśwież stronę, aby zobaczyć uzupełnioną tabelę.`
            );
        } else if (info.file.status === "error") {
            message.error(
                `Przekazywanie pliku ${info.file.name} zakończyło się niepowodzeniem`
            );
        }
    },
};
