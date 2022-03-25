import React from 'react'
import { Container } from 'react-bootstrap'


const Home = (props) => {
    return (
        <>
            <Container>
                <div class="jumbotron text-center m-4">
                    <h1 class="display-4">Hello, world!</h1>
                    <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                </div>
            </Container>
        </>
    )

}

export default Home;