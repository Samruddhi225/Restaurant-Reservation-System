import express from 'express';
import { sendReservation } from '../controller/reservation.js';
const router = express.Router();

router.post("/send" , sendReservation);
router.get("/send", (req, res) => {
    // Implement logic to retrieve reservations
    res.send("GET request to /api/v1/reservation/send");
  });



export default router;