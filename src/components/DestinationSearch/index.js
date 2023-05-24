// src/components/DestinationSearch/index.js

import {Component} from 'react'
import DestinationItem from '../DestinationItem'

import './index.css'

class DestinationSearch extends Component {
  state = {
    searchText: '',
  }

  handleSearchChange = event => {
    this.setState({searchText: event.target.value.toLowerCase()})
  }

  render() {
    const {destinationsList} = this.props
    const {searchText} = this.state

    const filteredDestinations = destinationsList.filter(destination =>
      destination.name.toLowerCase().includes(searchText),
    )

    return (
      <div className="destination-search-container">
        <h1 className="heading">Destination Search</h1>
        <div className="search-container">
          <input
            type="search"
            placeholder="Search"
            className="input-search-container"
            value={searchText}
            onChange={this.handleSearchChange}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
            className="search-icon"
          />
        </div>
        <ul className="destination-list">
          {filteredDestinations.map(destination => (
            <DestinationItem key={destination.id} destination={destination} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
