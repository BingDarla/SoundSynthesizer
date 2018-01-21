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



const t1 = function(note) {

  let synth = new Tone.Oscillator(440, "sine").toMaster() ;
  synth.triggerAttackRelease(note, "2n");
  console.log('drum is called');
}







const poly = function(tones, chordArray) {
  let polySynth = new Tone.PolySynth(tones, Tone.Synth).toMaster();
  polySynth.triggerAttackRelease(chordArray, '16n');
};

const drum = function(tones, chordArray) {
  let polySynth = new Tone.MembraneSynth(tones, Tone.Synth).toMaster();
  polySynth.triggerAttackRelease(chordArray, '16n');
}
