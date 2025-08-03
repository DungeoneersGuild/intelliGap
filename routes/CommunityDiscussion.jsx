import React from 'react';

export default function CommunityDiscussion({ proposals, onVote }) {
  return (
    <div className="community-discussion">
      <h2>Every voice matters.</h2>
      <p>Share your thoughts, vote with confidence, and help shape the outcome. All votes and discussions are transparent — nothing hidden, nothing lost.</p>

      {proposals.map(proposal => (
        <div key={proposal.id} className="proposal-card">
          <h3>{proposal.title}</h3>
          <p>{proposal.summary}</p>
          <button onClick={() => onVote(proposal.id, 'yes')}>Vote Yes</button>
          <button onClick={() => onVote(proposal.id, 'no')}>Vote No</button>
          <button onClick={() => onVote(proposal.id, 'abstain')}>Abstain</button>
        </div>
      ))}
    </div>
  );
}
