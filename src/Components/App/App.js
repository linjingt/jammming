import React, { Component } from 'react';
import './App.css';
import {SearchBar} from './src/Components/SearchBar/SearchBar.js'
import {SearchResults} from './src/Components/SearchResults/SearchResults.js'
import {Playlist} from './src/Components/Playlist/Playlist.js'

class App extends Component {
  constructor(props){
    super(props);

    this.state.searchResults = {
      name:'',
      artist:'',
      album:''
    };

    this.addTrack = this.addTrack.bind(this);

  }

  addTrack(track){
    let tracks = this.state.playlistTracks;
    tracks.push(track);
    this.setState({playlistTracks:tracks});
  }

  render() {
    return (
      <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <!-- Add a SearchBar component -->
          <div className="App-playlist">
            <SearchResults
              searchResults={this.state.searchResults}
              onAdd={this.addTrack}
            />
            <Playlist
              playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
