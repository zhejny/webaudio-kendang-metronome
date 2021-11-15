const polaDefinitions = {
  barongOmang: {
    length: 32,
    percussionInstruments: {
      gongWadon: {
        sampleIndex: 0,
        onsets: [0],
        durations: [8],
        togId: "#gongWadonToggle"
      },
      gongLanang: {
        sampleIndex: 1,
        onsets: [16],
        durations: [8],
        togId: "#gongLanangToggle"
      },
      klentong: {
        sampleIndex: 2,
        onsets: [8, 24],
        durations: [4, 4],
        togId: "#klentongToggle"
      },
      klenang: {
        sampleIndex: 4,
        onsets: [4,12,20,28],
        durations: [1,1,1,1],
        togId: "#klenangToggle"
      },
      kempli: {
        sampleIndex: 5,
        onsets: [0,4,8,12,16,20,24,28],
        durations: [1,1,1,1,1,1,1,1],
        togId: "#kempliToggle"
      },
      gentorag: {
        sampleIndex: 6,
        onsets: [0,16],
        durations: [4,4],
        togId: "#gentoragToggle"
      },
      kecekRight: {
        sampleIndex: 7,
        onsets: [0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30],
        durations: [0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5],
        togId: "#kecekToggle"
      },
      kecekLeft: {
        sampleIndex: 8,
        onsets: [1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31],
        durations: [0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5],
        togId: "#kecekToggle"
      }
    },
    melodicInstruments: {
      jublag: {
        sampleIndex: 16,
        onsets: [0,4,8,12,16,20,24,28],
        melody: [1,2,4,2,1,2,4,2],
        durations: [1,1,1,1,1,1,1,1],
        togId: "#jublagToggle"
      },
      jegogan: {
        sampleIndex: 9,
        onsets: [0,16,24],
        melody: [1,1,4],
        durations: [4,2,2],
        togId: "#jegoganToggle"
      }
    }
  }
}