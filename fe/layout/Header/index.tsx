import React, { FC } from 'react';
import styles from './index.module.scss';
const nav = [
  "前端",
  "GO",
  "数学"
]
const Home: FC = () => {
  return (
    <div className={styles.wrap}>
      {nav.map((v, i) => <span className={styles['wrap-item']} key={i}>{v}</span>)}
    </div>
  )
}

export default Home
