import React from 'react';
import PT from 'prop-types';

class Emoji extends React.Component {
  render () {
    return (
      <p>{this.props.symbol +' '+ this.props.title}</p>
    )
  }

  static propTypes = {
    title: PT.string.isRequired,
    symbol: PT.string.isRequired,
    keywords: PT.string.isRequired
  }
}

export default Emoji;