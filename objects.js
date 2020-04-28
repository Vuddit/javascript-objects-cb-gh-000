var playlist = new Object({ artist: "song" })

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign(playlist, { [artistName]: songTitle })
}

function removeFromPlaylist(playlist, artist) {
  delete playlist["artist"];
  console.log(playlist)
}
