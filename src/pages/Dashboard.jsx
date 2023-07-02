import React from 'react'
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";
import { useNavigate } from "react-router-dom";
import Navbar from '../components/Navbar';

const Dashboard = () => {
  const navigate = useNavigate();

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (!currentUser) navigate("/login");
  });

  return (
    <div>
      <Navbar />
      <div>
        Dashboard
      </div>
    </div>
  )
}

export default Dashboard
