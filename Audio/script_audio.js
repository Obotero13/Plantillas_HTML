/* El SCRIPT de la personalización del Control de Audio */
  const audio = document.getElementById('audio');
  const progress = document.getElementById('progress');
  const current = document.getElementById('current');
  const duration = document.getElementById('duration');

  function playAudio() {
    audio.play();
  }

  function pauseAudio() {
    audio.pause();
  }

  function toggleMute() {
    audio.muted = !audio.muted;
  }

  function setVolume(value) {
    audio.volume = value;
  }

  audio.addEventListener('loadedmetadata', () => {
    duration.textContent = formatTime(audio.duration);
  });

  audio.addEventListener('timeupdate', () => {
    const percent = (audio.currentTime / audio.duration) * 100;
    progress.style.width = percent + '%';
    current.textContent = formatTime(audio.currentTime);
  });

  function setProgress(event) {
    const width = event.currentTarget.clientWidth;
    const clickX = event.offsetX;
    const duration = audio.duration;
    audio.currentTime = (clickX / width) * duration;
  }

  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return minutes + ":" + (secs < 10 ? "0" + secs : secs);
  }


/* Ensayando un botón */

  function mostrarAlerta() {
    alert('¡Hiciste clic en el botón!');
  }