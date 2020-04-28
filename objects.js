var playlist = new Object({ artist: "song" })

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign(playlist, { [artistName]: songTitle })
}

function removeFromPlaylist(obj, key) {
  delete obj["key"];
  console.log(obj)
}
