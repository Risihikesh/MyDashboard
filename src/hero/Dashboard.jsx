import React from 'react'
import Sidebar from '../components/Sidebar'
import styles from "../hero/css/Dashboard.module.css"
import Header from '../components/Header'
import Card from '../components/Card'
import Activity from '../components/Activity'
import Products from '../components/Products'
import Schedule from '../components/Schedule'



function Dashboard() {
  return (
    <div className={styles.container} >
        <Sidebar/>
        <div  className={styles.rightSide}>
            <Header/>
            <Card/>
            <Activity/>
            <div className={styles.products}>
                <Products/>
                <Schedule/>
            </div>
        </div>

    </div>
  )
}

export default Dashboard