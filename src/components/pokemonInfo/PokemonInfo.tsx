import React from 'react'
import styled from 'styled-components';

const PokemonInfo = ({ pokemonData }: null | any) => {
  const imgSrc = pokemonData.data.sprites.other.dream_world.front_default;
  const defaultImgSrc = pokemonData.data.sprites.front_default
  const name = pokemonData.data.name;
  const id = pokemonData.data.id;
  const weight = pokemonData.data.weight;
  const ability = `${pokemonData.data.abilities[0].ability.name}`

  return (
    <PokemonWrap>
      <PokemonImgWrap>
        <PokemonImg src={!imgSrc ? defaultImgSrc : imgSrc} alt={`${name}_image`} />
        <PokemonName>{name}</PokemonName>
      </PokemonImgWrap>
      <PokemonInfoList>
        <PokemonInfoItem>ID : #{id}</PokemonInfoItem>
        <PokemonInfoItem>WEIGHT : {weight}</PokemonInfoItem>
        <PokemonInfoItem>ABILITY : {ability}</PokemonInfoItem>
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
`

const PokemonName = styled.p`
  font-size: 30px;
  font-weight: 600;
  color: #212121;
  font-family: 'Gill Sans';
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
`
