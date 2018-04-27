import React, { Component } from 'react';

import { CSSTransition } from 'react-transition-group';

import Card from './Card';
import Button from './Button';

class Saved extends Component {
  constructor(props) {
    super(props)

    this.state = {
      savedItems: []
    }
  }

  componentDidMount() {
    let items = JSON.parse(localStorage.getItem('saved')) || []
    items = items.reverse()

    this.setState({
      savedItems: items
    })
  }

  removeSavedItem(item) {
    // filter the item id from this.state.savedItems and save to localstorage
  }

  render() {
    let items = this.state.savedItems

    return (
      <div class="saved-rows">
        {items.map(function(item) {
          return (
            <Card item={item} key={ item.hot_product_id} />
          )
        })}
      </div>
    );
  }
}

export default Saved;