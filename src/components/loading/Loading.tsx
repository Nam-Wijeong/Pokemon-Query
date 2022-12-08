import React from 'react'
import styled from 'styled-components'
import { FadeLoader } from 'react-spinners'

const Loading = () => {
  return (
    <LoadingContainer>
      <FadeLoader color='#3761A8' />
      <LoadingMessage>Loading Data...</LoadingMessage>
    </LoadingContainer>
  )
}

export default Loading

const LoadingContainer = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 56px;
`

const LoadingMessage = styled.div`
  font-size: 20px;
  font-weight: 600;
  font-family: 'Gill Sans';
  color: #fff;
  margin-top: 16px;
`