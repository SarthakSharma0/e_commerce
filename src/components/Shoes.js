import React from 'react'
import{
    Link
} from 'react-router-dom'
import Itemtemplate from './Itemtemplate';
import {useNames} from '../context/items/ItemState';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Shoes() {
  const{addItem}=useNames();

  const handleButtonClick = (itemCategory,itemName,itemPrice) => {
    let res= addItem(itemCategory,itemName,itemPrice)
    res.then((value)=>{
        if(value.status===200){
            toast("Added to cart!");
        }
        else if(value.status===474){
            toast("Please Log In first!");
        }
        else if(value.status===475){
            toast("This item is already in your cart!");
        }
        else{
            toast("Internal Server error");
        }
    })
    
  };
  return (
    <div>
      <div className="container d-flex align-items-center justify-content-center" style={{marginTop: '5rem', marginBottom: '5rem'}}>
        <h1>Welcome to the Store</h1>
    </div>

    <div className="container d-flex align-items-center justify-content-center" style={{marginTop: '5rem', marginBottom: '5rem'}}>
        <Link to="/shirts" className="btn btn-primary mx-4" aria-current="page">Shirts</Link>
        <Link to="/shoes" className="btn btn-primary active mx-4">Shoes</Link>
        <Link to="/sunglasses" className="btn btn-primary mx-4">Sunglasses</Link>
    </div>

    <div className="row row-cols-2 row-cols-md-4 g-4 text-center" style={{padding: '3vh'}}>
        <div className="col">
            <div className="card">
                <img src={require('../assets/img/shoes/air.png')} className="card-img-top" alt="..."/>
                <img src={require('../assets/img/banner/5-star.png')} className="card-img-top" alt="..."/>

                <Itemtemplate item={{"itemCategory":"Shoes","itemName":"Air Black","itemPrice":"₹1899.00"}}/>
                <button type="submit" class="btn btn-primary" style={{margin:'10px'}} onClick={()=>handleButtonClick("Shoes","Air Black","₹1899.00")}>Add to cart</button>
                <ToastContainer autoClose={2000} pauseOnFocusLoss={false}/>
            </div>
        </div>
        <div className="col">
            <div className="card">
                <img src={require('../assets/img/shoes/air2.png')} className="card-img-top" alt="..."/>
                <img src={require('../assets/img/banner/5-star.png')} className="card-img-top" alt="..."/>

                <Itemtemplate item={{"itemCategory":"Shoes","itemName":"Air Blue","itemPrice":"₹1899.00"}}/>
                <button type="submit" class="btn btn-primary" style={{margin:'10px'}} onClick={()=>handleButtonClick("Shoes","Air Blue","₹1899.00")}>Add to cart</button>

            </div>
        </div>
        <div className="col">
            <div className="card">
                <img src={require('../assets/img/shoes/crater.png')} className="card-img-top" alt="..."/>
                <img src={require('../assets/img/banner/5-star.png')} className="card-img-top" alt="..."/>

                <Itemtemplate item={{"itemCategory":"Shoes","itemName":"Crater Bold","itemPrice":"₹1649.00"}}/>
                <button type="submit" class="btn btn-primary" style={{margin:'10px'}} onClick={()=>handleButtonClick("Shoes","Crater Bold","₹1649.00")}>Add to cart</button>

            </div>
        </div>
        <div className="col">
            <div className="card">
                <img src={require('../assets/img/shoes/crater2.png')} className="card-img-top" alt="..."/>
                <img src={require('../assets/img/banner/5-star.png')} className="card-img-top" alt="..."/>

                <Itemtemplate item={{"itemCategory":"Shoes","itemName":"Crater Light","itemPrice":"₹1599.00"}}/>
                <button type="submit" class="btn btn-primary" style={{margin:'10px'}} onClick={()=>handleButtonClick("Shoes","Crater Light","₹1599.00")}>Add to cart</button>

            </div>
        </div>
        <div className="col">
            <div className="card">
                <img src={require('../assets/img/shoes/hippie.png')} className="card-img-top" alt="..."/>
                <img src={require('../assets/img/banner/5-star.png')} className="card-img-top" alt="..."/>

                <Itemtemplate item={{"itemCategory":"Shoes","itemName":"Hippie Fly","itemPrice":"₹1399.00"}}/>
                <button type="submit" class="btn btn-primary" style={{margin:'10px'}} onClick={()=>handleButtonClick("Shoes","Hippie Fly","₹1399.00")}>Add to cart</button>

            </div>
        </div>
        <div className="col">
            <div className="card">
                <img src={require('../assets/img/shoes/hippie2.png')} className="card-img-top" alt="..."/>
                <img src={require('../assets/img/banner/4-star.png')} className="card-img-top" alt="..."/>

                <Itemtemplate item={{"itemCategory":"Shoes","itemName":"Hippie X","itemPrice":"₹1899.00"}}/>
                <button type="submit" class="btn btn-primary" style={{margin:'10px'}} onClick={()=>handleButtonClick("Shoes","Hippie X","₹1899.00")}>Add to cart</button>

            </div>
        </div>
        <div className="col">
            <div className="card">
                <img src={require('../assets/img/shoes/jordan.png')} className="card-img-top" alt="..."/>
                <img src={require('../assets/img/banner/4-star.png')} className="card-img-top" alt="..."/>

                <Itemtemplate item={{"itemCategory":"Shoes","itemName":"Jordan Neo","itemPrice":"₹1999.00"}}/>
                <button type="submit" class="btn btn-primary" style={{margin:'10px'}} onClick={()=>handleButtonClick("Shoes","Jordan Neo","₹1999.00")}>Add to cart</button>

            </div>
        </div>
        <div className="col">
            <div className="card">
                <img src={require('../assets/img/shoes/jordan2.png')} className="card-img-top" alt="..."/>
                <img src={require('../assets/img/banner/4-star.png')} className="card-img-top" alt="..."/>

                <Itemtemplate item={{"itemCategory":"Shoes","itemName":"Jordan","itemPrice":"₹1899.00"}}/>
                <button type="submit" class="btn btn-primary" style={{margin:'10px'}} onClick={()=>handleButtonClick("Shoes","Jordan","₹1899.00")}>Add to cart</button>

            </div>
        </div>
    </div>

    <div className="container container d-flex align-items-center justify-content-center" style={{marginTop: '5rem', marginBottom: '5rem'}}>
        <div className="btn-group" role="group" aria-label="Basic outlined example">
            <button type="button" className="btn btn-outline-primary active">1</button>
            <button type="button" className="btn btn-outline-primary">2</button>
            <button type="button" className="btn btn-outline-primary">3</button>
            <button type="button" className="btn btn-outline-primary">→</button>
        </div>
    </div>

    </div>
  )
}
