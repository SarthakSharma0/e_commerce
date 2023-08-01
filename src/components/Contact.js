import React,{useState} from 'react'
import{
    Link,
    useNavigate
} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact(props) {
    const navigate = useNavigate();
    const [user,setUser] = useState({
        email:"",name:"",message:""
    });
    
    let name,value;
    const handleInputs = (e) => {
        name = e.target.name;
        value = e.target.value;

        setUser({...user,[name]:value});
    }

    const PostData = async (e) => {
        e.preventDefault();

        const {email,name,message} = user;
        
        const res = await fetch("https://e-commerce-ashen-five.vercel.app/api/contact/createContact",{
            method:"POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                email,name,message
            })
        });

        const data=await res.json();
        
        if(res.status === 400 || !data){
            window.alert("Invalid Contact");
            console.log("Invalid Contact");
        } else{
            console.log("Valid Contact");
            toast("Your feedback is taken! Redirecting to the home page");
            setTimeout(() => {
                navigate("/");
            }, 5000);
        }
    }


  return (
    
    <div>
      <div className="container d-flex flex-column align-items-center justify-content-center" style={{marginTop: '5rem', marginBottom: '5rem'}}>
        <h1>Contact Us</h1>
        
        <p> Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
        a matter of hours to help you.</p>
    </div>

    <div className="container d-flex align-items-center justify-content-center my-4">

        <form className="row g-3" action="/contactpg" method="post">
            <h2>Send us a message</h2>
            <div className="col-12">
                <input type="email" className="form-control" id="inputEmail4" name="email" value={user.email} onChange={handleInputs}/>
                <label for="inputEmail4" className="form-label">Your Email</label>
            </div>

            <div className="col-12">
                <input type="text" className="form-control" id="inputTxt" name="name" value={user.name} onChange={handleInputs}/>
                <label for="inputTxt" className="form-label">Name</label>
            </div>
            <div className="col-12">
                <input type="text" className="form-control" id="inputTxt2" name="message" value={user.message} onChange={handleInputs}/>
                <label for="inputTxt2" className="form-label">Message</label>
            </div>

            <div className="col-12">
                <button type="submit" className="btn btn-primary mb-3" onClick={PostData}>Submit</button>
                <ToastContainer autoClose={4000} pauseOnFocusLoss={false}/>
            </div>
        </form>

        <div className="container text-center">
            <h2>Contact Us</h2>
            <div className="container my-5">
                <ul style={{listStyleType: 'none'}}>
                    <li style={{margin: '0.5rem'}}>xyz,New Delhi, India </li>
                    <li style={{margin: '0.5rem'}}>+91 95480785XX</li>
                    <li style={{margin: '0.5rem'}}>FashionRebels@gamil.com</li>
                </ul>

            </div>
        </div>
    </div>

    </div>
  )
}
