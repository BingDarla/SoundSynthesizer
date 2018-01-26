const Chord = {
  //variable
  CHORDS: ['C5', 'B4', 'A4', 'G4', 'F4', 'E4', 'D4', 'C4', 'B3', 'A3', 'G3', 'F3', 'E3', 'D3', 'C2'],
  pianoPlayList: [],
  drumPLayList: [],
  synthPLayList: [],
  //Each row is one note array[C5...C2] multichoice,chordsmap 14 * 15
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

  //methods
  //function to generate the whole gridTable
  gridTable: function() {
    for (let i = 0; i < 14; i++) {

      let name = this.CHORDS[i];
      let $row = $('<div>');
      $row.attr('class', 'row');
      $('#key-table').append($row);
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
    return playList;
  },
  //
  playTones: function() {

    let step = $(".tone").width();
    console.log(step);

    if (Chord.pianoPlayList != undefined) {
      Chord.pianoPlayList.forEach((tone, index) => {
        setTimeout(() => {
          Instrument.poly(tone.length, tone);
        }, 500 * index);
      });
    }

    if (Chord.drumPlayList != undefined) {
      Chord.drumPlayList.forEach((tone, index) => {
        setTimeout(() => {
          Instrument.drumNode(tone[0])
        }, 500 * index);
      });
    }

    if (Chord.synthPlayList != undefined) {
      Chord.synthPlayList.forEach((tone, index) => {
        setTimeout(() => {
          Instrument.synthNode(tone[0])
        }, 500 * index);
      });
    }
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1].forEach((tone, index) => {

      setTimeout(() => {
        let a = step*(index+1)*1.03;
        let style = {
          "margin-left": "0px"
        }
        style["margin-left"]=a+"px";
        
        $('#playroll').css( style );

      }, 500 * index);
    })


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
  //reset function, clear all the playList array
  reset: function() {
    this.pianoPlayList = [];
    this.drumPLayList = [];
    this.synthPLayList = [];
    this.gridsClear();
  }
};


//instrument
//sound creation functions
const Instrument = {
  pianoNode: function(node) {
    let synth = new Tone.Synth().toMaster();
    synth.triggerAttackRelease(node, '16n');
  },
  //second instrument
  drumNode: function(node) {
    if (!node)
      return;
    var synth = new Tone.MonoSynth().toMaster();
    synth.triggerAttackRelease(node, "16n");
  },
  //thirdinstrument
  synthNode: function(node) {
    let synth = new Tone.DuoSynth({
      voice0: {
        volume: 40,
      },
      envelope: {
        attack: 0.2,
        decay: 0,
        sustain: 1,
        release: 0.5
      }
    }).toMaster();
    synth.volume = 20;
    synth.triggerAttackRelease(node, '16n');
  },

  poly: function(tones, chordArray) {
    let polySynth = new Tone.PolySynth(tones, Tone.Synth).toMaster();
    polySynth.triggerAttackRelease(chordArray, '16n');
  }
}


//background music for the crazy demon
const BackgroundMusic = {
  musicPlay: function() {
    var audio = document.getElementById("audio");
    audio.play();
  },

  crazyMusic: function() {
    var osc = new Tone.Oscillator(300 + Math.random() * 440, "square");

    var vibrato = new Tone.LFO(6, -25, 25);
    vibrato.start();
    vibrato.connect(osc.detune);
    // a lowpass filter
    var lowpass = new Tone.Filter(600, "highpass");
    osc.connect(lowpass);
    lowpass.toMaster();
    osc.toMaster().start().stop('+0.05');
  }
}
