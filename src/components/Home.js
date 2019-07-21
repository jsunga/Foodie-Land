import React, { Component } from 'react'
import Recipes from './Recipes'
import Ingredients from './Ingredients'
import Loader from 'react-loader-spinner'
import PlaceHolder from './PlaceHolder'
import axios from 'axios'
import styled from 'styled-components'

const Background = styled.div`
    height: 100vh;
    min-width: 930px;
    background-image: linear-gradient(to bottom right, #F59683, #FBD989);
    display: flex;
    justify-content: center;
    align-items: center;
`

const Main = styled.div`
    width: 1200px;
    min-width: 930px;
    background-color: white;
    height: 90vh;
    border-radius: 10px;
`

const Navbar = styled.div`
    height: 95px;
    background-color: #F9F5F3;
    border-radius: 10px 10px 0 0;
    position: relative;
`

const Form = styled.form`
    text-align: center;
    height: 95px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Input = styled.input`
    width: 300px;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    outline: none;
`

const Button = styled.button`
    font-family: 'Roboto Condensed', sans-serif;
    color: white;
    font-size: 16px;
    transform: translate(-40px);
    border: none;
    background-image: linear-gradient(to bottom right, #FBD989, #F59683);
    width: 100px;
    padding: 12px;
    border-radius: 20px;

    &:hover {
        cursor: pointer;
    }
`

const Logo = styled.div`
    font-family: 'Pacifico', cursive;
    color: #574945;
    font-size: 30px;
    position: absolute;
    top: 0;
    left: 0;
    height: 95px;
    padding-left: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Wrapper = styled.div`
    position: absolute;
    height: 95px;
    top: 0;
    right: 0;
    padding-right: 50px
    display: flex;
    justify-content: center;
    align-items: center;
`

const Content = styled.div`
    display: flex;
    height: calc(100% - 95px);
`

const Results = styled.div`
    width: 40%;
    margin-top: 5px;
    overflow-y: auto;
`

const NoResults = styled.h1`
    font-family: 'Roboto Condensed', sans-serif;
    color: #F59683;
    padding-left: 30px;
`

export default class Home extends Component {

    state = {
        input: '',
        details: null,
        recipes: [],
        isLoading: false,
        noResults: false,
    }

    fetchRecipes = async e => {
        e.preventDefault()
        this.setState({
            isLoading: true,
            details: null
        })
        let results = await axios.get(`https://www.food2fork.com/api/search?key=7a9780f5e720cc26d546e67f9d40aaea&q=${this.state.input}`)
        if (results.data.error === 'limit') {
            alert('Sorry! API usage limit exceeded.')
            this.setState({isLoading: false})
        }
        else if (results.data.recipes.length === 0) {
            this.setState({
                noResults: true,
                recipes: [],
                isLoading: false
            })
        }
        else {
            this.setState({
                noResults: false,
                recipes: results.data.recipes,
                isLoading: false
            })
        }
    }

    fetchIngredients = async id => {
        this.setState({isLoading: true})
        let results = await axios.get(`https://www.food2fork.com/api/get?key=7a9780f5e720cc26d546e67f9d40aaea&rId=${id}`)
        this.setState({
            details: results.data.recipe,
            isLoading: false,
        })
    }

    render() {
        return (
            <Background>
                <Main>
                    <Navbar>
                        <Form onSubmit={this.fetchRecipes}>
                            <Input
                                placeholder='Search over 1,000,000 recipes..'
                                value={this.state.input}
                                onChange={e => this.setState({input: e.target.value})}
                                onClick={() => this.setState({input: ''})}
                            />
                            <Button>Search</Button>
                        </Form>
                        <Logo>Foodie Land</Logo>
                        {this.state.isLoading ? (
                            <Wrapper>
                                <Loader type="ThreeDots" color="#F69A83" height={80} width={80} />
                            </Wrapper>
                        ) : null}
                    </Navbar>
                    <Content>
                        <Results>
                            <Recipes recipes={this.state.recipes} fetchIngredients={this.fetchIngredients} />
                            {this.state.noResults ? <NoResults>No Results..</NoResults> : null}
                        </Results>
                            {this.state.details ? <Ingredients details={this.state.details} /> : <PlaceHolder />}
                    </Content>
                </Main>
            </Background>
        )
    }

}
