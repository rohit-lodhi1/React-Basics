import { useContext, useState } from "react";
import styles from "./SignUp.module.scss";
import { AppContext } from "../../store/AppContext";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/FirebaseConfig";


export const SignUp = () => {

    const context = useContext(AppContext);
    const { loading, setLoading } = context;
    const navigate = useNavigate();

    const [userSignUp, setUserSignUp] = useState({
        username: "",
        password: "",
        role: "user",
        email: ""
    });

    const registerUser = async () => {
        console.log("hello");
        if (userSignUp.username == "" || userSignUp.email == "" || userSignUp.password == "") {
            toast.error("All fields are required", {
                position: "top-center"
            });
        }

        setLoading(true);

        //  creating user
        try {
            const user = await createUserWithEmailAndPassword(auth, userSignUp.email, userSignUp.password);
        } catch (error) {
            console.log(error);
        }


    }

    return (
        <>
            <div className="login-wrap">
                <div className="login-html">
                    {/* <input id="tab-1" type="radio" name="tab" className="sign-in" checked /><label htmlFor="tab-1" className="tab">Sign In</label> */}
                    <input id="tab-2" type="radio" name="tab" checked className="sign-up" /><label htmlFor="tab-2" className="tab">Sign Up</label>
                    <div className="login-form">

                        {/* user sign up */}
                        <div className="sign-up-htm">
                            <div className="group">
                                <label htmlFor="user" className="label">Username</label>
                                <input id="user" type="text" className="input" value={userSignUp.username}
                                    onChange={(event) => setUserSignUp({ ...userSignUp, username: event.target.value })}
                                />
                            </div>
                            <div className="group">
                                <label htmlFor="pass" className="label">Email Address</label>
                                <input id="pass" type="text" className="input"
                                    value={userSignUp.email}
                                    onChange={(event) => setUserSignUp({ ...userSignUp, email: event.target.value })} />
                            </div>
                            <div className="group">
                                <label htmlFor="pass" className="label">Password</label>
                                <input id="pass" type="password" className="input" data-type="password"
                                    value={userSignUp.password}
                                    onChange={(event) => setUserSignUp({ ...userSignUp, password: event.target.value })} />
                            </div>


                            <div className="group">
                                <button onClick={() => registerUser()} className="button" value="Sign Up" >Sign up</button>
                            </div>
                            <div className="hr"></div>
                            <div className="foot-lnk">
                                <a href="">

                                    <label htmlFor="tab-1">Already Member?</label>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </>
    )
}