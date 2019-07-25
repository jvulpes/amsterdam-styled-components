import styled from '@datapunt/asc-core'
import { ShowHideTypes, showHide } from '../../../utils'

export interface Props extends ShowHideTypes {
  indent?: boolean
}

export default styled.div<Props>`
  display: flex;
  flex-direction: column;
  margin-left: ${({ indent }) => (indent ? '28px' : '0')};
  max-width: 303px;
  ${showHide}
`
