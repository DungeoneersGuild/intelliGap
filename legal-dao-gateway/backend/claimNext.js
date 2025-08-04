async function claimNextMediatorTask(myMediatorId, ttl) {
    const task = await db.findOneAndUpdate(
      'mediations',
      { status: 'pending', lockedBy: null },
      { lockedBy: myMediatorId, lockExpires: Date.now() + ttl }
    );
    return task;
  }
  