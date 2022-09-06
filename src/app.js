import 'dotenv/config';
import express from 'express';

const app = express();
const port = process.env.PORT || 3001;


app.use(function (req, res, next) {
  return res.send('Hello!!');
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

export default app;
