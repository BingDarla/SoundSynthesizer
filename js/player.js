const ChordMap = {
  //Each row is one note array[C5...C2] multichoice
  //15 synth

  chordsmap: [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ],
  // chordsmap 14 * 15
  CHORDS: ['C5', 'B4', 'A4', 'G4', 'F4', 'E4', 'D4', 'C4', 'B3', 'A5', 'G3', 'F3', 'E3', 'D3', 'C2'],
  pianoPlayList: [],
  drumPLayList: [],

  //function to generate the whole gridTable
  gridTable: function() {
    for (let i = 0; i < 14; i++) {

      let name = this.CHORDS[i];
      let $row = $('<div>');
      $row.attr('class', 'row');
      $('#play-table').append($row);
      for (let j = 0; j < 15; j++) {
        $col = $('<div>');
        let id = j.toString() + ' ' + i.toString();
        // let backgroundColor = 'rgb( '+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+')'
        $col.attr('id', id).attr('class', 'tone');
        // $col.css('background-color',backgroundColor);
        $col.text(name);
        $row.append($col);
      }
    }
  },
  //generatin toneplaylist array
  toneMap: function() {
    let playList = [];
    console.log('tonemap is called');
    console.log(this.chordsmap);
    for (let i = 0; i < 14; i++) {
      let chordsA = this.chordsmap[i];
      console.log(chordsA);
      let tone = [];
      for (let j = 0; j < chordsA.length; j++) {
        if (chordsA[j] == 1) {
          tone.push(this.CHORDS[j]);
        }
      }
      console.log(`tone is ${tone}`);
      playList.push(tone);
    }
    console.log(playList);
    return playList;
  },
  //clear all the selected tones;
  gridsClear: function() {
    this.chordsmap = [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];
    $('.tone').removeClass('selected');
  },
  reset: function() {
    this.pianoPlayList = [];
    this.drumPLayList = [];
    this.gridsClear();
  }
};

const synthNode = function(note) {
  let synth = new Tone.Synth().toMaster();
  synth.triggerAttackRelease(note, '16n');
};

const drumNode = function(note) {
  console.warn( note );
  var synth = new Tone.MonoSynth({
    "detune": 10,
    "oscillator": {
      "type": "sawtooth"
    },
    "filter": {
      Q: 6,
      "type": "lowpass",
      "rolloff": -24
    },
    "envelope": {
      "attack": 0.005,
      "decay": 0.1,
      "sustain": 0.9,
      "release": 1
    },
    "filterEnvelope": {
      "attack": 0.06,
      "decay": 0.2,
      "sustain": 1,
      "release": 2,
      "baseFrequency": 200,
      "octaves": 7,
      "exponent": 2
    }
  }).toMaster();
  synth.triggerAttackRelease(note, "16n");
  console.log('drum is called');
}



function backgroundMusic() {
  var audio = document.getElementById("audio");
  audio.play();
}



const crazyMusic = function() {
  var osc = new Tone.Oscillator(300 + Math.random() * 440, "square");

  var vibrato = new Tone.LFO(6, -25, 25);
  vibrato.start();
  vibrato.connect(osc.detune);
  // a lowpass filter
  var lowpass = new Tone.Filter(600, "highpass");
  osc.connect(lowpass);
  lowpass.toMaster();

  // envelope

  //connect it to the output

  osc.toMaster().start().stop('+0.05');
  // vibrato.connect(osc.detune);

}







const poly = function(tones, chordArray) {
  let polySynth = new Tone.PolySynth(tones, Tone.Synth).toMaster();
   console.log(chordArray);
  polySynth.triggerAttackRelease(chordArray, '16n');
};

const drum = function(tones, chordArray) {
  let polySynth = new Tone.PolySynth(tones, Tone.MonoSynt).toMaster();
  polySynth.triggerAttackRelease(chordArray, '16n');
}
