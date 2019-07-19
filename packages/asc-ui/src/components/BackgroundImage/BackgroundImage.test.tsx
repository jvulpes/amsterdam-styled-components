import * as React from 'react'
import BackgroundImage from './BackgroundImage'
import { renderWithTheme } from '../../utils/withTheme'
import 'jest-styled-components'

describe('BackgroundImage', () => {
  let component: any

  it('should render', () => {
    component = renderWithTheme(
      <BackgroundImage source="http://the-image-path" />,
    )
    expect(component).toMatchSnapshot()
  })
})
