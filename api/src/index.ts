import express from "express";
import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost:27017')
	.then(() => {
  const app = express();
	const port = 7777;
		
	app.listen(port, () => {
  console.log("Fogo")
	})
})
.catch(() => console.log('error connect'));

