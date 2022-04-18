import React, { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import cx from 'classnames';
import styles from './index.module.scss';

const nav = [
  "React",
  "Golang",
  "English",
  "Math",
  "Life"
]
const Header: FC = () => {
  const custom = useSelector((state: Store.State) => state.tabs);
  const dispatch = useDispatch()

  const handleClick = (v: string) => {
    dispatch({ type: 'CHANGE_TAB', tab: v })
  }
  return (
    <div className={styles.wrap}>
      {nav.map((v, i) => <span onClick={() => handleClick(v)} className={cx(styles['wrap-item'], { [styles.active]: custom == v })} key={i}>{v}</span>)}
    </div>
  )
}

export default Header
