async function resolveEscalation(escalationId, decision) {
    const escalation = await db.find('escalations', escalationId);
    if (escalation.status !== 'pending') {
      throw new Error('Resolution already submitted');
    }
    const updated = await db.updateIf(
      'escalations',
      { id: escalationId, status: 'pending' },
      { status: 'resolved', resolution: decision }
    );
    if (!updated) {
      throw new Error('Mediator conflict, please retry.');
    }
    return updated;
  }
  