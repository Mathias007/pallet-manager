import cors from "cors";
import express from "express";

import routes from "./routes";

import { PORT_LISTENING_START_MESSAGE } from "./config/messages";
import { paths } from "./config/names";
import config from "./config/config";

const { root } = paths;
const { NODE_PORT, CORS_ORIGIN } = config;

const app = express();

// Before build remove env cors origin (localhost) and use proper client url
const corsOptions = {
    origin: CORS_ORIGIN || "",
};
app.use(cors(corsOptions));

app.use(root, routes);

app.listen(process.env.PORT || 5000, "0.0.0.0", () => {
    console.log(PORT_LISTENING_START_MESSAGE(NODE_PORT || 5000));
});
