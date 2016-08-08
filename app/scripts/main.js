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

  const $video = $('#video');
  const context = canvas.getContext('2d');
  const $canvas = $('#canvas');
  const ctracker = new clm.tracker();
  ctracker.init(pModel);

  $video.on('play', () => {
    $video[0].width = $canvas[0].width = $video.width();
    $video[0].height = $canvas[0].height = $video.height();

    ctracker.start($video[0]);

    drawLoop();
  });

  app.getUserMedia({video: true, audio: false})
    .then(mediaStream => {
      video.src = URL.createObjectURL(mediaStream);
      return mediaStream;
    });

  function drawLoop() {
    requestAnimationFrame(drawLoop);

    context.clearRect(0, 0, $canvas[0].width, $canvas[0].height);
    ctracker.draw(canvas);
  }
});
