import React, { useState } from 'react';
import axios from 'axios';
import Topnav from '../components/Topnav';
import '../css/LendForm.css';
import Footer from '../components/Footer';
import Autoword from '../components/Autoword';

function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function isValidNumber(num) {
    return /^\d+$/.test(num);
}
function Lend_form() {
    const [selectedPhotos, setSelectedPhotos] = useState([]);
    const [numPhotos, setNumPhotos] = useState(0);
    const [productName, setProductName] = useState('');
    const [productTag, setProductTag] = useState('');
    const [price, setPrice] = useState('');
    const [duration, setDuration] = useState('');
    const [productInfo, setProductInfo] = useState('');
    const [hashtagList, setHashtagList] = useState([]);

    const handleProductInfoChange = (e) => {
        setProductInfo(e.target.value);
    };
    const handlePhotoDelete = (index) => {
        const newPhotos = [...selectedPhotos];
        newPhotos.splice(index, 1);
        setSelectedPhotos(newPhotos);
        setNumPhotos(newPhotos.length);
    };

    const handlePhotoSelect = (event) => {
        const files = Array.from(event.target.files);
        if (selectedPhotos.length + files.length > 5) {
            alert('사진은 최대 5개까지 올릴 수 있습니다.');
            return;
        }

        setSelectedPhotos([...selectedPhotos, ...files]);
        setNumPhotos(selectedPhotos.length + files.length);

        event.target.value = '';
    };

    const handleSubmit = async () => {
        if (
            productName.trim() === '' ||
            selectedPhotos.length === 0 ||
            hashtagList.length === 0 ||
            price.trim() === '' ||
            duration.trim() === '' ||
            productInfo.trim() === ''
        ) {
            alert('모든 항목을 입력해주세요.');
            return;
        }

        if (!isValidNumber(price) || !isValidNumber(duration)) {
            alert('가격과 기간은 숫자만 입력 가능합니다.');
            return;
        }

        if (selectedPhotos.length < 1 || selectedPhotos.length > 5) {
            alert('사진은 최소 1장 이상, 최대 5장까지 올릴 수 있습니다.');
            return;
        }

        if (hashtagList.length < 1 || hashtagList.length > 5) {
            alert('해시태그는 최소 1개 이상, 최대 5개까지 입력할 수 있습니다.');
            return;
        }

        const payload = {
            title: productName,
            content: productInfo,
            cost: parseInt(price, 10),
            hashTag: hashtagList.join('#'),
            perDate: parseInt(duration, 10),
            postType: 'NEED',
        };

        console.log('Payload to be sent:', payload);

        // try {
        //     const response = await axios.post('/api/post', payload);
        //     if (response.status === 200) {
        //         window.location.href = '/lend';
        //     } else {
        //         alert('서버에 오류가 발생했습니다. 다시 시도해주세요.');
        //     }
        // } catch (error) {
        //     console.error('There was an error sending the request:', error);
        //     alert('서버에 오류가 발생했습니다. 다시 시도해주세요.');
        // }
    };

    const handleEnterPress = (e) => {
        if (e.key === 'Enter') {
            addHashtagToList();
        }
    };

    const addHashtagToList = () => {
        if (productTag.trim() !== '') {
            const isValidHashtag = /^[A-Za-z0-9ㄱ-ㅎㅏ-ㅣ가-힣_]*$/.test(productTag.trim());
            if (isValidHashtag) {
                if (productTag.trim().length <= 7) {
                    if (hashtagList.length < 5 && !hashtagList.includes(productTag)) {
                        setHashtagList([...hashtagList, productTag]);
                        setProductTag('');
                    }
                } else {
                    alert('해시태그는 최대 7자까지 입력할 수 있습니다.');
                }
            } else {
                alert('해시태그는 영문, 한글, 숫자, 언더바(_)만 입력 가능합니다.');
            }
        }
    };

    const handleHashtagDelete = (tag) => {
        setHashtagList(hashtagList.filter((item) => item !== tag));
    };
    return (
        <div className="container">
            <Topnav />
            <div className="lend-form-product-img">
                <div className="lend-form-product-img-title">제품 사진</div>
                <div className="photo-big-container">
                    <div className="photo-container">
                        <div className="upload-box" onClick={() => document.getElementById('photo-upload').click()}>
                            <img src="/assets/camera_add.svg" alt="camera_add" width={26} height={23} />
                            <div className="lend-form-photo-num">{numPhotos}/5</div>
                        </div>
                    </div>
                    <input
                        type="file"
                        id="photo-upload"
                        accept="image/*"
                        multiple
                        onChange={handlePhotoSelect}
                        style={{ display: 'none' }}
                    />
                    {selectedPhotos.map((photo, index) => (
                        <div key={index} className="photo-wrapper">
                            <img src={URL.createObjectURL(photo)} alt={`Selected ${index + 1}`} className="photo" />
                            <button className="delete-button" onClick={() => handlePhotoDelete(index)}>
                                <img src="/assets/form_image_delete.svg" alt="delete" width={10} height={10} />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
            <div className="lend-form-product-name">
                <div className="lend-from-product-name-title">제품 이름</div>
                <input
                    type="text"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    placeholder="제품 이름을 입력하세요."
                />
            </div>
            <div className="lend-form-hashtag">
                <div className="lend-form-product-name-hashtag-title">해시태그</div>
                <div className="hashtag-list">
                    {hashtagList.map((tag, index) => (
                        <div key={index} className="hashtag-item">
                            #{tag}{' '}
                            <button onClick={() => handleHashtagDelete(tag)}>
                                <img src="/assets/form_hashtag_delete.svg" alt="delete" width={10} height={10} />
                            </button>
                        </div>
                    ))}
                </div>
                <input
                    type="text"
                    value={productTag}
                    onChange={(e) => setProductTag(e.target.value)}
                    onKeyDown={handleEnterPress}
                    placeholder="제품과 관련된 해시태그를 입력해 주세요. (최대 5개)"
                />
                <Autoword keyword={productTag} onSearch={setProductTag} className="lend-autoword" />
                <div className="lend-form-hashtag-info">
                    ▪ 태그는 띄어쓰기로 구분되며 최대 9자까지 입력할 수 있어요.
                    <br />
                    ▪ 대충 번개장터에서 긁어온거임. 여기다가는 관련된 매뉴얼 적어놓으면 될듯
                    <br />
                    ▪ 사람들이 내 상품을 더 잘 찾을 수 있어요.
                    <br />▪ 상품과 관련 없는 태그를 입력할 경우, 판매에 제재를 받을 수 있어요.
                </div>
            </div>
            <div className="lend-form-price">
                <div className="lend-form-price-title">가격</div>
                <input
                    className="lend-form-price-krw"
                    type="text"
                    value={formatNumber(price)}
                    onChange={(e) => setPrice(e.target.value.replace(/\D/g, ''))}
                    placeholder="₩"
                />

                <div className="lend-form-price-unit">원</div>
                <div className="lend-form-price-unit2"> /</div>
                <input
                    className="lend-form-price-day"
                    type="text"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    placeholder=" 단위 날짜 입력"
                />
                <div className="lend-form-price-unit2">일</div>
            </div>
            <div className="lend-form-product-info">
                <div className="lend-form-product-info-title">자세한 설명</div>
                <textarea
                    value={productInfo}
                    onChange={handleProductInfoChange}
                    placeholder={`브랜드, 모델명, 구매 시기, 하자 유무 등 상품 설명을 최대한 자세히 적어주세요.\n전화번호, SNS 계정 등 개인정보 입력은 제한될 수 있어요.`}
                ></textarea>
            </div>
            <div className="lend-form-submit-container">
                <div className="lend-form-submit-small-container">
                    <button className="lend-form-submit" onClick={handleSubmit}>
                        등록하기
                    </button>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Lend_form;
