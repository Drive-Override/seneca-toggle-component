import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { observer } from 'mobx-react'
import { observable } from 'mobx';
import cx from 'classnames';
import Toggle from './common/Toggle/Toggle'
import styles from './ToggleGroup.scss'

@observer
export default class ToggleGroup extends Component {
  @observable isIncorrect = false;
  @observable isLoading = true;

  static propTypes = {
    store: PropTypes.any
  }
  componentDidMount() {
    if (this.props.store) {
      this.isLoading = false;
      console.log(this.props.store)
    }
  }
  render() {
    const { store } = this.props;

    if (this.isLoading) {
      return <div>Loading...</div>
    }

    return (
      <div className={styles.wrapper}>
        <div className={cx(styles.container, {[styles['toggles-incorrect']]: false})}>
          <div className={styles['toggles-container']}>
            {
              store.data.map((dataset, index) => {
                return <Toggle store={store} id={dataset.id} key={index} answers={dataset.answers} correct={dataset.correct} active={dataset.active} />
              })
            }
          </div>
        </div>
      </div>
    )
  }
}
