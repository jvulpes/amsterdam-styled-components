import * as React from 'react'
import { storiesOf } from '@storybook/react/'
import { action } from '@storybook/addon-actions'
import styled from '@datapunt/asc-core'
import SearchBar, { SearchBarStyle, IconButtonStyle } from './SearchBar'
import { svgFill } from '../../utils'

const SearchBarStory: React.FC<{}> = () => {
  const [searchText, setText] = React.useState('')

  return (
    <>
      <SearchBar
        maxWidth="1400px"
        placeholder="Enter the search text"
        onTextChanged={(text: string) => {
          console.log('TCL: text', text)
          setText(text)
          action(`text changed: ${searchText}`)
        }}
        onSearch={(text: string) => {
          console.log('TCL: text', text)
          action(`button clicked: ${searchText}`)
        }}
        text={searchText}
      />
      <p>
        <span>Searching for:</span>
        {searchText}
      </p>
    </>
  )
}

const ChangedSearchBarStyle = styled(SearchBarStyle)`
  align-content: flex-start;

  & > ${IconButtonStyle} {
    order: -1;
    margin-left: 0px;
    margin-right: 5px;
    padding: 10px;

    & svg {
      ${svgFill('tint', 'level5')};
    }
  }
`

const SearchBarStoryWithChangedStyle: React.FC<{}> = () => {
  const [searchText, setText] = React.useState('')

  return (
    <>
      <SearchBar
        styledComponent={ChangedSearchBarStyle}
        onTextChanged={(text: string) => {
          setText(text)
          action(`text changed: ${searchText}`)
        }}
        onSearch={() => action(`button clicked: ${searchText}`)}
        text={searchText}
      />
      <p>
        <span>Searching for:</span>
        {searchText}
      </p>
    </>
  )
}

storiesOf('Composed/SearchBar', module)
  .add('default state', () => <SearchBarStory />)
  .add('with changed style', () => <SearchBarStoryWithChangedStyle />)
