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
        $col.attr('id', id).attr('class', 'tone');
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
  reset: function() {
    this.pianoPlayList = [];
    this.drumPLayList = [];
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
  }
};

const synthNode = function(note) {
  let synth = new Tone.Synth().toMaster();
  synth.triggerAttackRelease(note, '16n');
};

const drumNode = function(note) {
  let synth = new Tone.MembraneSynth().toMaster();
  synth.triggerAttackRelease(note, "8n");
  console.log('drum is called');
}



const t1 = function() {
  var osc = new Tone.Oscillator(300+Math.random()*440, "square");

  var vibrato = new Tone.LFO(6, -25, 25);
  vibrato.start();
  vibrato.connect(osc.detune);
  // a lowpass filter
  var lowpass = new Tone.Filter(600, "highpass");
  osc.connect(lowpass);
  lowpass.toMaster();

  // envelope
  var env = new Tone.Envelope(2.5, 0.1, 0.1, 0.2);
  env.connect(osc.output.gain);

  //connect it to the output
  osc.setVolume(-10);
  osc.toMaster();
  osc.toMaster().start().stop('+0.5');
  // vibrato.connect(osc.detune);

}







const poly = function(tones, chordArray) {
  let polySynth = new Tone.PolySynth(tones, Tone.Synth).toMaster();
  polySynth.triggerAttackRelease(chordArray, '16n');
};

const drum = function(tones, chordArray) {
  let polySynth = new Tone.MembraneSynth(tones, Tone.Synth).toMaster();
  polySynth.triggerAttackRelease(chordArray, '16n');
}
