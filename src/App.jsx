import React from 'react';
import ReactDOM from 'react-dom';
import { observer } from 'mobx-react';
import ToggleGroup from './components/ToggleGroup';
import Store from './store/store';
import styles from './App.scss';

const myStore = new Store();

@observer
export default class App extends React.Component {
  render() {
    return <div className={styles.container}>
      <ToggleGroup store={myStore} />
    </div>
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
