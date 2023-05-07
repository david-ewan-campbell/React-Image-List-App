import React from 'react';
import axios from 'axios';
import SearchInput from './SearchInput';
import ImageList from './ImageList';
import './App.css';

class App extends React.Component {

  state = { images: [] }

  onSearchSubmit = async (entry) => {

    const response = await axios.get(`https://pixabay.com/api/?key=35072712-f810da4dd90ca7208f438ef12&q=${entry}&image_type=photo&pretty=true`)

    this.setState({images:response.data.hits})
}

render() {
  return (
    <div className='ui container' style={{marginTop:'10px'}} >
      <SearchInput onSearchSubmit={this.onSearchSubmit} />
      <ImageList images={this.state.images} />
    </div>
    )
  }
}

export default App;