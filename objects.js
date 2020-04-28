var playlist = new Object({ artist: "song" })

function updatePlaylist(obj, key, value) {
  return Object.assign(obj, { [key]: value })
}

function removeFromPlaylist (obj, name) {
	delete obj.name;
	console.log(obj);
}
