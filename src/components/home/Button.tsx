import { styled } from '../../../styled-system/jsx'

export const Button = styled('button', {
  base: {
    px: 4,
    py: 2,
    borderRadius: 'md',
    cursor: 'pointer',
  },
  variants: {
    variant: {
      outline: {
        border: '1px solid #ffd93d',
        color: '#ffd93d',
      },
      solid: {
        bg: '#ffd93d',
        color: '#000',
      }
    }
  }
})