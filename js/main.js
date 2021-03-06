let isPlaying = false;
let futureBeatTime = 0;
let currentBeat = 0;
let patternLength = 32;
let tempo = 135.0;
let noteDuration = 3;
let timerId = 0;
let currentPola = "";

let masterGain = audioContext.createGain();
masterGain.gain.value = 0.81;
masterGain.connect(audioContext.destination);

const startStopButton = document.getElementById("startStopButton");
const tempoSlider = document.getElementById("tempoSlider");
const volumeSlider = document.getElementById("volumeSlider");

startStopButton.addEventListener("click", function () {
  startLooper();
});
tempoSlider.addEventListener("change", function () {
  tempo = parseInt(document.getElementById("tempoSlider").value);
});
volumeSlider.addEventListener("change", function () {
  masterGain.gain.value = parseInt(document.getElementById("volumeSlider").value)/100;
});

function playSample(triggerTime, playDur, smplIdx, amplitude) {
  const sample = audioContext.createBufferSource();
  sample.buffer = audioBuffers[smplIdx];
  const gainNode = audioContext.createGain();
  const atkTime = 0.01;
  const relTime = 0.1;
  const susTime = playDur - atkTime - relTime;
  gainNode.value = 0.0;

  sample.connect(gainNode);
  gainNode.connect(masterGain);

  sample.start(triggerTime);
  gainNode.gain.linearRampToValueAtTime(amplitude, triggerTime + atkTime);
  gainNode.gain.linearRampToValueAtTime(amplitude, triggerTime + atkTime + susTime);
  gainNode.gain.linearRampToValueAtTime(0.0, triggerTime + playDur);
  sample.stop(triggerTime + playDur);
}

function looper() {
  while (futureBeatTime < audioContext.currentTime + 0.10) {
    currentPola = document.querySelector("#polaSelect").value;
    patternLength = polaDefinitions[currentPola].length;
    futureBeatTime += 0.25 * 60 / tempo;

    for (let instrument in polaDefinitions[currentPola].percussionInstruments) {
      if (
        polaDefinitions[currentPola].percussionInstruments[instrument].onsets.includes(currentBeat) && 
        document.querySelector(polaDefinitions[currentPola].percussionInstruments[instrument].togId).checked
      ) {
        const durationIndex = polaDefinitions[currentPola].percussionInstruments[instrument].onsets.indexOf(currentBeat);
        const noteDuration = polaDefinitions[currentPola].percussionInstruments[instrument].durations[durationIndex] * 60 / tempo;
        const smplIdx = polaDefinitions[currentPola].percussionInstruments[instrument].sampleIndex;
        let amplitude = polaDefinitions[currentPola].percussionInstruments[instrument].amplitude;
        if(instrument==="kecekRight" && document.querySelector("#kecekLegongToggle").checked && currentBeat%4===2) {
          amplitude = 0.9
        }
        playSample(futureBeatTime, noteDuration, smplIdx, amplitude);
      }
    };

    for (let instrument in polaDefinitions[currentPola].melodicInstruments) {
      if (
        polaDefinitions[currentPola].melodicInstruments[instrument].onsets.includes(currentBeat) && 
        document.querySelector(polaDefinitions[currentPola].melodicInstruments[instrument].togId).checked
      ) {
        const noteIndex = polaDefinitions[currentPola].melodicInstruments[instrument].onsets.indexOf(currentBeat);
        const noteDuration = polaDefinitions[currentPola].melodicInstruments[instrument].durations[noteIndex] * 60 / tempo;
        const note = polaDefinitions[currentPola].melodicInstruments[instrument].melody[noteIndex];
        const smplIdx = polaDefinitions[currentPola].melodicInstruments[instrument].sampleIndex + note;
        const amplitude = polaDefinitions[currentPola].melodicInstruments[instrument].amplitude;
        playSample(futureBeatTime, noteDuration, smplIdx, amplitude);
      }
    };

    currentBeat++;
    if (currentBeat === patternLength) {
      currentBeat = 0;
    }
  }
  timerId = window.setTimeout(looper, 1.0);
}

function startLooper() {
  isPlaying = !isPlaying;
  currentPola = document.querySelector("#polaSelect").value;
  if (isPlaying) {
    if (currentPola === "") {
      alert("please choose pola first");
      isPlaying = false;
    } else {
      currentBeat = 0;
      futureBeatTime = audioContext.currentTime;
      looper();
      return "stop";
    }
  } else {
    window.clearTimeout(timerId);
    return "play";
  }
}