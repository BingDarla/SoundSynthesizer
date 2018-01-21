$(document).ready(function() {
  console.log('The document is ready');
  ChordMap.gridTable();
  let drumIsSelected = false;
  let pianoIsSelected = false;


  $('.tone').click(function() {
    let id = $(this).attr('id');
    let i = id.split(' ')[0];
    let j = id.split(' ')[1];
    //check if this tone is selected or not
    if (ChordMap.chordsmap[i][j] == 1) {
      $(this).removeClass('selected');
      ChordMap.chordsmap[i][j] = 0;
    } else {
      $(this).addClass('selected');
      ChordMap.chordsmap[i][j] = 1;
    }

    var synth = new Tone.Synth().toMaster()
    val = $(this).text();
    tone = '"' + val + '"';
    // console.log(tone);
    if (pianoIsSelected) {
      synthNode(val);
    }
    if (drumIsSelected) {
      drumNode(val);
      console.log('drum');
    }


    console.log(ChordMap.chordsmap);



  });
  $('#piano').click(function() {
    if (!pianoIsSelected) {
      $('#piano').addClass('choose');
      pianoIsSelected = true;

    } else {
      $('#piano').removeClass('choose');
      pianoIsSelected = false;
    }
  });
  $('#drum').click(function() {
    if (!drumIsSelected) {
      $('#drum').addClass('choose');
      drumIsSelected = true;

    } else {
      $('#drum').removeClass('choose');
      drumIsSelected = false;
    }
  });
  $('#save').click(function(){
      if (pianoIsSelected){
        ChordMap.pianoPlayList=[];
        ChordMap.pianoPlayList=ChordMap.toneMap();
      }
      if (drumIsSelected){
        ChordMap.drumPlayList=[];
        ChordMap.drumPlayList=ChordMap.toneMap();

      }

  });
  $('#play').click(function() {

    // console.log(ChordMap.pianoPlayList);
    ChordMap.pianoPlayList.forEach((tone, index) => {
      setTimeout(() => {

        poly(tone.length, tone);
      }, 500 * index);
    });
    ChordMap.drumPlayList.forEach((tone, index) => {
      setTimeout(() => {


      }, 500 * index);
    });
    // setTimeout(() => {
    // }, 500 * 17);
  });

  $('#clear').click(function(){
    ChordMap.reset();

  })
});
