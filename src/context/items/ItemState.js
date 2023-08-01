import { useState, createContext, useContext } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const namesContext = createContext({
    names: "Log In",
    setNames: () => {},
    email: null,
    setEmail: () => {},
    linkUser: null,
    setlinkUser: () => {},
    items: null,
    setItems: () => {},
    getItems: () => {},
    addItem: () => {},
    deleteItem: () => {}

  });
  
export let useNames = () => useContext(namesContext);

export let ItemState = (props) =>{
    const [names,setNames] = useState("Log In");
    const [email,setEmail] = useState("admin@gmail.com");
    const [linkUser,setlinkUser] = useState("/login");

    const host = "http://localhost:5000";
    const itemsInitial=[]

    const [items,setItems] = useState(itemsInitial)

    const getItems = async () => {
        const response = await fetch(`${host}/api/items/fetchallitems`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email:email
            })
        });
        const json = await response.json() 
        setItems(json)
    }


    const addItem = async (itemCategory, itemName, itemPrice) => {
        const response = await fetch(`${host}/api/items/additem`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({itemCategory, itemName, itemPrice, email:email})
        });
        
        return response
    }

    const deleteItem = async (itemCategory, itemName, itemPrice) => {
        const response = await fetch(`${host}/api/items/deleteitem`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({itemCategory, itemName, itemPrice, email:email})
        });
    
    }

    return(
        <namesContext.Provider value={{names,setNames,email,setEmail,linkUser,setlinkUser,items,setItems,getItems,addItem,deleteItem}}>
            {props.children}
        </namesContext.Provider>
    )
}

export default ItemState;