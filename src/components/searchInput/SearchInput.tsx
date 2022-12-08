import React, { useState } from 'react'
import axios from 'axios';
import styled from 'styled-components';
import Error from '../error/Error';
import Loading from '../loading/Loading';
import PokemonInfo from '../pokemonInfo/PokemonInfo';

const SearchBar = () => {
  const [pokemonName, setPokemonName] = useState<string>("");
  const [pokemonData, setPokemonData] = useState<null | any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const onChangePokemonName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPokemonName(event.target.value)
  }

  // 검색 결과 초기화
  const onClickReset = () => {
    setPokemonData(null);
    setPokemonName("");
    setErrorMsg(null)
  }

  // 포켓몬 이름 검색 기능
  const searchFormSubmit = async (event: React.ChangeEvent<HTMLInputElement> | any) => {
    event.preventDefault();
    if (pokemonName === '') {
      setErrorMsg('Sorry, we cannot find! Please search the Pokemon ID or Name.') // 에러 메세지
      return;
    }

    const API_URL = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

    setErrorMsg(null);
    setPokemonData(null);
    setIsLoading(true);

    await axios
      .get(API_URL)
      .then((response) => {
        setPokemonData(response)
      })
      .catch((error) => {
        setErrorMsg('Sorry, Something is wrong! Try it again later.')
      })
    setIsLoading(false);
  }

  return (
    <SearchWrapper>
      <SearchTitle>Search your Pokemon!</SearchTitle>
      <SearchForm onSubmit={searchFormSubmit}>
        <SearchLabel htmlFor="search">Poke-ID : </SearchLabel>
        <SearchInp id='search' value={pokemonName} type="text" placeholder='Pokemon ID or Name.' onChange={onChangePokemonName} />
        <SearchSubmit type="submit" value='Search' />
        <SearchClearBtn type="button" onClick={onClickReset}>Reset</SearchClearBtn>
      </SearchForm>
      {isLoading && <Loading />}
      {errorMsg !== null && <Error>{errorMsg}</Error>}
      {pokemonData && <PokemonInfo pokemonData={pokemonData} />}
    </SearchWrapper>
  )
}

export default SearchBar

const SearchWrapper = styled.section`
  width: 600px;
  margin: 40px auto;
`

const SearchTitle = styled.h1`
  font-size: 48px;
  font-weight: 600;
  font-family: 'Gill Sans';
  text-align: center;
  margin-bottom: 40px;
  color: #fff;
`

const SearchForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
`

const SearchLabel = styled.label`
  font-size: 18px;
  font-weight: 600;
  font-family: 'Gill Sans';
  color: #fff;
`

const SearchInp = styled.input`
font-size: 18px;
margin: 0 10px;
padding: 8px;
border-radius: 6px;
`

const SearchSubmit = styled.input`
  font-size: 18px;
  background-color: #3761A8;
  color: #fff;
  padding: 8px;
  border-radius: 6px;
`

const SearchClearBtn = styled.button`
  font-size: 18px;
  background-color: #fff;
  color: #3761A8;
  margin-left: 10px;
  padding: 8px;
  border-radius: 6px;
`