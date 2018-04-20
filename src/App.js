import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

// import axios from 'axios'
import jsonp from 'jsonp';

import { CSSTransition } from 'react-transition-group';

import Card from './Card';
import Button from './Button';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      totalPage: 0,
      isLoaded: false,
      item: {}
    }

    this.getRandom = this.getRandom.bind(this)
    this.getAnother = this.getAnother.bind(this)
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

  render() {
    let item = this.state.item

    return (
      <div className="App">
        {/*<header className="App-header">
          <h1 className="App-title">Tokopedia Hotlistr</h1>
        </header>*/}
        
        <div className="container">
          <div className="page-heading">
            <h1 className="title">Tokopedia Hot Listr</h1>
            <h2 className="subtitle">Randomize Tokopedia Hot List for Your gift Inspiration</h2>
          </div>

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

          <Button onClick={this.getAnother}>Get Another</Button>
        </div>
      </div>
    );
  }
}

export default App;
