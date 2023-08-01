import React from 'react'
import{
    Link
} from 'react-router-dom'
import Itemtemplate from './Itemtemplate';
import {useNames} from '../context/items/ItemState';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Sunglasses() {
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
      <div class="container d-flex align-items-center justify-content-center" style={{marginTop: '5rem', marginBottom: '5rem'}}>
        <h1>Welcome to the Store</h1>
    </div>

    <div class="container d-flex align-items-center justify-content-center" style={{marginTop: '5rem', marginBottom: '5rem'}}>
        <Link to="/shirts" class="btn btn-primary mx-4" aria-current="page">Shirts</Link>
        <Link to="/shoes" class="btn btn-primary mx-4">Shoes</Link>
        <Link to="/sunglasses" class="btn btn-primary active mx-4">Sunglasses</Link>
    </div>


    <div class="row row-cols-2 row-cols-md-4 g-4 text-center" style={{padding: '3vh'}}>
        <div class="col">
            <div class="card">
                <img src={require('../assets/img/sunglasses/s1.jpg')} class="card-img-top" alt="..."/>
                <img src={require('../assets/img/banner/5-star.png')} class="card-img-top" alt="..."/>

                <Itemtemplate item={{"itemCategory":"Sunglasses","itemName":"Fastrack","itemPrice":"₹799.00"}}/>
                <button type="submit" class="btn btn-primary" style={{margin:'10px'}} onClick={()=>handleButtonClick("Sunglasses","Fastrack","₹799.00")}>Add to cart</button>
                <ToastContainer autoClose={2000} pauseOnFocusLoss={false}/>

            </div>
        </div>
        <div class="col">
            <div class="card">
                <img src={require('../assets/img/sunglasses/s2.jpg')} class="card-img-top" alt="..."/>
                <img src={require('../assets/img/banner/5-star.png')} class="card-img-top" alt="..."/>

                <Itemtemplate item={{"itemCategory":"Sunglasses","itemName":"Vincent","itemPrice":"₹799.00"}}/>
                <button type="submit" class="btn btn-primary" style={{margin:'10px'}} onClick={()=>handleButtonClick("Sunglasses","Vincent","₹799.00")}>Add to cart</button>
            </div>
        </div>
        <div class="col">
            <div class="card">
                <img src={require('../assets/img/sunglasses/s3.jpg')} class="card-img-top" alt="..."/>
                <img src={require('../assets/img/banner/5-star.png')} class="card-img-top" alt="..."/>

                <Itemtemplate item={{"itemCategory":"Sunglasses","itemName":"Aricks","itemPrice":"₹899.00"}}/>
                <button type="submit" class="btn btn-primary" style={{margin:'10px'}} onClick={()=>handleButtonClick("Sunglasses","Aricks","₹899.00")}>Add to cart</button>
            </div>
        </div>
        <div class="col">
            <div class="card">
                <img src={require('../assets/img/sunglasses/s4.jpg')} class="card-img-top" alt="..."/>
                <img src={require('../assets/img/banner/5-star.png')} class="card-img-top" alt="..."/>

                <Itemtemplate item={{"itemCategory":"Sunglasses","itemName":"Gainx","itemPrice":"₹499.00"}}/>
                <button type="submit" class="btn btn-primary" style={{margin:'10px'}} onClick={()=>handleButtonClick("Sunglasses","Gainx","₹499.00")}>Add to cart</button>

            </div>
        </div>
        <div class="col">
            <div class="card">
                <img src={require('../assets/img/sunglasses/s5.jpg')} class="card-img-top" alt="..."/>
                <img src={require('../assets/img/banner/5-star.png')} class="card-img-top" alt="..."/>

                <Itemtemplate item={{"itemCategory":"Sunglasses","itemName":"Elegante","itemPrice":"₹1299.00"}}/>
                <button type="submit" class="btn btn-primary" style={{margin:'10px'}} onClick={()=>handleButtonClick("Sunglasses","Elegante","₹1299.00")}>Add to cart</button>

            </div>
        </div>
        <div class="col">
            <div class="card">
                <img src={require('../assets/img/sunglasses/s6.jpg')} class="card-img-top" alt="..."/>
                <img src={require('../assets/img/banner/4-star.png')} class="card-img-top" alt="..."/>

                <Itemtemplate item={{"itemCategory":"Sunglasses","itemName":"John Jcobs","itemPrice":"₹2299.00"}}/>
                <button type="submit" class="btn btn-primary" style={{margin:'10px'}} onClick={()=>handleButtonClick("Sunglasses","John Jcobs","₹2299.00")}>Add to cart</button>
            </div>
        </div>
        <div class="col">
            <div class="card">
                <img src={require('../assets/img/sunglasses/s7.jpg')} class="card-img-top" alt="..."/>
                <img src={require('../assets/img/banner/4-star.png')} class="card-img-top" alt="..."/>

                <Itemtemplate item={{"itemCategory":"Sunglasses","itemName":"Creek","itemPrice":"₹899.00"}}/>
                <button type="submit" class="btn btn-primary" style={{margin:'10px'}} onClick={()=>handleButtonClick("Sunglasses","Creek","₹899.00")}>Add to cart</button>

            </div>
        </div>
        <div class="col">
            <div class="card">
                <img src={require('../assets/img/sunglasses/s8.jpg')} class="card-img-top" alt="..."/>
                <img src={require('../assets/img/banner/4-star.png')} class="card-img-top" alt="..."/>

                <Itemtemplate item={{"itemCategory":"Sunglasses","itemName":"Maverix","itemPrice":"₹799.00"}}/>
                <button type="submit" class="btn btn-primary" style={{margin:'10px'}} onClick={()=>handleButtonClick("Sunglasses","Maverix","₹799.00")}>Add to cart</button>

            </div>
        </div>
    </div>

    <div class="container container d-flex align-items-center justify-content-center" style={{marginTop: '5rem', marginBottom: '5rem'}}>
        <div class="btn-group" role="group" aria-label="Basic outlined example">
            <button type="button" class="btn btn-outline-primary active">1</button>
            <button type="button" class="btn btn-outline-primary">2</button>
            <button type="button" class="btn btn-outline-primary">3</button>
            <button type="button" class="btn btn-outline-primary">→</button>
        </div>
    </div>

    </div>
  )
}
