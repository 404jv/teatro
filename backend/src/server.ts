import "reflect-metadata";
import 'express-async-errors';
import express, { NextFunction, Request, Response } from 'express';
import './database';
import { routes } from "./routes";
import { HttpError } from "./errors/HttpError";
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
  if (error instanceof HttpError) {
    if (!error.message) {
      return response.status(error.statusCode).end();
    }

    return response.status(error.statusCode).json({
      error: error.message
    })
  }

  console.log(error);
  return response.status(500).json({
    status: "error",
    message: "Internal Server Error"
  })
});


app.listen(3333, () => console.log('🚀 Server is running at http://localhost:3333'));
