import * as React from 'react'
import { storiesOf } from '@storybook/react/'
import { action } from '@storybook/addon-actions'
import SearchBar, { SearchBarStyle, IconButtonStyle } from './SearchBar'
import styled from '../../styled-components'
import { svgFill } from '../../styles/utils'

const SearchBarStory: React.FC<{}> = () => (
  <>
    <SearchBar
      onClick={action('button clicked')}
      onChange={action('key pressed')}
    />
  </>
)

const SearchBarStoryWithChangedStyle: React.FC<{}> = () => {
  const ChangedSearchBarStyle = styled(SearchBarStyle)`
    align-content: flex-start;

    ${IconButtonStyle} {
      order: -1;
      margin-left: 0px;
      margin-right: 5px;
      padding: 10px;

      & svg {
        ${svgFill('tint', 'level5')};
      }
    }
  `

  return (
    <>
      <SearchBar
        styledComponent={ChangedSearchBarStyle}
        onClick={action('button clicked')}
        onChange={action('key pressed')}
      />
    </>
  )
}

storiesOf('Composed/SearchBar', module)
  .add('default state', () => <SearchBarStory />)
  .add('with changed style', () => <SearchBarStoryWithChangedStyle />)
