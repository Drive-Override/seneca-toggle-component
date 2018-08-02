import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react'
import cx from 'classnames'
import styles from './Toggle.scss'

@observer
export default class Toggle extends Component {
  static propTypes = {
    answers: PropTypes.array.isRequired,
    active: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    store: PropTypes.any
  }
  toggle = () => {
    const flip = this.props.active === 1 ? 2 : 1;
    this.props.store.data.map((dataset) => {
      if (dataset.id === this.props.id) {
        this.props.store.setActive(this.props.id, flip);
      }
    })
    this.props.store.check();
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
            className={cx(styles.slider, { [styles.right]: this.props.active === 2 })}
          />
        </button>
      </div>
    )
  }
}
