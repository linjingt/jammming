import React from 'react';
import './SearchBar.css';

export class SearchBar extends React.Component{
  constructor(props){
    super(props);

    this.search = this.search.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
  }

  search(){
    this.props.onSearch(this.state.searchTerm);
  }

  handleTermChange(event){
    this.setState(
      {searchTerm: event.target.value}
    )}
  }

  render(){
    return (
      <div class="SearchBar">
        <input onChange={this.handleTermChange} placeholder="Enter A Song, Album, or Artist" />
        <a>SEARCH</a>
      </div>
    )
  }
}
