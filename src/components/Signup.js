import React,{useState} from 'react'
import{
    Link,
    useNavigate
} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Signup(props) {
    const navigate = useNavigate();
    const [user,setUser] = useState({
        name:"",email:"",password:""
    });
    
    let name,value;
    const handleInputs = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;

        setUser({...user,[name]:value});
    }

    const PostData = async (e) => {
        e.preventDefault();

        const {name,email,password} = user;
        
        const res = await fetch("http://localhost:5000/api/auth/createUser",{
            method:"POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                name,email,password
            })
        });

        const data=await res.json();
        
        if(res.status === 400 || !data){
            console.log("Invalid Registration");
            toast("Invalid Email! Try again");
        } else{
            console.log("Valid Registration");
            toast("Registration Successful! Redirecting to the log in page");
            setTimeout(() => {
                navigate("/login");
            }, 3000);
        }
    }

  return (
    <div>
      <section className="vh-100" style={{marginTop: '5rem'}}>
        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
            <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                        <div className="card" style={{borderRadius: '15px'}}>
                            <div className="card-body p-5">
                                <h2 className="text-uppercase text-center mb-5">Create an account</h2>

                                <form method="post">

                                    <div className="form-outline mb-4">
                                        <input type="text" id="form3Example1cg" className="form-control form-control-lg"
                                            name="name" value={user.name} onChange={handleInputs}/>
                                        <label className="form-label" for="form3Example1cg">Your Name</label>
                                    </div>

                                    <div className="form-outline mb-4">
                                        <input type="email" id="form3Example3cg" className="form-control form-control-lg"
                                            name="email" value={user.email} onChange={handleInputs}/>
                                        <label className="form-label" for="form3Example3cg">Your Email</label>
                                    </div>

                                    <div className="form-outline mb-4">
                                        <input type="password" id="form3Example4cg" className="form-control form-control-lg"
                                            name="password" value={user.password} onChange={handleInputs}/>
                                        <label className="form-label" for="form3Example4cg">Password</label>
                                    </div>


                                    <div className="d-flex justify-content-center">
                                        <button type="submit" className="btn btn-primary mb-3" onClick={PostData}>Register</button>
                                        <ToastContainer autoClose={2000} pauseOnFocusLoss={false}/>
                                    </div>

                                    <p className="text-center text-muted mt-5 mb-0">Already have an account? <Link to="/login"
                                            className="fw-bold text-body"><u>Login here</u></Link></p>

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
