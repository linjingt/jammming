import React from 'react';
import './Playlist.css';
import TrackList from './src/Components/TrackList/TrackList.js';

export class Playlist extends React.Component{
  constructor(){

  }

  render(){
    return(
      <div className="Playlist">
        <input
          defaultValue={'New Playlist'}

        />
        <TrackList
          tracks={this.props.playlistTracks}
        />
        <a className="Playlist-save">SAVE TO SPOTIFY</a>
      </div>
    )
  }
}
