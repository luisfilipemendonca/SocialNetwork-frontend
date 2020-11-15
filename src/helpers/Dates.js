class Dates {
  formatFullDate = (date) => {
    this.months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    const formatedDate = new Date(date);
    const hours = this.formatTime(formatedDate.getHours());
    const mins = this.formatTime(formatedDate.getMinutes());
    const month = this.months[formatedDate.getMonth()];
    const day = formatedDate.getDate();
    const year = formatedDate.getFullYear();

    return `${hours}:${mins}  |  ${month} ${day}, ${year}`;
  };

  formatTime = (time) => {
    return time > 9 ? time : `0${time}`;
  };
}

export default new Dates();
