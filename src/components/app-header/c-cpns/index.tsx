import React, { memo } from 'react'
import HeaderCenter from './header-center';
import HeaderLeft from './header-left';
import HeaderRight from './header-right';
import { HeaderWrapper} from './style';

const AppHeader = memo(() => {
  return (
    <HeaderWrapper>
      <HeaderLeft />
      <HeaderCenter />
      <HeaderRight />
    </HeaderWrapper>
  )
})

export default AppHeader;