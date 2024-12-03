'use strict';

const express = require('express');
const app = express();

// Define endpoint for exercise 1
app.get('/math/circle/:r', function(req, res) {
  // Extract the radius from the URL parameter
  const radius = parseFloat(req.params.r);

  // Validate the radius to ensure it's a number and positive
  if (isNaN(radius) || radius <= 0) {
    res.status(400).json({ error: "Invalid radius. Please provide a positive number." });
    return;
  }

  // Calculate the area and circumference
  const area = Math.PI * radius * radius;
  const circumference = 2 * Math.PI * radius;

  // Respond with the results in JSON format
  res.json({
    area: parseFloat(area.toFixed(2)), // Limit to 2 decimal places
    circumference: parseFloat(circumference.toFixed(2)) // Limit to 2 decimal places
  });
});

// Define endpoint for exercise 2
app.get('/hello/name', function(req, res) {
  const firstName = req.query.first;
  const lastName = req.query.last;

  // Check for missing parameters
  const missingParams = [];
  if (!firstName) {
    missingParams.push("first");
  }
  if (!lastName) {
    missingParams.push("last");
  }

  if (missingParams.length > 0) {
    // Respond with 400 status and list missing parameters
    res.status(400).send(`Missing Required GET parameters: ${missingParams.join(", ")}`);
    return;
  }

  // Respond with a plain text greeting
  res.send(`Hello ${firstName} ${lastName}`);
});

// Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
