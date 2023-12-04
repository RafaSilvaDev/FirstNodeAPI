import { Router } from "express";
import SelecaoController from "./app/controllers/SelecaoController.js";

const router = Router()

router.get("/selecoes",        SelecaoController.show);
router.get("/selecoes/:id",    SelecaoController.index);
router.post("/selecoes",       SelecaoController.store);
router.delete("/selecoes/:id", SelecaoController.delete);
router.put("/selecoes/:id",    SelecaoController.update);

export default router;
