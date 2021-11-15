export function getMostRecentResponse(responseArray) {
  return responseArray.reduce((prev, curr) => {
    if (curr.timestamp > prev.timestamp) {
      return curr;
    } else return prev;
  });
}

