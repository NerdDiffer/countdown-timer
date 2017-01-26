// time relationships
const SECONDS_IN_MINUTE = 60;
const MINUTES_IN_HOUR = 60;
const HOURS_IN_DAY = 24;
const DAYS_IN_YEAR = 365;
const MINUTES_IN_DAY = MINUTES_IN_HOUR * HOURS_IN_DAY;
const SECONDS_IN_DAY = SECONDS_IN_MINUTE * MINUTES_IN_HOUR * HOURS_IN_DAY;
const SECONDS_IN_YEAR = SECONDS_IN_DAY * DAYS_IN_YEAR;

// Helpers to convert seconds to another unit
const toSeconds = numSeconds => numSeconds % SECONDS_IN_MINUTE;

const toMinutes = numSeconds => {
  const seconds = Math.floor(numSeconds / SECONDS_IN_MINUTE);
  return seconds % SECONDS_IN_MINUTE;
};

const toHours = numSeconds => {
  if (numSeconds < SECONDS_IN_DAY) {
    const minutes = Math.floor(numSeconds / MINUTES_IN_HOUR);
    return Math.floor(minutes / SECONDS_IN_MINUTE) % SECONDS_IN_MINUTE;
  } else {
    return toHours(numSeconds - SECONDS_IN_DAY);
  }
};

const toDays = numSeconds => {
  if (numSeconds < SECONDS_IN_YEAR) {
    return Math.floor(numSeconds / SECONDS_IN_DAY) % MINUTES_IN_DAY;
  } else {
    return toDays(numSeconds - SECONDS_IN_YEAR);
  }
};

const toYears = numSeconds => {
  const days = Math.floor(numSeconds / DAYS_IN_YEAR);
  const hours = Math.floor(days / HOURS_IN_DAY);
  const minutes = Math.floor(hours / MINUTES_IN_HOUR);
  const seconds = Math.floor(minutes / SECONDS_IN_MINUTE);
  return seconds % SECONDS_IN_MINUTE;
};

module.exports = n => ({
  seconds: toSeconds(n),
  minutes: toMinutes(n),
  hours: toHours(n),
  days: toDays(n),
  years: toYears(n)
});
