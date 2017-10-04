import React from 'react';
import PT from 'prop-types';

import './EmojiForm.css'
class EmojiForm extends React.Component {

  render() {
    return (
      <div>
        <form>
          <input  placeholder='What are you looking for...' className='inner-wrap' onChange={this.props.handleChange} value={this.props.filter} />

        </form>
      </div>
    );
  }

  static propTypes = {
    filter: PT.string.isRequired,
    handleChange: PT.func.isRequired
  }
}



export default EmojiForm;