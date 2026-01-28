import dotenv from "dotenv";
import "express-async-errors";
dotenv.config();

import express from "express";
const app = express();

import connectDB from "./db/connect";
import authRouter from "./routes/authRoute";
import userRouter from "./routes/userRoute";
import gameRouter from "./routes/gamesRoute";
import subscriptionRouter from "./routes/subscriptionRoute";
import favoriteRouter from "./routes/favoriteRoute";
import confirmationRouter from "./routes/confirmationRoute";
import blockchainRouter from "./routes/blockchainRoute";
import productRouter from "./routes/productRoutes";

import notFoundMiddleware from "./middleware/not-found";
import errorHandlerMiddleware from "./middleware/error-handler";
import authMiddleware from "./middleware/authMiddleware";

import cors from "cors";

// middleware
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://127.0.0.1:3000",
      "https://mygamerhub.netlify.app",
      "https://bnb-hackathon-pro.vercel.app",
    ],
    credentials: true,
  }) as any
);
app.use(express.static("./public"));
app.use(express.json());

//public routes
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/games", gameRouter);
app.use("/api/v1/confirm", confirmationRouter);
app.use("/api/v1/blockchainroute", blockchainRouter);

//restricted routes
app.use("/api/v1/users", authMiddleware, userRouter);
app.use("/api/v1/favorites", authMiddleware, favoriteRouter);
app.use("/api/v1/subscription", authMiddleware, subscriptionRouter);
app.use("/api/v1/production", authMiddleware, productRouter);

//error middlewares
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 10000;

//start server
const start = async () => {
  const dbUrl = process.env.DATABASE_URL || process.env.MONGO_URI;
  try {
    console.log(`Attempting to connect to database...`);
    await connectDB(`${dbUrl}`);
    console.log(`Database connected successfully.`);
    app.listen(port, () =>
      // tslint:disable-next-line:no-console
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.error("!!! DATABASE CONNECTION ERROR !!!");
    console.error(`Could not connect to MongoDB at: ${dbUrl}`);
    console.error("Please ensure your local MongoDB service is running (mongod) or update DATABASE_URL in config.env");
    console.error(error);
    
    // Fallback: Start server anyway so frontend can still load (though API calls will fail)
    app.listen(port, () =>
      console.log(`Server started in FALLBACK mode (no DB) on port ${port}...`)
    );
  }
};

start();
