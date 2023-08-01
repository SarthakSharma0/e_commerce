import React,{useState} from 'react'
import {useNames} from '../context/items/ItemState';
import{
    Link,
    useNavigate
} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login(props) {
    const navigate = useNavigate();
    const [user,setUser] = useState({
        email:"",password:""
    });
    
    let name,value;
    const handleInputs = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;

        setUser({...user,[name]:value});
    }

    const{setNames}=useNames();
    const{setlinkUser}=useNames();
    const{setEmail}=useNames();

    const PostData = async (e) => {
        e.preventDefault();

        const {email,password} = user;
        const res = await fetch("https://e-commerce-ashen-five.vercel.app/api/auth/loginUser",{
            method:"POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                email,password
            })
        });

        const data=await res.json();
        
        if(data.success){
            console.log("Valid Login");
            setNames(data.x);
            setEmail(email);
            setlinkUser('/cart');
            toast("Login Successful! Redirecting to the store");
            setTimeout(() => {
                navigate("/shirts");
            }, 2000);
        } else{
            toast("Invalid Login Credentials! Try Again");
            console.log("Invalid Login");
        }
    }
  return (
    <div>
      <section className="vh-100" style={{marginTop: '2rem'}}>
        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
            <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                        <div className="card" style={{borderRadius: '15px'}}>
                            <div className="card-body p-5">
                                <h2 className="text-uppercase text-center mb-5">Login</h2>

                                <form action="/login" method="post">

                                    <div className="form-outline mb-4">
                                        <input type="email" id="form3Example3cg" className="form-control form-control-lg" placeholder="Enter a valid email address"
                                            name="email" value={user.name} onChange={handleInputs}/>
                                    </div>

                                    <div className="form-outline mb-4">
                                        <input type="password" id="form3Example4cg" className="form-control form-control-lg" placeholder="Enter password"
                                            name="password" value={user.name} onChange={handleInputs}/>
                                    </div>


                                    <div className="d-flex justify-content-center">
                                        <button type="submit" className="btn btn-primary mb-3" onClick={PostData}>Log in</button>
                                        <ToastContainer autoClose={1000} pauseOnFocusLoss={false}/>

                                    </div>

                                    <p className="text-center text-muted mt-5 mb-0">Don't have account? <Link to="/signup"
                                            className="fw-bold text-body"><u>Register here</u></Link></p>

                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    </div>
  )
}
