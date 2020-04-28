var playlist = new Object({ artist: "song" })

function updatePlaylist(object, artistName, songTitle) {
  return Object.assign(playlist, { [artistName]: songTitle })
}

function removeFromPlaylist(playlist, artistName) {
  delete object["artistName"];
  console.log(object);
}
