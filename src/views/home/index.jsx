import React, { memo, useEffect } from 'react'
import hyRequest from '@/services';
import { HomeWrapper } from './style';
import HomeBanner from './c-cpns/home-banner';

const Home = memo(() => {
  useEffect(() => {
    hyRequest.get({url: '/home/highscore'}).then(res => {
      console.log(res);
    });
  }, []);

  return (
    <HomeWrapper>
      <HomeBanner />
    </HomeWrapper>
  )
})

export default Home;