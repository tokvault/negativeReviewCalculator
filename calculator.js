<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Reputation Management Widget</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f4f4f4;
      margin: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
    }

    #widget-container {
      background-color: #fff;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }

    label {
      display: block;
      margin-bottom: 8px;
    }

    input {
      width: 100%;
      padding: 8px;
      margin-bottom: 16px;
    }

    button {
      background-color: #4caf50;
      color: #fff;
      padding: 10px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }

    #result-container {
      margin-top: 20px;
    }
  </style>
</head>
<body>

  <div id="widget-container">
    <label for="current-reviews">Current Number of Reviews:</label>
    <input type="number" id="current-reviews" min="0" value="0">

    <label for="current-rating">Current Review Rating:</label>
    <input type="number" id="current-rating" min="1" max="5" step="0.1" value="5">

    <label for="bad-review-score">Score of Bad Review:</label>
    <input type="number" id="bad-review-score" min="1" max="5" step="0.1" value="1">

    <label for="num-bad-reviews">Number of Bad Reviews:</label>
    <input type="number" id="num-bad-reviews" min="0" value="0">

    <button onclick="calculateScore()">Calculate Score</button>

    <div id="result-container">
      <p id="result">Your simulated Google review score will be displayed here.</p>
    </div>
  </div>

  <script>
    function calculateScore() {
      // Retrieve input values
      const currentReviews = parseFloat(document.getElementById('current-reviews').value);
      const currentRating = parseFloat(document.getElementById('current-rating').value);
      const badReviewScore = parseFloat(document.getElementById('bad-review-score').value);
      const numBadReviews = parseInt(document.getElementById('num-bad-reviews').value);

      // Calculate simulated Google review score
      const simulatedScore = ((currentReviews * currentRating) + (badReviewScore * numBadReviews)) / (currentReviews + numBadReviews);

      // Display the result
      const resultElement = document.getElementById('result');
      resultElement.textContent = `Your simulated Google review score is: ${simulatedScore.toFixed(2)}`;
    }
  </script>

</body>
</html>
