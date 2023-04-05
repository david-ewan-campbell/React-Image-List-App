import React from 'react';
import axios from 'axios';
import SearchInput from './SearchInput';

class App extends React.Component {

  async onSearchSubmit(entry){

    const response = await axios.get(`https://pixabay.com/api/?key=35072712-f810da4dd90ca7208f438ef12&q=${entry}&image_type=photo&pretty=true`)
    console.log(response.data.hits)
}

render() {
  return (
    <div className='ui container' style={{marginTop:'50px'}} >
      <SearchInput onSearchSubmit={this.onSearchSubmit} />
    </div>
    )
  }
}

export default App;