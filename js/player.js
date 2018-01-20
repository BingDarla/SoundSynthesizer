const chordMap={
  //Each coloum is one note array
  let chord:[0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  const  chords = ['C5','B4','A4','G4','F4','E4','D4','C4','B3','A5','G3','F3','E3','D3','C2'];
  const m:16,
  //function to generate the whole gridTable
  const gridTable:function(m){
    for (let i=1,i<16;i++){
      let $r = '<div></div>';
      for (let j=1; j<14;j++){
        $col = '<div></div>';
        $r.append($col);
      }
      $('#container').append($r);
    }
  }
}
