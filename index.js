const MyDate = function (day, month, year) {
  this.day = day;
  this.month = month;
  this.year = year;

  this.getDay = function () {
    return this.day;
  };
  this.getMonth = function () {
    return this.month;
  };
  this.getYear = function () {
    return this.year;
  };

  this.setDay = function (day) {
    return (this.day = day);
  };
  this.setMonth = function (month) {
    return (this.month = month);
  };
  this.setYear = function (year) {
    return (this.year = year);
  };
};

const date = new MyDate(24, 6, 2024);
const day = date.getDay();
const month = date.getMonth();
const year = date.getYear();



console.log(day + "/" + month + "/" + year);
