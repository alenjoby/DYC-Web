import express from 'express';
import Enquiry from '../models/userModel.js'; // Import the Enquiry model
const router = express.Router();

// Handle Enquiry form submission
router.post('/', async (req, res) => {
    const { name, email, phone, subject, message } = req.body;
    try {
        const newEnquiry = new Enquiry({ name, email, phone, subject, message });
        await newEnquiry.save();
        res.status(201).json({ message: 'Enquiry submitted successfully!' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router;
