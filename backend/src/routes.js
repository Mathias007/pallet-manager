import express from "express";

import { ROOT_API_MESSAGE } from "./config/messages";

import { paths } from "./config/names";
const { root } = paths;

const router = express.Router();

router.get(root, ROOT_API_MESSAGE);

export default router;
