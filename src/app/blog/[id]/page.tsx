import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import { notFound } from 'next/navigation'

async function getData(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts${id}`, {
    cache: 'no-store',
  })

  if (!res.ok) {
    return notFound()
  }

  return res.json()
}

const BlogPost = async ({ params }: { params: { id: string } }) => {
  const data = await getData(params.id)

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>{data.body}</p>
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
        <p className={styles.text}>
          test Turning your Idea into Reality. We bring together the teams from
          the global tech industry.Turning your Idea into Reality. We bring
          together the teams from the global tech industry.Turning your Idea
          into Reality. We bring together the teams from the global tech
          industry.Turning your Idea into Reality. We bring together the teams
          from the global tech industry.Turning your Idea into Reality. We bring
          together the teams from the global tech industry.
        </p>
      </div>
    </div>
  )
}

export default BlogPost
