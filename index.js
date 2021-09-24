const shortTime = (timestamp) => {
   let duration = [];
 
   const hrs = Math.floor(timestamp / 3600);
   if (hrs > 0) {
      duration.push(hrs);
      timestamp = timestamp % 3600;
   }
 
   const min = Math.floor(timestamp / 60);
   if (min > 0) {
      if (min < 10 && hrs > 0) {
         duration.push("0" + min);
      } else {
         duration.push(min);
      }
   } else {
      duration.push("00");
   }

   const sec = Math.floor(timestamp % 60);
   if (sec > 0) {
      if (sec < 10) {
         duration.push("0" + sec);
      } else {
         duration.push(sec);
      }
   } else {
      duration.push("00");
   }
 
   duration = duration.join(":");

   return duration;
};

const longTime = (timestamp) => {
   let duration = [];

   const hrs = Math.floor(timestamp / 3600);
   if (hrs === 0) {
      duration.push("00");
   } else if (hrs > 0 && hrs < 10) {
      duration.push("0" + hrs);
   } else {
      duration.push(hrs);
   }
   timestamp = timestamp % 3600;

   const mins = Math.floor(timestamp / 60);
   if (mins === 0) {
      duration.push("00");
   } else if (mins > 0 && mins < 10) {
      duration.push("0" + mins);
   } else {
      duration.push(mins);
   }

   const secs = Math.floor(timestamp % 60);
   if (secs === 0) {
      duration.push("00");
   } else if (secs > 0 && secs < 10) {
      duration.push("0" + secs);
   } else {
      duration.push(secs);
   }
 
   duration = duration.join(":");
 
   return duration;
};

module.exports = {
   shortTime,
   longTime
};