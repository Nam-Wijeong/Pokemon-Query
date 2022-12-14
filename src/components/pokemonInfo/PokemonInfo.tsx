import React from 'react'
import styled from 'styled-components';

const PokemonInfo = ({ pokemonData }: null | any) => {
  const imgSrc = pokemonData.data.sprites.other.dream_world.front_default;
  const defaultImgSrc = pokemonData.data.sprites.front_default; // imgSrc의 값이 null일 때
  const name = pokemonData.data.name;
  const id = pokemonData.data.id;
  const weight = pokemonData.data.weight;
  const ability = `${pokemonData.data.abilities[0].ability.name}`;

  // 첫번째 글자를 대문자로 변환하기
  const changeToCapLetter = (letter: string) => {
    return letter[0].toUpperCase() + letter.slice(1);
  }

  return (
    <PokemonWrap>
      <PokemonImgWrap>
        <PokemonImg src={!imgSrc ? defaultImgSrc : imgSrc} alt={`${name}_image`} />
        <PokemonName>{changeToCapLetter(name)}</PokemonName>
      </PokemonImgWrap>
      <PokemonInfoList>
        <PokemonInfoItem>ID : #{id}</PokemonInfoItem>
        <PokemonInfoItem>WEIGHT : {weight}</PokemonInfoItem>
        <PokemonInfoItem>ABILITY : {changeToCapLetter(ability)}</PokemonInfoItem>
      </PokemonInfoList>
    </PokemonWrap >
  )
}

export default PokemonInfo

const PokemonWrap = styled.article`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #FFCC01;;
  border-radius: 6px;
  width: 500px;
  margin: 0 auto;
  padding: 16px;
  @media screen and (max-width: 480px) {
    font-size: 28px; 
    width: 340px;
  }
`

const PokemonImgWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const PokemonImg = styled.img`
  width: 160px;
  height: 120px;
  margin-bottom: 16px;
  @media screen and (max-width: 480px) {
    width: 100px;
    height: 80px;
  }
`

const PokemonName = styled.p`
  font-size: 30px;
  font-weight: 600;
  color: #212121;
  font-family: 'Gill Sans';
  @media screen and (max-width: 480px) {
    font-size: 20px;
  }
`

const PokemonInfoList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: 'Gill Sans';
  margin-left: 12px;
`

const PokemonInfoItem = styled.li`
  font-size: 20px;
  font-weight: 500;
  margin: 16px 0;
  color: #212121;
  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`
