import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'

export default styled(motion.div)`
  height: 24vw;
  width: 24vw;
  background: ${({ theme }) => theme.color4};
  position: absolute;
  left: -40px;
  top: 8%;
  border-radius: 50%;
  z-index: -1;
  border: 0;

  ${({ color }) =>
    color &&
    css`
      background: ${color};
    `}

  ${({ outline, color, theme }) =>
    outline &&
    css`
      background: transparent;
      border: 2px solid ${color || theme.color4};
    `}
`
