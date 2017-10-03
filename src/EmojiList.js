import React from 'react';
// import PT from 'prop-type';

import Emoji from './Emoji'



class EmojiList extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.newEmojis.map((emoji) => {
            return (
              <li key={emoji.title}>
                <Emoji
                  title={emoji.title}
                  symbol={emoji.symbol}
                  keywords={emoji.keywords}
                />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
  // static propTypes = {

  // }
}

export default EmojiList;