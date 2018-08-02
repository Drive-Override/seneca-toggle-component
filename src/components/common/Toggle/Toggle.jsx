import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { observable } from 'mobx'
import { observer } from 'mobx-react'
import cx from 'classnames'
import styles from './Toggle.scss'

@observer
export default class Toggle extends Component {
  @observable toggleActive = true;
  static propTypes = {
    answers: PropTypes.array.isRequired,
    active: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    store: PropTypes.any
  }
  initialState = {
    active: this.props.active
  }
  toggle = () => {
    this.toggleActive = !this.toggleActive;

    this.props.store.setActive(2, 2);
  }
  componentDidMount() {
    // Set Initial State
    this.initialState.active == 2 && this.toggle();
  }
  render() {
    const { answers } = this.props

    return (
      <div className={styles.container}>
        <button className={cx(styles.toggle, { [styles.active]: true })}>
          <div
            className={cx(styles['answer-text'], {
              [styles['text-inactive']]: this.toggleActive
            })}
            onClick={this.toggle}
          >
            <p>{answers[0]}</p>
          </div>
          <div
            className={cx(styles['answer-text'], {
              [styles['text-inactive']]: !this.toggleActive
            })}
            onClick={this.toggle}
          >
            <p>{answers[1]}</p>
          </div>
          <div
            className={cx(styles.slider, { [styles.right]: this.toggleActive })}
          />
        </button>
      </div>
    )
  }
}
