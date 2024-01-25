// Function to calculate time ago
export const calculateTimeAgo = (publishedDate: string) => {
    const currentDateTime = new Date();
    const publishedDateTime = new Date(publishedDate);
  
    const timeDifference = currentDateTime.getTime() - publishedDateTime.getTime();
    const secondsAgo = Math.floor(timeDifference / 1000);
    const minutesAgo = Math.floor(secondsAgo / 60);
    const hoursAgo = Math.floor(minutesAgo / 60);
    const daysAgo = Math.floor(hoursAgo / 24);
    const monthsAgo = Math.floor(daysAgo / 30);
  
    if (monthsAgo >= 1) {
      return `${monthsAgo} ${monthsAgo === 1 ? 'month' : 'months'} ago`;
    } else if (daysAgo >= 1) {
      return `${daysAgo} ${daysAgo === 1 ? 'day' : 'days'} ago`;
    } else if (hoursAgo >= 1) {
      return `${hoursAgo} ${hoursAgo === 1 ? 'hour' : 'hours'} ago`;
    } else if (minutesAgo >= 1) {
      return `${minutesAgo} ${minutesAgo === 1 ? 'minute' : 'minutes'} ago`;
    } else {
      return `${secondsAgo} ${secondsAgo === 1 ? 'second' : 'seconds'} ago`;
    }
  };
  