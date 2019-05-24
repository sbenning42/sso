import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import bp from 'body-parser';
import mongoose from 'mongoose';

const {
    PORT = 4266,
    MONGO_DB = 'mongodb://localhost:27017/sso-isp',
} = process.env;

const db = mongoose.connect(MONGO_DB, { useNewUrlParser: true });

const app = express();


