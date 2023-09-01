import React from 'react'
import {Link} from 'react-router-dom'
import styles from '../components/css/Sidebar.module.css'
import dashboardIcon from '../assets/dashboard.svg'
import transactionsIcon from '../assets/transactions.svg';
import schedulesIcon from '../assets/schedules.svg';
import usersIcon from '../assets/users.svg';
import settingsIcon from '../assets/settings.svg';

function Sidebar() {
    const linkStyles={
        textDecoration: "none",
        color: "#FFFFFF"
    }
    const options = [
        {
            icon: dashboardIcon,
            title: "Dashboard",
            link: "/dashboard",
        },
        {
            icon: transactionsIcon,
            title: "Transactions",
            link: "/transactions",
        },
        {
            icon: schedulesIcon,
            title: "Schedules",
            link: "/schedules",
        },
        {
            icon: usersIcon,
            title: "Users",
            link: "/users",
        },
        {
            icon: settingsIcon,
            title: "Settings",
            link: "/settings",
        },
      
    ]
  return (
    <div className={styles.leftSide}>
        <div className={styles.container}>
        <h1 className={styles.heading}>Board.</h1>
        <div className={styles.nav}>
            {options.map((ele, index)=>{
                return(
                    <div className={styles.navElements}>
                    <img src={ele.icon} />
                    <span className={styles.navTitle}>{ele.title}</span>
                    </div>
                );
            })}
        </div>
        <div className={styles.navFooter}>
         <Link style={linkStyles} to='#help'> Help</Link>
         <Link style={linkStyles} to='#contact'> Contact Us</Link>
        </div>
        </div>
    </div>
  )
}

export default Sidebar