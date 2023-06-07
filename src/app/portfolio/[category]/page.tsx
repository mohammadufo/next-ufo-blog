import React from 'react'
import styles from './page.module.css'
import Button from '@/components/Button/Button'
import Image from 'next/image'
import { items } from './data'
import { notFound } from 'next/navigation'

interface Item {
  id: number
  title: string
  desc: string
  image: string
}

const getData = (cat: string) => {
  // @ts-ignore
  const data = items[cat]

  if (data) {
    return data
  }

  return notFound()
}

const Category = ({ params }: { params: { category: string } }) => {
  const data = getData(params.category)
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>

      {data.map((item: Item) => (
        <div className={styles.item} key={item.id}>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
            <Button text="See More" url="#" />
          </div>
          <div className={styles.imgContainer}>
            <Image className={styles.img} fill={true} src={item.image} alt="" />
          </div>
        </div>
      ))}
    </div>
  )
}

export default Category
