import express from 'express';
import type { Request, Response } from 'express';
import dotenv from 'dotenv';
import axios from 'axios';
import cors from 'cors';

dotenv.config(); // Loads variables from .env

const app = express();
const PORT = 3001;

app.use(cors()); // Allows frontend to call backend

app.get('/api/weather', async (req: Request<{}, {}, {}, { city?: string }>, res: Response) => {
    const city = req.query.city;
    if (!city || typeof city !== 'string') {
      return res.status(400).json({ error: 'Missing city parameter' });
    }

  try {
    const apiKey = process.env.API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=imperial`;
    
    const response = await axios.get(url);
    res.json(response.data);
  
} catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch weather data' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
