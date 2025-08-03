import React from 'react';
import ChatSummarizer from './ChatSummarizer';

export default function MediatorDashboard({ escalations, resolveEscalation }) {
  return (
    <div className="mediator-dashboard">
      <h2>Your role ensures fairness and balance.</h2>
      <p>Each case summarized clearly — no detail lost, no voice ignored.</p>

      {escalations.map(esc => (
        <div key={esc.id} className="escalation-card">
          <h3>{esc.title}</h3>
          <ChatSummarizer content={esc.reason} />
          <button onClick={() => resolveEscalation(esc.id, 'approve')}>Approve</button>
          <button onClick={() => resolveEscalation(esc.id, 'reject')}>Reject</button>
          <button onClick={() => resolveEscalation(esc.id, 'info')}>Request Info</button>
        </div>
      ))}

      <p>Your decision keeps trust strong. Thank you for being the bridge.</p>
    </div>
  );
}
