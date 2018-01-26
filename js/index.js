$(document).ready(function() {

  console.log('The document is ready');

  let synth1IsSelected = false;
  let synth2IsSelected = false;
  let synth3IsSelected = false;

  Chord.gridTable();

  $('.tone').click(function() {
    //get id information from selected keyNode, and write into chordsmap array
    let id = $(this).attr('id');
    let i = id.split(' ')[0];
    let j = id.split(' ')[1];

    //check if which tone is selected and add css class.
    if (Chord.chordsmap[i][j] == 1) {
      $(this).removeClass('selected');
      Chord.chordsmap[i][j] = 0;
    } else {
      $(this).addClass('selected');
      Chord.chordsmap[i][j] = 1;
    }

    //get value of that tone such as 'C3',"G4"
    val = $(this).text();
    tone = '"' + val + '"';


    if (synth1IsSelected) {
      Instrument.pianoNode(val);
      console.log('piano is selected');
    }
    if (synth2IsSelected) {
      Instrument.drumNode(val);
      console.log('drum is selected');
    }
    if (synth3IsSelected) {
      Instrument.synthNode(val);
      console.log('drum is selected');
    }

    console.log(Chord.chordsmap);
  });


  $('#synth1').click(function() {
    if (!synth1IsSelected) {
      $('#synth1').addClass('choose');
      synth1IsSelected = true;

    } else {
      $('#synth1').removeClass('choose');
      synth1IsSelected = false;
    }
  });
  $('#synth2').click(function() {
    if (!synth2IsSelected) {
      $('#synth2').addClass('choose');
      synth2IsSelected = true;

    } else {
      $('#synth2').removeClass('choose');
      synth2IsSelected = false;
    }
  });
  $('#synth3').click(function() {
    if (!synth3IsSelected) {
      $('#synth3').addClass('choose');
      synth3IsSelected = true;

    } else {
      $('#synth3').removeClass('choose');
      synth3IsSelected = false;
    }
  });

// save the note into  toneMap array based on selection
  $('#save').click(function() {
    if (synth1IsSelected) {
      Chord.pianoPlayList = [];
      Chord.pianoPlayList = Chord.toneMap();
      console.log(Chord.pianoPlayList);
    }
    if (synth2IsSelected) {
      Chord.drumPlayList = [];
      Chord.drumPlayList = Chord.toneMap();
      console.log(Chord.drumPlayList);
    }
    if (synth3IsSelected) {
      Chord.synthPlayList = [];
      Chord.synthPlayList = Chord.toneMap();
      console.log(Chord.synthPlayList);
    }
  });

  // transfer the tone array [0,1,...] into toneplayList array ['C4','C5']
  $('#play').click(function() {

    console.log(`piano list :${Chord.pianoPlayList}`);
    console.log(`drum list :${Chord.drumPlayList}`);
    console.log(`drum list :${Chord.synthPlayList}`);
    Chord.playTones();



  });
  //clear all the selected note
  $('#clear').click(function() {
    Chord.gridsClear();
  });
//clear all the playList array
  $('#reset').click(function() {
    Chord.reset();
  });
  //set demon
  $("#demon").click(function() {

    Chord.pianoPlayList = [["D4"],["F4"],["G4"],["F4"],["D4"],[],["E4"],["F4"],["G4"],["F4"],["E4"],[],["D4"],["F4"]];
    Chord.drumPlayList =[["G4"],[],[],[],["G4"],["A4"],[],[],[],["E4"],["F4"],["F4"],[],["F4"]];
    Chord.synthPlayList = [["D4"],["F4"],["G4"],["F4"],["D4"],[],["E4"],["F4"],["G4"],["F4"],["E4"],[],["D4"],["F4"]];
    console.log('Demon code loaded');
    setTimeout(Chord.playTones,500);
    console.log(Chord.pianoPlayList);
    console.log(Chord.drumPlayList);
    console.log(Chord.synthPlayList);
  })

  $('#crazy').click(function() {
    $('#music').remove();
    BackgroundMusic.musicPlay();
    setInterval(BackgroundMusic.musicPlay, 14000);
    init();
    animate();

  })

});
