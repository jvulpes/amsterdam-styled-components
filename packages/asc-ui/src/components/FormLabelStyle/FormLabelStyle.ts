import styled, { css } from '@datapunt/asc-core'
import { srOnlyStyle, getTypographyFromTheme } from '../../utils'

interface IProps {
  htmlFor?: string
  srOnly: boolean
  error?: string | boolean
}

const FormLabelStyle = styled.label.attrs<IProps>(({ htmlFor }: IProps) => {
  return {
    htmlFor,
  }
})<IProps>`
  ${({ srOnly }) =>
    !srOnly &&
    css`
      ${({ theme }) =>
        getTypographyFromTheme()({
          as: 'p',
          gutterBottom: 0,
          theme,
        })};
      display: block;
      padding-bottom: 10px;
      font-weight: 700;
    `}

  ${({ error }) =>
    error &&
    css`
      color: red;
    `}  

  ${srOnlyStyle()}
`

export default FormLabelStyle
