import React from 'react'
import styles from "../components/css/Card.module.css"
import revenueIcon from '../assets/revenue.svg'
import transactionIcon from '../assets/totalTransactions.svg'
import likesIcon from '../assets/likes.svg'
import totalUserIcon from '../assets/totalUsers.svg'


function Card() {

    const cards = [
        {
            icon: revenueIcon,
            title: "Total Revenues",
            text: "$2,129,430",
            bgColor: "#DDEFE0"
        },
        {
            icon: transactionIcon,
            title: "Total Transactions",
            text: "1,520",
            bgColor: "#F4ECDD"
        },
        {
            icon: likesIcon,
            title: "Total Likes",
            text: "9,721",
            bgColor: "#EFDADA"
        },
        {
            icon: totalUserIcon,
            title: "Total Users",
            text: "892",
            bgColor: "#DEE0EF"
        }

    ]

    return (
        <div className={styles.container}>
            {cards.map((card, index) => {
                return (
                    <div  className={styles.cards} style={{ backgroundColor: card.bgColor, height: "100px", padding:"20px", borderRadius: "20px" }}>
                        <div style={{ display: "flex", justifyContent: "end"}}>
                            <img src={card.icon} />
                        </div>
                        <div >
                            <p style={{
                                fontFamily: 'Lato',
                                fontStyle: "normal",
                                fontWeight: 400,
                                fontSize: "14px",
                                lineHeight: "17px"
                            }}>{card.title}</p>
                            <h2 style={{
                                 fontFamily: 'Open Sans',
                                 fontStyle: "normal",
                                 fontWeight: 700,
                                 fontSize: "24px",
                                 lineHeight: "33px"
                            }}>{card.text}</h2>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Card