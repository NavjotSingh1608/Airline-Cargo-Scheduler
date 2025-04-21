const TOTAL_TERMINALS = 5;
const terminalAssignments = {};

function assignTerminal(departureTime) {
  const timeKey = new Date(departureTime).toISOString();
  if (!terminalAssignments[timeKey]) {
    terminalAssignments[timeKey] = new Set();
  }

  for (let i = 1; i <= TOTAL_TERMINALS; i++) {
    if (!terminalAssignments[timeKey].has(i)) {
      terminalAssignments[timeKey].add(i);
      return i;
    }
  }

  return 1;
}

module.exports = {
  assignTerminal
};
