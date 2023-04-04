import React from 'react';

class SearchInput extends React.Component {
  state = { entry: 'hey...' }

  render() {
    return (
      <div className='ui segment' >
        <form className='ui form'>
          <div className='field'>
            <div className='ui massive icon input'>
              <input 
                type="text" 
                placeholder='search...' 
                onChange={(event) => this.setState({entry:event.target.value.toUpperCase()})}
                value={this.state.entry}
              /> 
              <i className='search icon'></i>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default SearchInput;