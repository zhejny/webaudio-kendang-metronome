const polaDefinitions = {
  barongBaris: {
    length: 32,
    defaultTempo: 135,
    percussionInstruments: {
      gongWadon: {
        sampleIndex: 0,
        onsets: [0],
        durations: [8],
        togId: "#gongWadonToggle",
        amplitude: 1
      },
      gongLanang: {
        sampleIndex: 1,
        onsets: [16],
        durations: [8],
        togId: "#gongLanangToggle",
        amplitude: 1
      },
      klentong: {
        sampleIndex: 2,
        onsets: [8, 24],
        durations: [4, 4],
        togId: "#klentongToggle",
        amplitude: 1
      },
      klenang: {
        sampleIndex: 4,
        onsets: [4,12,20,28],
        durations: [1,1,1,1],
        togId: "#klenangToggle",
        amplitude: 1
      },
      kempli: {
        sampleIndex: 5,
        onsets: [0,4,8,12,16,20,24,28],
        durations: [1,1,1,1,1,1,1,1],
        togId: "#kempliToggle",
        amplitude: 1
      },
      gentorag: {
        sampleIndex: 6,
        onsets: [0,16],
        durations: [4,4],
        togId: "#gentoragToggle",
        amplitude: 0.25
      },
      kecekRight: {
        sampleIndex: 7,
        onsets: [0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30],
        durations: [0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5],
        togId: "#kecekToggle",
        amplitude: 0.3
      },
      kecekLeft: {
        sampleIndex: 8,
        onsets: [1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31],
        durations: [0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5],
        togId: "#kecekToggle",
        amplitude: 0.3
      }
    },
    melodicInstruments: {
      jublag: {
        sampleIndex: 16,
        onsets: [0,4,8,12,16,20,24,28],
        melody: [5,2,4,2,1,1,2,4],
        durations: [1,1,1,1,1,1,1,1],
        togId: "#jublagToggle",
        amplitude: 0.5
      },
      jegogan: {
        sampleIndex: 9,
        onsets: [0,16],
        melody: [5,1],
        durations: [4,4],
        togId: "#jegoganToggle",
        amplitude: 0.5
      }
    }
  },
  barongCondong: {
    length: 64,
    defaultTempo: 135,
    percussionInstruments: {
      gongWadon: {
        sampleIndex: 0,
        onsets: [0],
        durations: [16],
        togId: "#gongWadonToggle",
        amplitude: 1
      },
      gongLanang: {
        sampleIndex: 1,
        onsets: [32],
        durations: [16],
        togId: "#gongLanangToggle",
        amplitude: 1
      },
      klentong: {
        sampleIndex: 2,
        onsets: [16, 48],
        durations: [8, 8],
        togId: "#klentongToggle",
        amplitude: 1
      },
      klenang: {
        sampleIndex: 4,
        onsets: [4,12,20,28,36,44,52,60],
        durations: [1,1,1,1,1,1,1,1],
        togId: "#klenangToggle",
        amplitude: 1
      },
      kempli: {
        sampleIndex: 5,
        onsets: [0,4,8,12,16,20,24,28,32,36,40,44,48,52,56,60],
        durations: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        togId: "#kempliToggle",
        amplitude: 1
      },
      gentorag: {
        sampleIndex: 6,
        onsets: [0,32],
        durations: [8,8],
        togId: "#gentoragToggle",
        amplitude: 0.25
      },
      kecekRight: {
        sampleIndex: 7,
        onsets: [0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62],
        durations: [0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5],
        togId: "#kecekToggle",
        amplitude: 0.3
      },
      kecekLeft: {
        sampleIndex: 8,
        onsets: [1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47,49,51,53,55,57,59,61,63],
        durations: [0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5],
        togId: "#kecekToggle",
        amplitude: 0.3
      }
    },
    melodicInstruments: {
      jublag: {
        sampleIndex: 16,
        onsets: [0,4,8,12,16,20,24,28,32,36,40,44,48,52,56,60],
        melody: [5,5,0,1,2,5,4,2,1,2,1,0,5,4,2,4],
        durations: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        togId: "#jublagToggle",
        amplitude: 0.5
      },
      jegogan: {
        sampleIndex: 9,
        onsets: [0,16],
        melody: [5,2,1,5],
        durations: [4,4,4,4],
        togId: "#jegoganToggle",
        amplitude: 0.5
      }
    }
  },
  barongGoakMacok: {
    length: 32,
    defaultTempo: 135,
    percussionInstruments: {
      gongWadon: {
        sampleIndex: 0,
        onsets: [0],
        durations: [8],
        togId: "#gongWadonToggle",
        amplitude: 1
      },
      gongLanang: {
        sampleIndex: 1,
        onsets: [16],
        durations: [8],
        togId: "#gongLanangToggle",
        amplitude: 1
      },
      klentong: {
        sampleIndex: 2,
        onsets: [8, 24],
        durations: [4, 4],
        togId: "#klentongToggle",
        amplitude: 1
      },
      klenang: {
        sampleIndex: 4,
        onsets: [4,12,20,28],
        durations: [1,1,1,1],
        togId: "#klenangToggle",
        amplitude: 1
      },
      kempli: {
        sampleIndex: 5,
        onsets: [0,4,8,12,16,20,24,28],
        durations: [1,1,1,1,1,1,1,1],
        togId: "#kempliToggle",
        amplitude: 1
      },
      gentorag: {
        sampleIndex: 6,
        onsets: [0,16],
        durations: [4,4],
        togId: "#gentoragToggle",
        amplitude: 0.25
      },
      kecekRight: {
        sampleIndex: 7,
        onsets: [0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30],
        durations: [0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5],
        togId: "#kecekToggle",
        amplitude: 0.3
      },
      kecekLeft: {
        sampleIndex: 8,
        onsets: [1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31],
        durations: [0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5],
        togId: "#kecekToggle",
        amplitude: 0.3
      }
    },
    melodicInstruments: {
      jublag: {
        sampleIndex: 16,
        onsets: [0,4,8,12,16,20,24,28],
        melody: [0,5,1,5,4,5,1,5],
        durations: [1,1,1,1,1,1,1,1],
        togId: "#jublagToggle",
        amplitude: 0.5
      },
      jegogan: {
        sampleIndex: 9,
        onsets: [0,16],
        melody: [0,4],
        durations: [4,4],
        togId: "#jegoganToggle",
        amplitude: 0.5
      }
    }
  },
  barongOmang: {
    length: 32,
    defaultTempo: 135,
    percussionInstruments: {
      gongWadon: {
        sampleIndex: 0,
        onsets: [0],
        durations: [8],
        togId: "#gongWadonToggle",
        amplitude: 1
      },
      gongLanang: {
        sampleIndex: 1,
        onsets: [16],
        durations: [8],
        togId: "#gongLanangToggle",
        amplitude: 1
      },
      klentong: {
        sampleIndex: 2,
        onsets: [8, 24],
        durations: [4, 4],
        togId: "#klentongToggle",
        amplitude: 1
      },
      klenang: {
        sampleIndex: 4,
        onsets: [4,12,20,28],
        durations: [1,1,1,1],
        togId: "#klenangToggle",
        amplitude: 1
      },
      kempli: {
        sampleIndex: 5,
        onsets: [0,4,8,12,16,20,24,28],
        durations: [1,1,1,1,1,1,1,1],
        togId: "#kempliToggle",
        amplitude: 1
      },
      gentorag: {
        sampleIndex: 6,
        onsets: [0,16],
        durations: [4,4],
        togId: "#gentoragToggle",
        amplitude: 0.25
      },
      kecekRight: {
        sampleIndex: 7,
        onsets: [0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30],
        durations: [0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5],
        togId: "#kecekToggle",
        amplitude: 0.3
      },
      kecekLeft: {
        sampleIndex: 8,
        onsets: [1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31],
        durations: [0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5],
        togId: "#kecekToggle",
        amplitude: 0.3
      }
    },
    melodicInstruments: {
      jublag: {
        sampleIndex: 16,
        onsets: [0,4,8,12,16,20,24,28],
        melody: [1,2,4,2,1,2,4,2],
        durations: [1,1,1,1,1,1,1,1],
        togId: "#jublagToggle",
        amplitude: 0.5
      },
      jegogan: {
        sampleIndex: 9,
        onsets: [0,16,24],
        melody: [1,1,4],
        durations: [4,2,2],
        togId: "#jegoganToggle",
        amplitude: 0.5
      }
    }
  },
  batel: {
    length: 16,
    defaultTempo: 135,
    percussionInstruments: {
      gongWadon: {
        sampleIndex: 1,
        onsets: [0],
        durations: [2],
        togId: "#gongWadonToggle",
        amplitude: 1
      },
      gongLanang: {
        sampleIndex: 1,
        onsets: [8],
        durations: [2],
        togId: "#gongLanangToggle",
        amplitude: 1
      },
      klentong: {
        sampleIndex: 2,
        onsets: [4, 12],
        durations: [8, 8],
        togId: "#klentongToggle",
        amplitude: 1
      },
      klenang: {
        sampleIndex: 4,
        onsets: [2,6,10,14],
        durations: [0.5,0.5,0.5,0.5],
        togId: "#klenangToggle",
        amplitude: 1
      },
      kempli: {
        sampleIndex: 5,
        onsets: [0,4,8,12],
        durations: [1,1,1,1],
        togId: "#kempliToggle",
        amplitude: 1
      },
      gentorag: {
        sampleIndex: 6,
        onsets: [0,8],
        durations: [4,4],
        togId: "#gentoragToggle",
        amplitude: 0.25
      },
      kecekRight: {
        sampleIndex: 7,
        onsets: [0,2,4,6,8,10,12,14],
        durations: [0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5],
        togId: "#kecekToggle",
        amplitude: 0.3
      },
      kecekLeft: {
        sampleIndex: 8,
        onsets: [1,3,5,7,9,11,13,15],
        durations: [0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5],
        togId: "#kecekToggle",
        amplitude: 0.3
      }
    },
    melodicInstruments: {
    }
  },
  bapangJaukKeras: {
    length: 32,
    defaultTempo: 135,
    percussionInstruments: {
      gongWadon: {
        sampleIndex: 0,
        onsets: [0],
        durations: [8],
        togId: "#gongWadonToggle",
        amplitude: 1
      },
      klentong: {
        sampleIndex: 2,
        onsets: [16],
        durations: [8],
        togId: "#klentongToggle",
        amplitude: 1
      },
      klenang: {
        sampleIndex: 4,
        onsets: [4,12,20,28],
        durations: [1,1,1,1],
        togId: "#klenangToggle",
        amplitude: 1
      },
      kempli: {
        sampleIndex: 5,
        onsets: [0,4,8,12,16,20,24,28],
        durations: [1,1,1,1,1,1,1,1],
        togId: "#kempliToggle",
        amplitude: 1
      },
      gentorag: {
        sampleIndex: 6,
        onsets: [0],
        durations: [8],
        togId: "#gentoragToggle",
        amplitude: 0.25
      },
      kecekRight: {
        sampleIndex: 7,
        onsets: [0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30],
        durations: [1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3],
        togId: "#kecekToggle",
        amplitude: 0.3
      },
      kecekLeft: {
        sampleIndex: 8,
        onsets: [1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31],
        durations: [1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3],
        togId: "#kecekToggle",
        amplitude: 0.3
      }
    },
    melodicInstruments: {
      jublag: {
        sampleIndex: 16,
        onsets: [0,4,8,12,16,20,24,28],
        melody: [1,4,5,0,1,4,5,0],
        durations: [1,1,1,1,1,1,1,1],
        togId: "#jublagToggle",
        amplitude: 0.33
      },
      jegogan: {
        sampleIndex: 9,
        onsets: [0,16,24],
        melody: [1,1,5],
        durations: [4,2,2],
        togId: "#jegoganToggle",
        amplitude: 0.4
      }
    }
  },
  pengadengJaukKeras: {
    length: 128,
    defaultTempo: 117,
    percussionInstruments: {
      gongWadon: {
        sampleIndex: 0,
        onsets: [0],
        durations: [32],
        togId: "#gongWadonToggle",
        amplitude: 1
      },
      klentong: {
        sampleIndex: 2,
        onsets: [64],
        durations: [32],
        togId: "#klentongToggle",
        amplitude: 1
      },
      klenang: {
        sampleIndex: 4,
        onsets: [8,24,40,56,72,88,104,120],
        durations: [2,2,2,2,2,2,2,2],
        togId: "#klenangToggle",
        amplitude: 1
      },
      kempli: {
        sampleIndex: 5,
        onsets: [0,16,32,48,64,80,96,112],
        durations: [4,4,4,4,4,4,4,4],
        togId: "#kempliToggle",
        amplitude: 1
      },
      gentorag: {
        sampleIndex: 6,
        onsets: [0],
        durations: [32],
        togId: "#gentoragToggle",
        amplitude: 0.25
      },
      kecekRight: {
        sampleIndex: 7,
        onsets: [0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,120,122,124,126],
        durations: [1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3],
        togId: "#kecekToggle",
        amplitude: 0.3
      },
      kecekLeft: {
        sampleIndex: 8,
        onsets: [1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47,49,51,53,55,57,59,61,63,65,67,69,71,73,75,77,79,81,83,85,87,89,91,93,95,97,99,101,103,105,107,109,111,113,115,117,119,121,123,125,127],
        durations: [1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3],
        togId: "#kecekToggle",
        amplitude: 0.3
      }
    },
    melodicInstruments: {
      jublag: {
        sampleIndex: 16,
        onsets: [0,8,16,24,32,40,48,56,64,72,80,88,96,104,112,120],
        melody: [1,5,4,0,5,4,2,4,1,2,4,0,5,1,0,2],
        durations: [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
        togId: "#jublagToggle",
        amplitude: 0.5
      },
      jegogan: {
        sampleIndex: 9,
        onsets: [0,32,64,96],
        melody: [1,5,1,5],
        durations: [8,8,8,8],
        togId: "#jegoganToggle",
        amplitude: 0.5
      }
    }
  },
  bapangJaukManis: {
    length: 64,
    defaultTempo: 135,
    percussionInstruments: {
      gongWadon: {
        sampleIndex: 0,
        onsets: [0],
        durations: [16],
        togId: "#gongWadonToggle",
        amplitude: 1
      },
      klentong: {
        sampleIndex: 2,
        onsets: [32],
        durations: [16],
        togId: "#klentongToggle",
        amplitude: 1
      },
      klenang: {
        sampleIndex: 4,
        onsets: [4,12,20,28,36,44,52,60],
        durations: [1,1,1,1,1,1,1,1],
        togId: "#klenangToggle",
        amplitude: 1
      },
      kempli: {
        sampleIndex: 5,
        onsets: [0,4,8,12,16,20,24,28,32,36,40,44,48,52,56,60],
        durations: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        togId: "#kempliToggle",
        amplitude: 1
      },
      gentorag: {
        sampleIndex: 6,
        onsets: [0],
        durations: [16],
        togId: "#gentoragToggle",
        amplitude: 0.25
      },
      kecekRight: {
        sampleIndex: 7,
        onsets: [0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62],
        durations: [0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5],
        togId: "#kecekToggle",
        amplitude: 0.3
      },
      kecekLeft: {
        sampleIndex: 8,
        onsets: [1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47,49,51,53,55,57,59,61,63],
        durations: [0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5],
        togId: "#kecekToggle",
        amplitude: 0.3
      }
    },
    melodicInstruments: {
      jublag: {
        sampleIndex: 16,
        onsets: [0,4,8,12,16,20,24,28,32,36,40,44,48,52,56,60],
        melody: [4,2,5,2,4,2,5,2,0,1,2,0,1,4,5,2],
        durations: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        togId: "#jublagToggle",
        amplitude: 0.5
      },
      jegogan: {
        sampleIndex: 9,
        onsets: [0,16,32,48],
        melody: [4,4,0,1],
        durations: [4,4,4,4],
        togId: "#jegoganToggle",
        amplitude: 0.5
      }
    }
  },
  pengadengJaukManis: {
    length: 128,
    defaultTempo: 117,
    percussionInstruments: {
      gongWadon: {
        sampleIndex: 0,
        onsets: [0],
        durations: [32],
        togId: "#gongWadonToggle",
        amplitude: 1
      },
      klentong: {
        sampleIndex: 2,
        onsets: [64],
        durations: [32],
        togId: "#klentongToggle",
        amplitude: 1
      },
      klenang: {
        sampleIndex: 4,
        onsets: [8,24,40,56,72,88,104,120],
        durations: [2,2,2,2,2,2,2,2],
        togId: "#klenangToggle",
        amplitude: 1
      },
      kempli: {
        sampleIndex: 5,
        onsets: [0,16,32,48,64,80,96,112],
        durations: [4,4,4,4,4,4,4,4],
        togId: "#kempliToggle",
        amplitude: 1
      },
      gentorag: {
        sampleIndex: 6,
        onsets: [0],
        durations: [32],
        togId: "#gentoragToggle",
        amplitude: 0.25
      },
      kecekRight: {
        sampleIndex: 7,
        onsets: [0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,120,122,124,126],
        durations: [1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3],
        togId: "#kecekToggle",
        amplitude: 0.3
      },
      kecekLeft: {
        sampleIndex: 8,
        onsets: [1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47,49,51,53,55,57,59,61,63,65,67,69,71,73,75,77,79,81,83,85,87,89,91,93,95,97,99,101,103,105,107,109,111,113,115,117,119,121,123,125,127],
        durations: [1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3],
        togId: "#kecekToggle",
        amplitude: 0.3
      }
    },
    melodicInstruments: {
      jublag: {
        sampleIndex: 16,
        onsets: [0,8,16,24,32,40,48,56,64,72,80,88,96,104,112,120],
        melody: [4,2,5,2,4,2,5,2,0,1,2,0,1,4,5,2],
        durations: [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
        togId: "#jublagToggle",
        amplitude: 0.5
      },
      jegogan: {
        sampleIndex: 9,
        onsets: [0,32,64,96],
        melody: [4,4,0,1],
        durations: [8,8,8,8],
        togId: "#jegoganToggle",
        amplitude: 0.5
      }
    }
  },
  bapangBarisTunggal: {
    length: 32,
    defaultTempo: 135,
    percussionInstruments: {
      gongWadon: {
        sampleIndex: 0,
        onsets: [0],
        durations: [8],
        togId: "#gongWadonToggle",
        amplitude: 1
      },
      kempur: {
        sampleIndex: 3,
        onsets: [8,24],
        durations: [4,4],
        togId: "#kempurToggle",
        amplitude: 1
      },
      klentong: {
        sampleIndex: 2,
        onsets: [16],
        durations: [8],
        togId: "#klentongToggle",
        amplitude: 1
      },
      kempli: {
        sampleIndex: 5,
        onsets: [0,4,8,12,16,20,24,28],
        durations: [1,1,1,1,1,1,1,1],
        togId: "#kempliToggle",
        amplitude: 1
      },
      gentorag: {
        sampleIndex: 6,
        onsets: [0],
        durations: [8],
        togId: "#gentoragToggle",
        amplitude: 0.25
      },
      kecekRight: {
        sampleIndex: 7,
        onsets: [0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30],
        durations: [1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3],
        togId: "#kecekToggle",
        amplitude: 0.3
      },
      kecekLeft: {
        sampleIndex: 8,
        onsets: [1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31],
        durations: [1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3],
        togId: "#kecekToggle",
        amplitude: 0.3
      }
    },
    melodicInstruments: {
      jublag: {
        sampleIndex: 16,
        onsets: [0,4,8,12,16,20,24,28],
        melody: [2,4,5,4,2,4,0,4],
        durations: [1,1,1,1,1,1,1,1],
        togId: "#jublagToggle",
        amplitude: 0.33
      },
      jegogan: {
        sampleIndex: 9,
        onsets: [0,16,24],
        melody: [2,2,0],
        durations: [4,2,2],
        togId: "#jegoganToggle",
        amplitude: 0.4
      }
    }
  },
  pengipukKebyarDuduk: {
    length: 192,
    defaultTempo: 117,
    percussionInstruments: {
      gongWadon: {
        sampleIndex: 0,
        onsets: [0],
        durations: [48],
        togId: "#gongWadonToggle",
        amplitude: 1
      },
      klentong: {
        sampleIndex: 2,
        onsets: [128],
        durations: [48],
        togId: "#klentongToggle",
        amplitude: 1
      },
      kempur: {
        sampleIndex: 3,
        onsets: [64,160,180,188],
        durations: [16,5,2,1],
        togId: "#kempurToggle",
        amplitude: 1
      },
      kempli: {
        sampleIndex: 5,
        onsets: [0,4,8,12,16,20,24,28,32,36,40,44,48,52,56,60,64,68,72,76,80,84,88,92,96,100,104,108,112,116,120,124,128,132,136,140,144,148,152,156,160,164,168,172,176,180,184,188],
        durations: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        togId: "#kempliToggle",
        amplitude: 1
      },
      gentorag: {
        sampleIndex: 6,
        onsets: [0],
        durations: [48],
        togId: "#gentoragToggle",
        amplitude: 0.25
      },
      kecekRight: {
        sampleIndex: 7,
        onsets: [0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,120,122,124,126,128,130,132,134,136,138,140,142,144,146,148,150,152,154,156,158,160,162,164,166,168,170,172,174,176,178,180,182,184,186,188,190],
        durations: [1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3],
        togId: "#kecekToggle",
        amplitude: 0.3
      },
      kecekLeft: {
        sampleIndex: 8,
        onsets: [1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47,49,51,53,55,57,59,61,63,65,67,69,71,73,75,77,79,81,83,85,87,89,91,93,95,97,99,101,103,105,107,109,111,113,115,117,119,121,123,125,127,129,131,133,135,137,139,141,143,145,147,149,151,153,155,157,159,161,163,165,167,169,171,173,175,177,179,181,183,185,187,189,191],
        durations: [1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3],
        togId: "#kecekToggle",
        amplitude: 0.3
      }
    },
    melodicInstruments: {
      jublag: {
        sampleIndex: 16,
        onsets: [0,8,16,24,32,40,48,56,64,72,80,88,96,104,112,120,128,136,144,152,160,168,176,184],
        melody: [5,0,5,2,5,0,5,2,4,4,0,4,5,0,5,2,5,0,5,2,1,1,5,2],
        durations: [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
        togId: "#jublagToggle",
        amplitude: 0.5
      },
      jegogan: {
        sampleIndex: 9,
        onsets: [0,16,32,48,64,80,96,112,120,128,144,152,160,176,184],
        melody: [5,5,5,5,4,0,5,5,2,5,5,2,1,5,2],
        durations: [4,4,4,4,4,4,4,2,2,4,2,2,4,2,2],
        togId: "#jegoganToggle",
        amplitude: 0.5
      }
    }
  },
  pengipukTerunaJaya: {
    length: 192,
    defaultTempo: 117,
    percussionInstruments: {
      gongWadon: {
        sampleIndex: 0,
        onsets: [0],
        durations: [48],
        togId: "#gongWadonToggle",
        amplitude: 1
      },
      klentong: {
        sampleIndex: 2,
        onsets: [64,128],
        durations: [16,16],
        togId: "#klentongToggle",
        amplitude: 1
      },
      kempur: {
        sampleIndex: 3,
        onsets: [32,96,160,180,188],
        durations: [64,64,20,8,48],
        togId: "#kempurToggle",
        amplitude: 1
      },
      kempli: {
        sampleIndex: 5,
        onsets: [0,4,8,12,16,20,24,28,32,36,40,44,48,52,56,60,64,68,72,76,80,84,88,92,96,100,104,108,112,116,120,124,128,132,136,140,144,148,152,156,160,164,168,172,176,180,184,188],
        durations: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        togId: "#kempliToggle",
        amplitude: 1
      },
      gentorag: {
        sampleIndex: 6,
        onsets: [0],
        durations: [48],
        togId: "#gentoragToggle",
        amplitude: 0.25
      },
      kecekRight: {
        sampleIndex: 7,
        onsets: [0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,120,122,124,126,128,130,132,134,136,138,140,142,144,146,148,150,152,154,156,158,160,162,164,166,168,170,172,174,176,178,180,182,184,186,188,190],
        durations: [1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3],
        togId: "#kecekToggle",
        amplitude: 0.3
      },
      kecekLeft: {
        sampleIndex: 8,
        onsets: [1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47,49,51,53,55,57,59,61,63,65,67,69,71,73,75,77,79,81,83,85,87,89,91,93,95,97,99,101,103,105,107,109,111,113,115,117,119,121,123,125,127,129,131,133,135,137,139,141,143,145,147,149,151,153,155,157,159,161,163,165,167,169,171,173,175,177,179,181,183,185,187,189,191],
        durations: [1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3,1/3],
        togId: "#kecekToggle",
        amplitude: 0.3
      }
    },
    melodicInstruments: {
      jublag: {
        sampleIndex: 16,
        onsets: [0,8,16,24,32,40,48,56,64,72,80,88,96,104,112,120,128,136,144,152,160,168,176,184],
        melody: [0,1,0,4,0,1,0,4,0,1,0,2,4,5,4,1,4,5,4,1,4,1,5,1],
        durations: [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
        togId: "#jublagToggle",
        amplitude: 0.5
      },
      jegogan: {
        sampleIndex: 9,
        onsets: [0,32,64,96,128,160],
        melody: [0,0,0,4,4,4],
        durations: [8,8,8,8,8,8],
        togId: "#jegoganToggle",
        amplitude: 0.5
      }
    }
  },
  pengecetTerunaJaya: {
    length: 64,
    defaultTempo: 117,
    percussionInstruments: {
      gongWadon: {
        sampleIndex: 0,
        onsets: [0],
        durations: [64],
        togId: "#gongWadonToggle",
        amplitude: 1
      },
      klentong: {
        sampleIndex: 2,
        onsets: [32],
        durations: [64],
        togId: "#klentongToggle",
        amplitude: 1
      },
      kempur: {
        sampleIndex: 3,
        onsets: [16, 48],
        durations: [32,32],
        togId: "#kempurToggle",
        amplitude: 1
      },
      kempli: {
        sampleIndex: 5,
        onsets: [0,4,8,12,16,20,24,28,32,36,40,44,48,52,56,60,64],
        durations: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        togId: "#kempliToggle",
        amplitude: 1
      },
      gentorag: {
        sampleIndex: 6,
        onsets: [0],
        durations: [64],
        togId: "#gentoragToggle",
        amplitude: 0.25
      },
      kecekRight: {
        sampleIndex: 7,
        onsets: [0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62],
        durations: [0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5],
        togId: "#kecekToggle",
        amplitude: 0.3
      },
      kecekLeft: {
        sampleIndex: 8,
        onsets: [1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47,49,51,53,55,57,59,61,63],
        durations: [0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5],
        togId: "#kecekToggle",
        amplitude: 0.3
      }
    },
    melodicInstruments: {
      jublag: {
        sampleIndex: 16,
        onsets: [0,8,16,24,32,40,48,56],
        melody: [1,2,5,2,1,5,0,2],
        durations: [2,2,2,2,2,2,2,2],
        togId: "#jublagToggle",
        amplitude: 0.5
      },
      jegogan: {
        sampleIndex: 9,
        onsets: [0,16,32,48],
        melody: [1,5,1,0],
        durations: [4,4,4,4],
        togId: "#jegoganToggle",
        amplitude: 0.5
      }
    }
  },
  gilak8Beat: {
    length: 32,
    defaultTempo: 135,
    percussionInstruments: {
      gongWadon: {
        sampleIndex: 0,
        onsets: [0],
        durations: [8],
        togId: "#gongWadonToggle",
        amplitude: 1
      },
      gongLanang: {
        sampleIndex: 1,
        onsets: [16],
        durations: [8],
        togId: "#gongLanangToggle",
        amplitude: 1
      },
      kempur: {
        sampleIndex: 3,
        onsets: [20, 28],
        durations: [2, 1],
        togId: "#kempurToggle",
        amplitude: 1
      },
      kempli: {
        sampleIndex: 5,
        onsets: [0,4,8,12,16,20,24,28],
        durations: [1,1,1,1,1,1,1,1],
        togId: "#kempliToggle",
        amplitude: 1
      },
      gentorag: {
        sampleIndex: 6,
        onsets: [0],
        durations: [8],
        togId: "#gentoragToggle",
        amplitude: 0.25
      },
      kecekRight: {
        sampleIndex: 7,
        onsets: [0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30],
        durations: [0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5],
        togId: "#kecekToggle",
        amplitude: 0.3
      },
      kecekLeft: {
        sampleIndex: 8,
        onsets: [1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31],
        durations: [0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5],
        togId: "#kecekToggle",
        amplitude: 0.3
      }
    },
    melodicInstruments: {
    }
  },
  gilak16Beat: {
    length: 64,
    defaultTempo: 135,
    percussionInstruments: {
      gongWadon: {
        sampleIndex: 0,
        onsets: [0],
        durations: [16],
        togId: "#gongWadonToggle",
        amplitude: 1
      },
      gongLanang: {
        sampleIndex: 1,
        onsets: [32],
        durations: [16],
        togId: "#gongLanangToggle",
        amplitude: 1
      },
      kempur: {
        sampleIndex: 3,
        onsets: [40, 56],
        durations: [4, 2],
        togId: "#kempurToggle",
        amplitude: 1
      },
      kempli: {
        sampleIndex: 5,
        onsets: [0,4,8,12,16,20,24,28,32,36,40,44,48,52,56,60],
        durations: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        togId: "#kempliToggle",
        amplitude: 1
      },
      gentorag: {
        sampleIndex: 6,
        onsets: [0],
        durations: [16],
        togId: "#gentoragToggle",
        amplitude: 0.25
      },
      kecekRight: {
        sampleIndex: 7,
        onsets: [0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62],
        durations: [0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5],
        togId: "#kecekToggle",
        amplitude: 0.3
      },
      kecekLeft: {
        sampleIndex: 8,
        onsets: [1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47,49,51,53,55,57,59,61,63],
        durations: [0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5],
        togId: "#kecekToggle",
        amplitude: 0.3
      }
    },
    melodicInstruments: {
    }
  },
  gilak10Beat: {
    length: 40,
    defaultTempo: 135,
    percussionInstruments: {
      gongWadon: {
        sampleIndex: 0,
        onsets: [0],
        durations: [20],
        togId: "#gongWadonToggle",
        amplitude: 1
      },
      gongLanang: {
        sampleIndex: 1,
        onsets: [20],
        durations: [20],
        togId: "#gongLanangToggle",
        amplitude: 1
      },
      kempur: {
        sampleIndex: 3,
        onsets: [28, 36],
        durations: [2, 1],
        togId: "#kempurToggle",
        amplitude: 1
      },
      kempli: {
        sampleIndex: 5,
        onsets: [0,4,8,12,16,20,24,28,32,36],
        durations: [1,1,1,1,1,1,1,1,1,1],
        togId: "#kempliToggle",
        amplitude: 1
      },
      gentorag: {
        sampleIndex: 6,
        onsets: [0],
        durations: [40],
        togId: "#gentoragToggle",
        amplitude: 0.25
      },
      kecekRight: {
        sampleIndex: 7,
        onsets: [0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38],
        durations: [0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5],
        togId: "#kecekToggle",
        amplitude: 0.3
      },
      kecekLeft: {
        sampleIndex: 8,
        onsets: [1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39],
        durations: [0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5],
        togId: "#kecekToggle",
        amplitude: 0.3
      }
    },
    melodicInstruments: {
    }
  }
}
