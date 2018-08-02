import React from 'react';
import ReactDOM from 'react-dom';
import ToggleGroup from './components/ToggleGroup';
import Store from './store/store';

const myStore = new Store();

export default class App extends React.Component {
  render() {
    return <div>
      <ToggleGroup store={myStore} />
    </div>
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
