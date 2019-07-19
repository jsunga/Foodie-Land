import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    padding: 10px;

    &:hover {
        background-color: #F9F5F3;
        cursor: pointer;
    }
`

const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const Image = styled.img`
    border-radius: 50%;
`

const Title = styled.h1`
    font-family: 'Roboto Condensed', sans-serif;
    margin: 0;
    color: #F59783;
    padding: 0 10px;
`

const Publisher = styled.h3`
    font-family: 'Roboto Condensed', sans-serif;
    margin: 0;
    color: #c7c7c7;
    padding: 5px 10px;
`

const Recipes = props => {

    return (
        <>
            {props.recipes.map(item => (
                <Container key={item.id}>
                    <ImageContainer><Image src={item.image_url} height='100px' width='100px' alt='pic' /></ImageContainer>
                    <section>
                        <Title>{item.title}</Title>
                        <Publisher>{item.publisher}</Publisher>
                    </section>
                </Container>
            ))}
        </>
    )

}

export default Recipes
