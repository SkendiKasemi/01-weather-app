export function formatDateAndTime(dateString) {
  const options = {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  };
  const date = new Date(dateString);
  const formattedDate = date.toLocaleDateString('en-US', options);
  const formattedTime = date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
  });

  return {
    date: formattedDate,
    time: formattedTime,
  };
}
