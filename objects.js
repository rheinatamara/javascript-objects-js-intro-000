var playlist = {
  tameImpala : 'The Less I Know The Better'
}
function updatePlaylist(playlist, artistName, songTitle){
  Object.assign(playlist, {artistName: songTitle});
}
console.log (updatePlaylist(playlist, 'lilyAllen', 'Smile'));
