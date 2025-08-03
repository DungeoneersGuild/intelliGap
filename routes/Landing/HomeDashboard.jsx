import React from 'react';

export default function HomeDashboard({ navigate }) {
  return (
    <div className="home-dashboard">
      <h2>Welcome back! What would you like to do today?</h2>
      
      <button onClick={() => navigate('create-proposal')}>Create a Proposal ➝</button>
      <button onClick={() => navigate('community-discussion')}>Join a Discussion ➝</button>
      <button onClick={() => navigate('review-votes')}>Review Votes ➝</button>
      <button onClick={() => navigate('mediator-dashboard')}>Act as Mediator ➝</button>
    </div>
  );
}
