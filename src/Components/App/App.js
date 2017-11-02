import React, { Component } from 'react';
import './App.css';
import {SearchBar} from './src/Components/SearchBar/SearchBar.js'
import {SearchResults} from './src/Components/SearchResults/SearchResults.js'
import {Playlist} from './src/Components/Playlist/Playlist.js'

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      searchResults: [],
      playlistName: 'Playlist Name',
      playlistTracks: []
    };

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  addTrack(track){
    let tracks = this.state.playlistTracks;
    tracks.push(track);
    this.setState({playlistTracks:tracks});
  }

  removeTrack(track){
    let tracks = this.state.playlistTracks;
    tracks = tracks.filter(item => {
      return item.id !== track.id;
    })

    this.setState({playlistTracks: tracks});
  }

  updatePlaylistName(name){
    this.setState({playlistName: name});
  }

  savePlaylist(){
    const trackURIs = this.state.playlistTracks.map(track => track.uri);

  }

  search(searchTerm){

  }

  render() {
    return (
      <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
            <SearchBar
              onSearch={this.search}
            />
          <div className="App-playlist">
            <SearchResults
              searchResults={this.state.searchResults}
              onAdd={this.addTrack}
            />
            <Playlist
              playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
              onRemove={this.onRemove}
              onNameChange={this.updatePlaylistName}
              onSave={this.savePlaylist}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
