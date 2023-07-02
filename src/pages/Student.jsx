import React from 'react'
import { styled } from 'styled-components'
import Navbar from '../components/Navbar'

const Student = () => {
    return (
        <Container>
            <Navbar />
            <div className="content">
                Students
            </div>
        </Container>
    )
}

export default Student

const Container = styled.div`

`