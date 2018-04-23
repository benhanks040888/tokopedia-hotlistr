import React, { Component } from 'react';

import jsonp from 'jsonp';

import { CSSTransition } from 'react-transition-group';

import Card from './Card';
import Button from './Button';

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      totalPage: 0,
      isLoaded: false,
      item: {}
    }

    this.getRandom = this.getRandom.bind(this)
    this.getAnother = this.getAnother.bind(this)
    this.saveItem = this.saveItem.bind(this)
  }

  componentDidMount() {
    const url = 'https://ace.tokopedia.com/hoth/hotlist/v1/?page=1&perPage=1'
    jsonp(url, null, (err, data) => {
      this.setState({
        totalPage: data.total_page
      })

      this.getAnother()
    })

  }

  getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  getAnother() {
    this.setState({
      isLoaded: false
    })

    let rand = this.getRandom(1, this.state.totalPage)

    const url = `https://ace.tokopedia.com/hoth/hotlist/v1/?page=${rand}&perPage=1`

    jsonp(url, null, (err, data) => {
      const item = data.list[0]
      this.setState({
        item,
        isLoaded: true
      })
    })
  }

  saveItem(item) {
    let items = JSON.parse(localStorage.getItem('saved')) || [];

    let found = items.some(i => i.hot_product_id === item.hot_product_id);

    if (!found) {
      items.push(item);
      
      localStorage.setItem('saved', JSON.stringify(items));
    }

    this.getAnother()
  }

  render() {
    let item = this.state.item

    return (
      <div>
        <div className="card-container">
          <CSSTransition
              in={this.state.isLoaded}
              timeout={600}
              classNames="fade"
              appear={true}
            >
            {(status) => (
              <Card item={item} />
            )}
          </CSSTransition>
        </div>

        <Button type="primary" onClick={() => this.saveItem(item)}>Save</Button>
        <Button onClick={this.getAnother}>Get Another</Button>
      </div>
    );
  }
}

export default Home;