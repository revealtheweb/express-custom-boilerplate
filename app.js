import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import linksRoute from './api/routes/linksRoutes'

const app = express();

app.use(cors());
app.use('/api/v1/', linksRoute);


app.listen(process.env.PORT, () => 
  console.log("hello internal links on port 8000"),
)
