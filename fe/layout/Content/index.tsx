import React, { FC } from 'react';
import styles from './index.module.scss';

const Home: FC = (props) => {
  return (
    <div className={styles.wrap}>
      {props.children}
    </div>
  )
}

export default Home
