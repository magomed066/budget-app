import { ReactNode } from 'react'
import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'

const withMantine = (component: () => ReactNode) => () => (
  <MantineProvider>{component()}</MantineProvider>
)

export default withMantine
