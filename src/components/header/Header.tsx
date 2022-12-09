import React from 'react'
import styled from 'styled-components'

const Header = () => {
  return (
    <>
      <LogoImg src="assets/images/pokemon-logo.png" alt="logo-image" />
    </>
  )
}

export default Header

const LogoImg = styled.img`
  display: block;
  width: 350px;
  margin: 0 auto;
  @media screen and (max-width: 480px) {
    width: 250px;
  }
`