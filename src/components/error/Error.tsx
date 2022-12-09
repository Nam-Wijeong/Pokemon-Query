import React from 'react'
import styled from 'styled-components';

const Error = ({ children }: string | any) => {
  return (
    <ErrorMessage>
      {children}
    </ErrorMessage>
  )
}

export default Error

const ErrorMessage = styled.p`
  font-size: 20px;
  font-weight: 600;
  font-family: 'Gill Sans';
  margin-top: 56px;
  color: red;
  text-align: center;
`