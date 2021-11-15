const sampleFilePaths = [
  "samples/00_gong wadon.wav",
  "samples/01_gong lanang.wav",
  "samples/02_klentong.wav",
  "samples/03_kempur.wav",
  "samples/04_klenang.wav",
  "samples/05_kempli.wav",
  "samples/06_gentorag.wav",
  "samples/07_kecek right.wav",
  "samples/08_kecek left.wav",
  "samples/09_jegogan 01.wav",
  "samples/10_jegogan 02.wav",
  "samples/11_jegogan 03.wav",
  "samples/12_jegogan 04.wav",
  "samples/13_jegogan 05.wav",
  "samples/14_jegogan 06.wav",
  "samples/15_jegogan 07.wav",
  "samples/16_jublag 01.wav",
  "samples/17_jublag 02.wav",
  "samples/18_jublag 03.wav",
  "samples/19_jublag 04.wav",
  "samples/20_jublag 05.wav",
  "samples/21_jublag 06.wav",
  "samples/22_jublag 07.wav"
];

let audioBuffers = [];
let filePathIndex = 0;

function loadSamples() {
  setTimeout(function() {
    fetch(sampleFilePaths[filePathIndex])
    .then(data => data.arrayBuffer())
    .then(arrayBuffer => audioContext.decodeAudioData(arrayBuffer))
    .then(decodedAudio => {
      audioBuffers.push(decodedAudio);
  });
  filePathIndex++
  if (filePathIndex < sampleFilePaths.length) {
    loadSamples();
  } else {
    console.log("samples loaded");
  }
}, 1100)
};
loadSamples();
