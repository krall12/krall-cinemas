import styled from 'styled-components'

export default styled.p`
  font-size: 24px;
  color: ${({ theme }) => theme.color1};
  margin-bottom: 60px;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`
