import React from "react"
import Navbar from "./components/Navbar.js"
import Card from "./components/Card.js"
import data from "./data.js"

export default function App(){

    const cards = data.map(item => {
        return <Card {...item} />
    })
    
    return (
        <div className="container">
            <Navbar />
            {cards}
        </div>
    )
}