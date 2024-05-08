import React from 'react';
import Topnav from '../components/Topnav';
import NeedListRow from '../components/NeedListRow';
import { useLocation } from 'react-router-dom';

function NeedMain() {
    const location = useLocation();
    const keyword = new URLSearchParams(location.search).get('q');
    console.log('검색어:', keyword);
    return (
        <div className="container">
            <Topnav></Topnav>
            <div>
                <h2>{keyword ? decodeURIComponent(keyword) : '이런 물건들이 필요해요!'}</h2>
                <NeedListRow />
            </div>
        </div>
    );
}

export default NeedMain;
