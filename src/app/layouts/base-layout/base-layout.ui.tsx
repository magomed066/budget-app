import { Outlet } from 'react-router-dom'
import { Flex, ScrollAreaAutosize } from '@mantine/core'
import { SidebarWidget } from '@/widgets/sidebar'
import { HeaderWidget } from '@/widgets/header'

import classes from './styles.module.scss'

export const BaseLayout = () => {
  return (
    <Flex>
      <SidebarWidget />
      <ScrollAreaAutosize className={classes.content}>
        <HeaderWidget />
        <div className={classes.outlet}>
          <Outlet />
        </div>
      </ScrollAreaAutosize>
    </Flex>
  )
}
