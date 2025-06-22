import express, { Request, Response } from 'express';

const app = express();


app.use('/', (_req: Request, res: Response) => {
  res.json('Food order API');
});

app.listen('8000', () => {
    console.log("App listening to the port 8000")
})