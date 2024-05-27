import React from 'react';
import { useLocation } from 'react-router-dom';
import Topnav from '../components/Topnav';
import LendListRow from '../components/LendListRow';
import TopTags from '../components/TopTags';
import Footer from '../components/Footer';
import '../css/LendMain.css';

function LendMain() {
    const location = useLocation();
    const keyword = new URLSearchParams(location.search).get('q');

    console.log('검색어:', keyword);

    return (
        <div className="container">
            <Topnav />
            <div className="lendmain-container">
                <div className="lendmain-title">
                    {keyword ? decodeURIComponent(keyword) : '주변엔 이런 물건을 빌릴 수 있어요'}
                </div>
                <LendListRow />
                <TopTags location={'Lend'} />
            </div>
            <Footer />
        </div>
    );
}

export default LendMain;
