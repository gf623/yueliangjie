import React, { FC } from 'react';
import styles from './index.module.scss';
import Card, { PostCardProps } from '../../components/DisplayCard';

interface IProps {
  list: PostCardProps[]
}

const List: FC<IProps> = (props: IProps) => {
  const { list } = props;
  console.log('_list', list);
  return (
    <div className={styles.list}>
      {list.map((item, index) => {
        return (
          <Card {...item} key={index}/>
        )
      })}
    </div>
  )
}

export default List;
