"use strict"
function audioContextCheck(){
  if (typeof AudioContext!== "undefined") {
    return new AudioContext();
  }
  else if (typeof webkitAudioContext !== "undefined") {
    return new mozAudioContext();
  }
  else {
    throw new Error('AudioContext not supported');
  }
}

let audioContext = audioContextCheck();