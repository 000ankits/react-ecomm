import React, {useState} from 'react'
import './productCards.css'

function ProductCards() {
    const [qty, setQty] = useState(()=>{
        return 0
    })
    
    function incrementQty(){
        setQty(prevQty => prevQty + 1)
    }
    function decrementQty(){
        setQty(prevQty => prevQty - 1)
    }

    return (
        <div className="ProductCard">
            <img src="https://images-na.ssl-images-amazon.com/images/I/81pezrPSgOL._SL1500_.jpg" alt="Laptop"/>
            <hr/>
            <span>
                <p className="productName">Laptop</p>
                <p className="productQty">
                    <button onClick={decrementQty}>-</button> {qty} <button onClick={incrementQty}>+</button>
                </p>
            </span>
        </div>
    )
}

export default ProductCards
