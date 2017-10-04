import React from 'react';
// import PT from 'prop-type';

import Emoji from './Emoji'
import './EmojiList.css'


class EmojiList extends React.Component {
  render() {
    return (
      <div className='border'>

        {this.props.newEmojis.map((emoji) => {
          return (
            <div className='emojiDiv' key={emoji.title}>
              <Emoji
                title={emoji.title}
                symbol={emoji.symbol}
                keywords={emoji.keywords}
              />
            </div>
          );
        })}

      </div>
    );
  }
  // static propTypes = {

  // }
}

export default EmojiList;