export default function logError(message, error) {
  const fullMessage = `${message}${error.message ? `: ${error.message}` : ""}`;
  BTTLog(fullMessage);
  returnToBTT(fullMessage);
}
