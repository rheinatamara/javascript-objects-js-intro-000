var playlist = {
  tameImpala : 'The Less I Know The Better'
}
function updatePlaylist(playlist, artistName, songTitle){

}
function removeFromPlaylist(playlist, artistName){
  delete playlist.artistName;
  return playlist;
}
console.log(removeFromPlaylist(playlist,tameImpala));
