var playlist = new Object({ artist: "song" })

function updatePlaylist(playlist, artistName, songTitle) {
   Object.assign(playlist, { [artistName]: songTitle })
}

function removeFromPlaylist(playlist, artistName) {
  delete object["artistName"];
  console.log(object);
}
