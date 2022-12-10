import React from 'react'
import { Link } from 'react-router-dom';
import styles from './index.module.scss'

const Tabs = () => {
  return (
    <div className={styles.tabs}>
      <Link className={styles.tab} to={'/users'}>Users</Link>
      <Link className={styles.tab} to={'/counter'}>Counter</Link>
      <Link className={styles.tab} to={'/modal'}>Modal</Link>
      <Link className={styles.tab} to={'/quiz'}>Quiz</Link>
      <Link className={styles.tab} to={'/convertor'}>Convertor</Link>
      <Link className={styles.tab} to={'/collections'}>Collections</Link>
    </div>
  )
}

export default Tabs