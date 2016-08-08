const app = (() => {
  'use strict';

  navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

  function getUserMedia(constraints) {
    return new Promise((resolve, reject) => {
      navigator.getUserMedia(constraints, resolve, reject);
    });
  }

  return {
    getUserMedia
  };

})();

$(document).ready(() => {
  'use strict';

  app.getUserMedia({video: true, audio: false})
    .then(mediaStream => {
      video.src = URL.createObjectURL(mediaStream);
    })
    .catch(console.log);
});
