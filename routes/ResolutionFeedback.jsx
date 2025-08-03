import React from 'react';

export default function ResolutionFeedback({ result }) {
  return (
    <div className="resolution-feedback">
      <h2>The decision is in.</h2>
      <p>Here’s the outcome, clearly explained:</p>
      <div className="result-summary">{result.summary}</div>

      <p>Your participation made this possible. Together, we've built a stronger community.</p>
    </div>
  );
}
