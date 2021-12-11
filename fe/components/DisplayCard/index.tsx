import React, { FC } from 'react';
import Image from 'next/image'
import styles from './index.module.scss';

export interface PostCardProps {
  title: string;
  desc: string;
  img?: string;
}

const Card: FC<PostCardProps> = (props: PostCardProps) => {
  const { title, desc, img = '' } = props;
  return (
    <div className={styles.card}>
      <div className={styles.img}>
        {/* <Image src={img} alt="Landscape picture"/> */}
      </div>
      <div className={styles.title}>{title}</div>
      <div className={styles.desc}>{desc}</div>
    </div>
  )
}

export default Card;
