import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 60%;
    background-color: #F9F5F3;
    margin-top: 5px;
    padding: 30px;
`

const Image = styled.img`
    width: 300px;
    height: 200px;
    border-radius: 10px;
`

const Ingredients = props => {

    return(
        <Container>
            <Image src={props.details.image_url} alt='pic' />
            {props.details.ingredients.map(item => (
                <div>
                    {item}
                </div>
            ))}
        </Container>
    )

}

export default Ingredients