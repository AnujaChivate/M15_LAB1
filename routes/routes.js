import express from "express";
import {
    getAllEmployees,
    getEmployee,
    createEmployee,
    updateEmployee,
    deleteEmployee,
} from "../controllers/employees.js";

const router = express.Router();

router.route("/api/employees").get(getAllEmployees).post(createEmployee);

router.route("/api/employees/:id").delete(deleteEmployee);
//      router.route('/:id')
//     .get(getEmployee)
//     .patch(updateEmployee)

export default router;
