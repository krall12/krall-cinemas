import styled from 'styled-components'

export default styled.h2`
  font-size: 50px;
  color: ${({ theme }) => theme.color1};
  margin-bottom: 14px;

  @media (max-width: 768px) {
    font-size: 34px;
  }
`
