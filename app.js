import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import sendMailRoutes from './src/routes/sendMailRoutes';

class App {
  constructor() {
    this.app = express();
    this.routes();
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  routes() {
    this.app.use('/send', sendMailRoutes);
  }
}

export default new App().app;
