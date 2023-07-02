import React from 'react'
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";
import { useNavigate } from "react-router-dom";
import Navbar from '../components/Navbar';
import { styled } from 'styled-components';

const Dashboard = () => {
  const navigate = useNavigate();

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (!currentUser) navigate("/login");
  });

  return (
    <Container>
      <Navbar />
      <div className='body'>
        <h1>Hello World!</h1>
      </div>
    </Container>
  )
}

export default Dashboard

const Container = styled.div`
  background: #f1f1f1;
  .body{
    height: 100%;
    position: relative;
    margin-top: 4rem;
    color: black;
    padding: 0 4rem;
    h1{
      height: 100%;
    }
  }
`