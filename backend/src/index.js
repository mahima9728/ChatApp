// const express = require("express");
import express from "express";

const app = express();
const PORT = 5001;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
