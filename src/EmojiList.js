import React from 'react';
import PT from 'prop-types';

import Emoji from './Emoji'
import './EmojiList.css'


class EmojiList extends React.Component {
  render() {
    return (
      <div className='border'>
        <div className='inner-space'>
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
      </div>
    );
  }
  static propTypes = {
newEmojis: PT.array.isRequired,

  }
}

export default EmojiList;