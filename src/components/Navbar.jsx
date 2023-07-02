import { signOut } from 'firebase/auth'
import React from 'react'
import { FaPowerOff } from "react-icons/fa6"
import { styled } from 'styled-components'
import { firebaseAuth } from '../utils/firebase-config'
import { Link } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'


const Navbar = () => {
    return (
        <Container>
            <nav>
                <div className='navbar flex a-center j-between gap-4'>
                    <div className='n-left flex a-center gap-6'>
                        <Link to='/'><h2>Library Management</h2></Link>
                        <Link to='/book'><p>Books</p></Link>
                        <Link to='/student'><p>Students</p></Link>
                    </div>
                    <div className="n-right flex a-center">
                        <button className='logout' onClick={() => signOut(firebaseAuth)}>
                            <FaPowerOff />
                        </button>
                    </div>
                </div>

            </nav>
        </Container>
    )
}

export default Navbar

const Container = styled.div`
    .logout{
        height: 3rem;
        width: 3rem;
        cursor: pointer;
    }
    nav{
        position: sticky;
        top: 0;
        height: 4rem;
        width: 100%;
        justify-content: space-between;
        position: fixed;
        top: 0;
        z-index: 2;
        padding: 0 4rem;
        align-items: center;
        background-color: #2070cc;
        color: white;
    }
    .n-left{
        h2{
            font-weight: bold;
            font-size: 1.2rem;
        }
    }
    .n-left:nth-child(1){
        p{
            text-decoration: none;
            position: relative;
            color: white;
            padding: 4px;
            font-size: inherit;
        }
    }
    .n-left:nth-child(1){
        p:after{
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0%;
            border-bottom: 3px solid white;
            transition: 0.5s;
        }
    }
    .n-left:nth-child(1){
        p:hover:after{
            width: 100%;
        }
    }
    .n-left:nth-child(1){
        p:hover{
            opacity: 0.95;
        }
    }
`   