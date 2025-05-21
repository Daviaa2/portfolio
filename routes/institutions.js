import { Router } from "express";
const router = Router(); 

// Importing the four CRUD functions
import {
  getInstitutions, 
  createInstitution,
  updateInstitution,
  deleteInstitution,
} from "../controllers/institutions.js";

router.route("/").get(getInstitutions).post(createInstitution);
router.route("/:id").put(updateInstitution).delete(deleteInstitution).get(getInstitution);
// The above code is a router that handles the CRUD operations for institutions.

export default router; 