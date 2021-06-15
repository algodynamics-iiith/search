export const actionLog = [];

export const analyticsLogger = (store) => (next) => (action) => {
  const actionWithTime = {
    ...action,
    time: Date.now(),
  };
  actionLog.push(actionWithTime);
  next(action);
};
