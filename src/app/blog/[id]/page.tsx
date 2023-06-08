import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'

const BlogPost = async () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>test title</h1>
          <p className={styles.desc}>test desc</p>
          <div className={styles.author}>
            <Image
              src="/military2.jpg"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>user name</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/air2.jpg" alt="" fill={true} className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>test content</p>
      </div>
    </div>
  )
}

export default BlogPost
