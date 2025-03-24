import { Title } from '@mantine/core'
import classes from './styles.module.scss'

const HeaderWidget = () => {
  return (
    <header className={classes.header}>
      <div className={classes.inner}>
        <Title order={3}>Dashboard</Title>
      </div>
    </header>
  )
}

export default HeaderWidget
