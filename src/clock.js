const { Countdown } = require('timepiece');
const getDurationObj = require('./duration.js');

// TODO: allow user to pick a time + date in the future
const getDestinationTime = () => new Date(2017, 1, 6).valueOf(); // feb 6 2017
const dest = getDestinationTime();

const now = Date.now();
const c = new Countdown(Math.floor((dest - now) / 1000));

// DOM references
const DAYS = document.getElementById('days');
const HOURS = document.getElementById('hours');
const MINUTES = document.getElementById('minutes');
const SECONDS = document.getElementById('seconds');

const updateClock = c => {
  const { years, days, hours, minutes, seconds } = getDurationObj(c.remaining);

  DAYS.innerHTML = days;
  HOURS.innerHTML = hours;
  MINUTES.innerHTML = minutes;
  SECONDS.innerHTML = seconds;
};

window.updateClock = updateClock;
window.c = c;
