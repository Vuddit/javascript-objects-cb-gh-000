var playlist = new Object({ artist: "song" })

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign(playlist, { [artistName]: songTitle })
}

function removeFromPlaylist(playlist, songwriter) {
  delete playlist["songwriter"];
  console.log(playlist)
}
