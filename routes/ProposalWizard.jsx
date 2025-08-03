import React, { useState } from 'react';
import ChatHelper from './ChatHelper';

export default function ProposalWizard({ onSubmit }) {
  const [title, setTitle] = useState('');
  const [purpose, setPurpose] = useState('');
  const [outcome, setOutcome] = useState('');

  return (
    <div className="proposal-wizard">
      <h2>Create Your Proposal</h2>
      
      <label>
        What's your idea? Give it a clear name:
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>

      <label>
        Describe the purpose in everyday language:
        <textarea value={purpose} onChange={(e) => setPurpose(e.target.value)} />
      </label>

      <label>
        What outcome should your community expect?
        <textarea value={outcome} onChange={(e) => setOutcome(e.target.value)} />
      </label>

      <button onClick={() => onSubmit({ title, purpose, outcome })}>
        Submit Proposal
      </button>

      <ChatHelper context="proposal-wizard" content={{ title, purpose, outcome }} />
    </div>
  );
}
