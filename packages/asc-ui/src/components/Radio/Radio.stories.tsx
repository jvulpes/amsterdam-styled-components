import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { RadioGroupStyled } from '@amsterdam/asc-core'
import Radio from './Radio'

storiesOf('Radio', module).add('All radios', () => (
  <div>
    <RadioGroupStyled>
      <Radio id="female" name="gender" value="female" label="Vrouw" />
      <Radio id="male" name="gender" value="male" label="Man" />
      <Radio id="none" name="gender" value="none" label="Geen van beide" disabled />
    </RadioGroupStyled>

    <RadioGroupStyled orientation="horizontal">
      <Radio id="female2" name="gender2" value="female" label="Vrouw 2" />
      <Radio id="male2" name="gender2" value="male" label="Man 2" />
      <Radio id="none2" name="gender2" value="none" label="Geen van beide 2" disabled />
    </RadioGroupStyled>
  </div>
))