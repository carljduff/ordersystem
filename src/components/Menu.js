import '../css/menu.css'
import React, { useState, useEffect } from 'react'
import Appetizer from './Appetizer'

const Menu = () => {
    const [show, setShow] = useState("")
    const [toggle, setToggle] = useState(false)
 

    const pasta = ["Penne, ", "Rigatoni, ", "Ravioli "]

    
    const showHandler = (set) => {
            setShow(set)
            setToggle(!toggle)
    }


    return (
        <>
        
        {toggle === true && show === "apps" && (
           <Appetizer/>
        )}

{show === "pasta" && (
   
   <h1 className='apps'> {pasta}</h1>
    
)}

        <div className="btn-wrapper">
            <button onClick={() => showHandler("apps")} className="menu-btn">Appetizers</button>
            <button onClick={() => setShow("pasta")}className="menu-btn">Pasta</button>
            <button className="menu-btn">Burgers</button>
            <button className="menu-btn">Chicken</button>
            <button className="menu-btn">Steak</button>
            <button className="menu-btn">Seafood</button>
        </div>
        </>
    )
}

export default Menu;