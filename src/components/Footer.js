import React from 'react';
import '../css/Footer.css';

function Footer() {
    return (
        <div className="Footer">
            <img src={process.env.PUBLIC_URL + `assets/logo.svg`} alt="logo" className="logo" />
            <div className="project-info">
                2024 가톨릭대학교 종합설계프로젝트
                <br />
                김규원 박승원 서승준 이건 전미진
            </div>
            <div className="disclaimer">
                쉐어릿은 통신판매중개자이며, 통신판매의 당사자가 아닙니다.
                <br /> 상품, 상품 정보, 거래, 배송에 관한 의무와 책임은 판매자에게 있습니다.
            </div>
            <div className="links">
                이용약관 | 개인정보처리방침 | Github
                <br /> Copyright by 2024 Shareit
            </div>
        </div>
    );
}

export default Footer;
