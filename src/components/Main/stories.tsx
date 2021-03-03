import { Meta, Story } from '@storybook/react'

import Main from '.'

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'default title',
    description: 'Typescript, ReactJS, NextJS e Styled Components',
  },
} as Meta

export const Basic: Story = args => <Main {...args} />
Basic.args = {
  title: 'React Avançado',
  description: 'Typescript, ReactJS, NextJS e Styled Components',
}

export const Default: Story = args => <Main {...args} />
