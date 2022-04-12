import React, { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './index.module.scss';

const Home: FC = (props) => {
  const count = useSelector((state) => state);
  const dispatch = useDispatch()
  return (
    <div className={styles.wrap} onClick={() => dispatch({type: "ADD_TODO"})}>
      {props.children}
    </div>
  )
}

export default Home
