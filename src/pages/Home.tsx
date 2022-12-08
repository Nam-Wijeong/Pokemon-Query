import React from 'react'
import styled from 'styled-components'
import Header from '../components/header/Header'
import SearchBar from '../components/searchBar/SearchBar'

const Home = () => {
  return (
    <AllWrapper>
      <Header />
      <SearchBar />
    </AllWrapper>
  )
}

export default Home

const AllWrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding: 60px 0;
  background-color: #212121;
`