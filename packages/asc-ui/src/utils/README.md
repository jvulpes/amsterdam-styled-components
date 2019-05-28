# Styles utility functions

## fromProps

Gets value from the props object. Useful for styled-components

```js static
import styled from 'styled-components'
import { fromProps } from './utils/fromTheme'

const Div = styled.div`
  display: ${fromProps('display')};
`

<Div display="flex" /> // styles: { display: 'flex' }
```

## fromTheme

Same as `fromProps`, but it will get a value from the (global) theme object. Useful for styled-components

```js static
import styled from 'styled-components'
import fromTheme from './utils'

const theme = {
  colour: {
    brand: '#f00'
  },
  fontSizes: {
    title: 2
  },
  spacing: {
    max: 4
  }
}

const DivStyle = styled.div`
  background-color: ${fromTheme('colour.white')};
  font-size: ${fromTheme('fontSizes.title')}em;
  padding: ${fromTheme('spacing.max', spacing => spacing * 2)}rem;
`

<DivStyle theme={theme} /> // styles: { backgroundColor: '#f00', fontSize: '2em', padding: '8rem' }
```

## getColorFromTheme and color

Extends `fromTheme`, but it's specified to the theme colors. Will return a default value if no colors are specified

```js static
import styled from 'styled-components'
import { getColorFromTheme } from './utils'

const theme = {
  colors: {
    primary: {
      dark: '#000',
      light: '#fff'
    },
    light: '#fff'
  }
}

// with getColorFromTheme
const ButtonStyle = styled.button`
  background-color: ${theme => getColorFromTheme(theme, 'primary', 'dark')};
  color: ${theme => getColorFromTheme(theme, 'light')};
`

// with color (prefered)
const ButtonStyle = styled.button`
  background-color: ${color('primary', 'dark')};
  color: ${color('light')};
`


<ButtonStyle theme={theme} /> // styles: { backgroundColor: '#000', color: '#fff' }
```

## breakpoint
Extenstion of fromTheme to retrieve the media query breakpoints as specified for the current theme.

```js static
const HeaderSearchStyle = styled.div`
  @media screen and ${breakpoint('max-width', 'tabletM')} {
    width: 50px;
  }
`
<HeaderSearchStyle theme={theme} />
```


## svgFill

...