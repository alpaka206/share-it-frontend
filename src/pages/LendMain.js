import React from 'react';
import { useLocation } from 'react-router-dom'; // useLocation 훅 import
import Topnav from '../components/Topnav';
import LendListRow from '../components/LendListRow';
import TopTags from '../components/TopTags';

function LendMain() {
    const location = useLocation(); // 현재 URL 정보를 가져옵니다.
    const keyword = new URLSearchParams(location.search).get('q'); // URL의 쿼리 파라미터에서 'q' 값을 가져옵니다.

    console.log('검색어:', keyword); // 검색어를 콘솔에 출력합니다.

    return (
        <div className="container">
            <Topnav />
            <div>
                <h2>{keyword ? decodeURIComponent(keyword) : '주변엔 이런 물건을 빌릴 수 있어요'}</h2>
                <LendListRow />
                <TopTags location={'Lend'} />
            </div>
        </div>
    );
}

export default LendMain;
