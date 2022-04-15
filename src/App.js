import React, { Component, Fragment } from 'react';
import ScrollEvent from './ScrollEvent';
import Sub from './Sub';
import './App.css';

class App extends Component {
  render() {
    const value = 1;
    const style = {
      backgroundColor: 'black',
      padding: '16px',
      color: 'white',
      fontSize: '12px'
    };
    return (
      <Fragment>
        <div style={style}>yarn global add serve
          {
            (function() {
              if (value === 1) return (<div className='App'>하나하나</div>);
              if (value === 2) return (<div>둘</div>);
              if (value === 3) return (<div>셋</div>);
            })()
          }
        </div>
        <Sub/>
        <ScrollEvent/>
      </Fragment>
    );
  }
}

export default App;