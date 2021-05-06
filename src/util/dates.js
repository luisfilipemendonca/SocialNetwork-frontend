export const formatedDateTime = (enteredDate) => {
  const date = enteredDate.slice(0, 10);
  const time = enteredDate.slice(11, 16);

  return `${date} ${time}`;
};
