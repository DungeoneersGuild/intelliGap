import React, { useState } from 'react';

export default function OnboardingIntro({ onComplete }) {
  const [role, setRole] = useState('');

  return (
    <div className="onboarding-intro">
      <h2>Getting Started — Simple and Quick!</h2>

      <ol>
        <li>Set up your profile in under <strong>2 minutes</strong>.</li>
        <li>
          Choose your role:
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="">Select role...</option>
            <option value="member">Community Member</option>
            <option value="creator">Proposal Creator</option>
            <option value="mediator">Mediator</option>
          </select>
        </li>
        <li>You’re ready to participate — <strong>no legal degree required</strong>.</li>
      </ol>

      <button disabled={!role} onClick={() => onComplete(role)}>
        I'm Ready
      </button>
    </div>
  );
}
