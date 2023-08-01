import React, { useState, useEffect } from 'react'
import { useNames } from '../context/items/ItemState';
import Itemtemplate from './Itemtemplate';

export default function Notes() {
    const { items, getItems, deleteItem } = useNames();
    const [dummy, setDummy] = useState(0);
    useEffect(() => {
        getItems();
    }, [dummy]);

    const handleButtonClick = (item) => {
        deleteItem(item.itemCategory, item.itemName, item.itemPrice);
        setTimeout(() => {
            setDummy((prevDummy) => prevDummy + 1);
        }, 300);
    };
    return (
        <div className='container my-3'>
            <h2>Your Items</h2>
            <div>
                {
                    items.map((item) => {
                        return (
                            <>
                                <div class="container text-center">
                                    <div class="row" style={{border:"1px solid black",margin:"20px",padding:"10px",borderRadius:"12px"}}>
                                        <div class="col">
                                            <Itemtemplate item={item} />
                                        </div>
                                        <div class="col">
                                            <button type="btn" class="btn btn-danger" onClick={() => { handleButtonClick(item) }}>Remove from cart</button>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>

        </div>
    )
}

