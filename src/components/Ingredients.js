import React from 'react'
import styled from 'styled-components'

const Main = styled.div`
    width: 60%;
    background-color: #F9F5F3;
    margin-top: 5px;
    padding: 30px;
    font-family: 'Roboto Condensed', sans-serif;
    color: grey;
    overflow-y: auto;
`

const Container = styled.div`
    display: flex;
`

const Image = styled.img`
    width: 300px;
    height: 200px;
    border-radius: 10px;
`

const Wrapper = styled.div`
    width: 50%;
    padding: 0 20px;
`

const Title = styled.h1`
    margin: 0;
    padding-bottom: 5px;
    color: #F69A83;
`

const Publisher = styled.h3`
    margin: 0;
    padding-bottom: 30px;
`

const List = styled.ul`
    margin: 0;
`

const Item = styled.li`
    padding-top: 15px;
    font-size: 25px;
`

const Link = styled.a`
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 20px;
    text-decoration: none;
    background-color: #076B00;
    border-radius: 10px;
    color: white;
    padding: 15px;
    transition: .5s

    &:hover {
        background-color: white;
        color: #076B00;
        border: 1px solid #076B00;
    }
`

const Header = styled.h1`
    margin: 0;
    margin-top: 15px;
    color: #FBD789;
`

const Ingredients = props => {

    return(
        <Main>
            <Container>
                <Image src={props.details.image_url} alt='pic' />
                <Wrapper>
                    <Title>{props.details.title}</Title>
                    <Publisher>By {props.details.publisher}</Publisher>
                    <Link href={props.details.source_url} target="_blank" rel="noopener noreferrer">Link to instructions</Link>
                </Wrapper>
            </Container>
            <Header>Ingredient List</Header>
            <List>
                {props.details.ingredients.map(item => (
                    <Item key={item}>
                        {item}
                    </Item>
                ))}
            </List>
        </Main>
    )

}

export default Ingredients