import React from 'react'
import { storiesOf } from '@storybook/react'
import Menu from './Menu'
import MenuItem from './MenuItem'
import MenuItemLink from './MenuItemLink'
import MenuFlyOut from './MenuFlyOut'
import MenuTitle from './MenuItemTitle'

storiesOf('Composed/NewMenu', module)
  .add('default', () => (
    <Menu>
      <MenuItem>
        <MenuItemLink href="/">Home</MenuItemLink>
      </MenuItem>
      <MenuItem>
        <MenuItemLink href="/">Shop</MenuItemLink>
      </MenuItem>
      <MenuFlyOut label="Submenu!">
        <MenuItem>
          <MenuItemLink href="/">Space Bear 6</MenuItemLink>
        </MenuItem>
        <MenuItem>
          <MenuItemLink href="/">Space Bear 6 Plus</MenuItemLink>
        </MenuItem>
        <MenuTitle>Just a menu title</MenuTitle>
        <MenuItem>
          <MenuItemLink href="/">Space Bear 7</MenuItemLink>
        </MenuItem>
      </MenuFlyOut>
      <MenuItem>
        <MenuItemLink href="/">Mars Cars</MenuItemLink>
      </MenuItem>
      <MenuItem>
        <MenuItemLink href="/">Contact</MenuItemLink>
      </MenuItem>
      <MenuFlyOut label="Another one!">
        <MenuItem>
          <MenuItemLink href="/">Space Bear 6</MenuItemLink>
        </MenuItem>
        <MenuItem>
          <MenuItemLink href="/">Space Bear 6 Plus</MenuItemLink>
        </MenuItem>
        <MenuTitle>Just a menu title</MenuTitle>
        <MenuItem>
          <MenuItemLink href="/">Space Bear 7</MenuItemLink>
        </MenuItem>
      </MenuFlyOut>
    </Menu>
  ))
  .add('toggle', () => (
    <Menu toggle>
      <MenuItem>
        <MenuItemLink href="/">Home</MenuItemLink>
      </MenuItem>
      <MenuItem>
        <MenuItemLink href="/">Shop</MenuItemLink>
      </MenuItem>
      <MenuFlyOut label="Submenu!">
        <MenuItem>
          <MenuItemLink href="/">Space Bear 6</MenuItemLink>
        </MenuItem>
        <MenuItem>
          <MenuItemLink href="/">Space Bear 6 Plus</MenuItemLink>
        </MenuItem>
        <MenuTitle>Just a menu title</MenuTitle>
        <MenuItem>
          <MenuItemLink href="/">Space Bear 7</MenuItemLink>
        </MenuItem>
      </MenuFlyOut>
      <MenuItem>
        <MenuItemLink href="/">Mars Cars</MenuItemLink>
      </MenuItem>
      <MenuItem>
        <MenuItemLink href="/">Contact</MenuItemLink>
      </MenuItem>
      <MenuFlyOut label="Another one!">
        <MenuItem>
          <MenuItemLink href="/">Space Bear 6</MenuItemLink>
        </MenuItem>
        <MenuItem>
          <MenuItemLink href="/">Space Bear 6 Plus</MenuItemLink>
        </MenuItem>
        <MenuTitle>Just a menu title</MenuTitle>
        <MenuItem>
          <MenuItemLink href="/">Space Bear 7</MenuItemLink>
        </MenuItem>
      </MenuFlyOut>
    </Menu>
  ))
