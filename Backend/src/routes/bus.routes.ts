import { Router } from "express";
import { addBus, listBuses } from "../controllers/bus.controller";

const router = Router();

router.post("/", addBus);
router.get("/", listBuses);

export default router;