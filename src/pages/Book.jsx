import React from 'react'
import { styled } from 'styled-components'
import Navbar from '../components/Navbar'

const Book = () => {
    return (
        <Container>
            <Navbar />
            <div className="content">
                Books
            </div>
        </Container>
    )
}

export default Book

const Container = styled.div`
    
`