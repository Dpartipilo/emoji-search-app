import React from 'react';
import PT from 'prop-types';

import './Emoji.css'

class Emoji extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isHovered: false,
    };
  }

  handleEnter() {
    this.setState({
      isHovered: true
    });
  }

  handleLeave() {
    this.setState({
      isHovered: false
    });
  }

  render() {
    return (
      <div className='parentBox'>
        <p
          onMouseEnter={this.handleEnter.bind(this)}
          onMouseLeave={this.handleLeave.bind(this)}
        >{this.props.symbol}</p>
        {this.state.isHovered ? (
          <div className="box">{this.props.title}</div>
        ) : (
            <div />
          )}
      </div>
    );
  }


  // render () {
  //   return (
  //     <p>{this.props.symbol}</p>
  //   )
  // }




  static propTypes = {
    title: PT.string.isRequired,
    symbol: PT.string.isRequired,
    keywords: PT.string.isRequired
  }
}

export default Emoji;