import React from 'react';

export default function WelcomeScreen({ onNext }) {
  return (
    <div className="welcome-screen">
      <h1>Governance, made simple.<br/>Community, made strong.</h1>
      <p>Welcome to a platform where governance is clear, fair, and collaborative. Let's build trust together.</p>
      <button onClick={onNext}>I can do this.</button>
    </div>
  );
}
