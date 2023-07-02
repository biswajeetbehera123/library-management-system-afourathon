import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithPopup
} from "firebase/auth";
import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { styled } from 'styled-components'
import BackgorundImage from "../components/backgroundImage"
import { Link } from 'react-router-dom'
import { FcGoogle } from "react-icons/fc"
import { firebaseAuth, provider } from "../utils/firebase-config";

const Signup = () => {
    const [value, setValue] = useState("")
    const [formValues, setFormValues] = useState({
        email: "",
        password: "",
    });
    const navigate = useNavigate();

    const handleSignIn = async () => {
        try {
            const { email, password } = formValues;
            await createUserWithEmailAndPassword(firebaseAuth, email, password);
        } catch (error) {
            console.log(error);
        }
    };

    onAuthStateChanged(firebaseAuth, (currentUser) => {
        if (currentUser) navigate("/");
    });

    const handleClick = () => {
        signInWithPopup(firebaseAuth, provider).then((data) => {
            setValue(data.user.email)
            localStorage.setItem("email", data.user.email)
        })
    }

    useEffect(() => {
        setValue(localStorage.getItem('email'))
    })

    return (
        <Container>
            <BackgorundImage />
            <div className="login-box">
                <h2>Signup</h2>
                <form>
                    <div className="user-box">
                        <input type="text" name="email" required="" id='input' placeholder='Email' onChange={(e) =>
                            setFormValues({
                                ...formValues,
                                [e.target.name]: e.target.value,
                            })
                        }
                            value={formValues.email} />
                    </div>
                    <div className="user-box">
                        <input
                            type="password"
                            placeholder="Password"
                            onChange={(e) =>
                                setFormValues({
                                    ...formValues,
                                    [e.target.name]: e.target.value,
                                })
                            }
                            id='input'
                            name="password"
                            value={formValues.password}
                            required=""
                        />
                    </div>
                    <div className="button-form">
                        <Link id='submit' to='/login' onClick={handleSignIn}>Sign Up</Link>
                    </div>
                    <hr className='my-3' />
                    <button className='ggl flex a-center j-center' onClick={handleClick}><FcGoogle />Join with Google</button>
                </form>
            </div>
        </Container>
    )
}

export default Signup

const Container = styled.div`
    .login-box{
    position: absolute;
    top: 50%;
    left: 50%;
    width: 400px;
    padding: 40px;
    transform: translate(-50%,-50%);
    background: #242026;
    box-shadow: 0 15px 25px rgba(40, 38, 52, 0.7);
    border-radius: 10px;
}

.login-box{
    h2{
        margin: 0 0 30px;
        padding: 0;
        color: #fff;
        text-align: center;
        font-size: 1.5rem;
    }
}

.login-box {
    .user-box{
        #input{
            position: relative;
            width: 100%;
            padding: 10px 0;
            font-size: 16px;
            color: #fff;
            margin-bottom: 30px;
            border: none;
            border-bottom: 1px solid #fff;
            outline: none;
            background: transparent;
        }
    }
}

.login-box .user-box input:focus~label,
.login-box .user-box input:valid~label{
    top: -85px;
    left: 0;
    color: #8F7CEC;
    font-size: 12px;
}

#submit{
    padding: 10px 20px;
    color: #CBBDDB;
    font-size: 16px;
    text-decoration: none;
    text-transform: uppercase;
    overflow: hidden;
    transition: 0.5s;
    letter-spacing: 4px;
    border: 1px solid #8F7CEC;
    margin: auto;
    border-radius: 5rem;
}

#submit:hover{
    background: #8F7CEC;
    color: #fff;
    border-radius: 5rem;
    box-shadow: 0 0 5px #8F7CEC , 0 0 10px #8F7CEC , 0 0 25px #8F7CEC, 0 0 50px #8F7CEC;
}

.button-form{
    display: flex;
    flex-direction: row;
    margin-top: 20px;
}

.register{
    font-size: 14px;
    text-decoration: none;
    color: #CBBDDB;
    margin: auto;
    width: 60%;
    text-align: center;
}

.register{
    #reg{
        margin: auto;
        color: #8F7CEC;
        text-decoration: none;
    }
}

.ggl{
    margin-top: 5px;
    width: 320px;
    background: white;
    color: black;
    height: 35px;
    border-radius: 5rem ;
    gap: 1rem;
}

.ggl:hover{
    background: #d0d0d0;
}
`