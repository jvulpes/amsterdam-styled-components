import * as React from 'react'
import { shallow } from 'enzyme'
import MenuItem from './MenuItem'
import MenuStyle from '../../styles/components/MenuStyle'
import { Icon } from '../..'

describe('MenuItem', () => {
  it('should render the item with a label', () => {
    const children = 'Click me'

    const component = shallow(<MenuItem>{children}</MenuItem>)

    expect(
      component.find(MenuStyle.MenuItemLabelStyle).props().children,
    ).toEqual(children)
  })

  it('should render the button with an icon', () => {
    const mockIcon = { mockIcon: 'mockIcon' }

    const component = shallow(<MenuItem icon={mockIcon} />)

    expect(component.find(Icon).props().children).toEqual(mockIcon)
  })

  it('should handle the onClick event', () => {
    const mockOnClick = jest.fn()

    const component = shallow(<MenuItem onClick={mockOnClick} />)

    component.simulate('click', {
      preventDefault: () => {},
    })

    expect(mockOnClick).toHaveBeenCalled()
  })

  it('should handle the onKeyDown event', () => {
    const mockOnClick = jest.fn()
    const mockOnKeyDown = jest.fn()

    const component = shallow(
      <MenuItem onClick={mockOnClick} onKeyDown={mockOnKeyDown} />,
    )

    component.simulate('keydown', { key: 'Enter' })

    expect(mockOnKeyDown).toHaveBeenCalled()
  })
})
