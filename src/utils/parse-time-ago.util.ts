function buildSOperator(difference: number) {
  return difference === 1 ? '' : 's';
}

function parseTimeAgo(milliseconds: number): string {
  let result = '';

  const difference = Date.now() - milliseconds;

  if (difference < 5 * 1000) {
    return 'just now';
  }

  if (difference < 90 * 1000) {
    return 'moments ago';
  }

  // minutes of difference
  if ((difference % 1000) * 3600 > 0) {
    const minutesDifference = Math.floor((difference / 1000 / 60) % 60);

    if (minutesDifference > 0) {
      const sOperator = buildSOperator(minutesDifference);
      result = `${minutesDifference} minute${sOperator} `;
    }
  }

  // hours of difference
  if ((difference % 1000) * 3600 * 60 > 0) {
    const hoursDifference = Math.floor((difference / 1000 / 60 / 60) % 24);

    if (hoursDifference > 0) {
      const sOperator = buildSOperator(hoursDifference);
      result = `${hoursDifference} hour${sOperator}`;
    }
  }

  // days of difference
  if ((difference % 1000) * 3600 * 60 * 24 > 0) {
    const daysDifference = Math.floor(difference / 1000 / 60 / 60 / 24);

    if (daysDifference > 0) {
      const sOperator = buildSOperator(daysDifference);
      result = `${daysDifference} day${sOperator}`;
    }
  }

  return `${result} ago`;
}

export default parseTimeAgo;
