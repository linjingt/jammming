import React from 'react';
import './Track.css';


export class Track extends React.Component{
  render(){
    renderAction(){
      if (isRemoval){
          return <a
          className="Track-action"
          onClick={this.removeTrack}>-</a>;
      }else{
        return <a
        className="Track-action"
        onClick ={this.addTrack}>+</a>;
      }
    };

    return(
      <div className="Track">
        <div className="Track-information">
          <h3><!-- track name will go here --></h3>
          <p><!-- track artist will go here--> | <!-- track album will go here --></p>
        </div>
      <a className="Track-action"><!-- + or - will go here --></a>
      </div>
    );
  }
}
