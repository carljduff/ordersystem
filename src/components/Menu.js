import '../css/menu.css'
import React, { useState, useEffect } from 'react'
const Menu = ({apps}) => {
    const [show, setShow] = useState()

    const pasta = ["Penne, ", "Rigatoni, ", "Ravioli "]
    // useEffect(() => {

    //     const displayApps = () => {
    //         setShow(true)
    //     }
    // })

    return (
        <>

        {show === "apps" && (
   
           <h1 className='apps'> {apps}</h1>
            
        )}

{show === "pasta" && (
   
   <h1 className='apps'> {pasta}</h1>
    
)}

        <div className="btn-wrapper">
            <button onClick={() => setShow("apps")} className="menu-btn">Appitizers</button>
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