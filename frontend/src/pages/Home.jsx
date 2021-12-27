import React from 'react';
import Banner from '../components/home/banner/Banner';
import Howitworks from '../components/home/howworks/Howitworks';
import Lookingtoinvest from '../components/home/lookingtoinvest/Invest';
import Newprojects from '../components/home/newprojects/Newprojects';
import Topcity from '../components/home/topcity/Topcity';
import Tpotrending from '../components/home/trending/Tpotrending';
import Propforsale from '../components/home/forsale/Propforsale';
import Topsaleing from '../components/home/topsaleing/Topsaleing';
import Whoare from '../components/home/whoweare/Whoare';
import Testinomial from '../components/home/testinomial/Testinomial';
import Newsupdate from '../components/home/newsandupdate/Newsupdate';
import Locationmap from '../components/home/map/Locationmap';
import Footer from '../components/common/Footer';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Howitworks/>
            <Lookingtoinvest/>
            <Newprojects/>
            <Topcity/>
            <Tpotrending/>
            <Propforsale/>
            <Topsaleing/>
            <Newprojects />
            <Whoare/>
            <Testinomial/>
            <Newsupdate/>
            <Locationmap/>
            <Footer/> 
        </div>
    )
}

export default Home
