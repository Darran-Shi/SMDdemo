function count() {
  const date = new Date('2017-07-10 00:00:00');
  var current = Date();
  var seconds = (Date.parse(current) - Date.parse(date)) / 1000;
  var days = Math.floor(seconds / (3600 * 24));
//   seconds = seconds % (3600 * 24);
//   var hours = Math.floor(seconds / 3600);
//   if (hours < 10) {
//       hours = "0" + hours;
//   }
//   seconds = seconds % 3600;
//   var minutes = Math.floor(seconds / 60);
//   if (minutes < 10) {
//       minutes = "0" + minutes;
//   }
//   seconds = seconds % 60;
//   if (seconds < 10) {
//       seconds = "0" + seconds;
//   }
//   console.log(days, hours, minutes, seconds)
  var numAnim = new CountUp("count", 0, days, 0, 7);
  numAnim.start()
}
