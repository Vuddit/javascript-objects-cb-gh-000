var playlist = new Object({ artist: "song" })

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign(playlist, { [artistName]: songTitle })
}

function removeFromPlaylist(object, artistName) {
  delete object["artistName"];
  console.log(object);
}
