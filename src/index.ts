import cors from 'cors';
import express from 'express';

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

app.get('/', (req, res) => {
  res.send('API is running');
});

export default app;
