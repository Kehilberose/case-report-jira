function myFunction(x) {
  var copyText = document.getElementById(x);
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
}

projectName = "TEST";
today = new Date();
yesterday = new Date();
today.setDate(today.getDate());
yesterday.setDate(yesterday.getDate() - 1);
todayDateFormated = new Date(today.getTime() - (today.getTimezoneOffset() * 60000)).toISOString().substring(0, 10);
yesterdayDateFormated = new Date(yesterday.getTime() - (yesterday.getTimezoneOffset() * 60000)).toISOString().substring(0, 10);
document.getElementById('currentDate').innerText = yesterdayDateFormated;

let dayCounter = 0;

function dayPlus() {
  dayCounter++;
  today = new Date();
  yesterday = new Date();
  today.setDate(today.getDate() + dayCounter);
  yesterday.setDate(yesterday.getDate() - 1 + dayCounter);
  todayDateFormated = new Date(today.getTime() - (today.getTimezoneOffset() * 60000)).toISOString().substring(0, 10);
  yesterdayDateFormated = new Date(yesterday.getTime() - (yesterday.getTimezoneOffset() * 60000)).toISOString().substring(0, 10);
  document.getElementById('currentDate').innerText = yesterdayDateFormated;
}

function dayMinus() {
  dayCounter--;
  today = new Date();
  yesterday = new Date();
  today.setDate(today.getDate() + dayCounter);
  yesterday.setDate(yesterday.getDate() - 1 + dayCounter);
  todayDateFormated = new Date(today.getTime() - (today.getTimezoneOffset() * 60000)).toISOString().substring(0, 10);
  yesterdayDateFormated = new Date(yesterday.getTime() - (yesterday.getTimezoneOffset() * 60000)).toISOString().substring(0, 10);
  document.getElementById('currentDate').innerText = yesterdayDateFormated;
}

function generateTodayDate() {
  today = new Date();
  today.setDate(today.getDate() + dayCounter);
  todayDateFormated = new Date(today.getTime() - (today.getTimezoneOffset() * 60000)).toISOString().substring(0, 10);
  return todayDateFormated;
}

function generateYesterdayDate() {
  yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1 + dayCounter);
  yesterdayDateFormated = new Date(yesterday.getTime() - (yesterday.getTimezoneOffset() * 60000)).toISOString().substring(0, 10);
  return yesterdayDateFormated;
}

function generateDate() {
  document.getElementById('filterRecieved').value = `project = ${projectName} AND created >= ` +
    yesterdayDateFormated +
    " AND created <= " +
    todayDateFormated +
    " ORDER BY created DESC";
  document.getElementById('filterProcessed').value = `project = ${projectName} AND updated >= ` +
    yesterdayDateFormated +
    " AND updated <= " +
    todayDateFormated +
    " ORDER BY updated DESC";
  document.getElementById('filter2ltp').value = `project = ${projectName} AND status was not OnTrack AND created >= ` +
    yesterdayDateFormated + " AND created <= " +
    todayDateFormated +
    " and status = done ORDER BY created ASC";
  document.getElementById('filter3ltp').value = `project = ${projectName} AND status was OnTrack AND created >= ` +
    yesterdayDateFormated +
    " AND created <= " +
    todayDateFormated +
    " and status = done ORDER BY created ASC";
}
