import React from 'react'
import styles from "./styles.module.css"

function Skeleton({width, height}) {
  return (
    <div className={styles.Skeleton} style={{width, height}}></div>
  )
}

export default Skeleton