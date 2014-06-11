var open = require("open");
var openTab = require('open-new-tab');
var fs = require('fs');

var options = process.argv[2];
var zippy = false;
var music = fs.readFileSync('./music.txt');
music = music.toString().split('\n');
if(options === '-zippy') {
  console.log(options);
  zippy = true;
}

music.forEach(function(song) {
  originalSong = song;
  song = song.split(' ');
  song = song.join('+');
  if(zippy) {
    song = song + '+zippy';
  }

  console.log(song);
  open("https://www.google.com/#q=" + song, function (err) {
    if (err) throw err;
    console.log('The user closed the browser' + originalSong);
  });
});
