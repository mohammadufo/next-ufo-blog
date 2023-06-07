import React, { ReactNode } from 'react'
import styles from './page.module.css'

interface Props {
  children?: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div>
      <h1 className={styles.mainTitle}>Our Works</h1>
      {children}
    </div>
  )
}

export default Layout
