import { signOut } from 'firebase/auth'
import React from 'react'
import { FaPowerOff } from "react-icons/fa6"
import { styled } from 'styled-components'
import { firebaseAuth } from '../utils/firebase-config'


const Navbar = () => {
    return (
        <Container>
            <nav>
                <button className='logout' onClick={() => signOut(firebaseAuth)}>
                    <FaPowerOff />
                </button>
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
        height: 6.5rem;
        width: 100%;
        justify-content: space-between;
        position: fixed;
        top: 0;
        z-index: 2;
        padding: 0 4rem;
        align-items: center;
    }
`