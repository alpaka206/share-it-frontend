import React, { useState, useEffect, useRef } from 'react';
import Calendar from 'react-calendar';
import moment from 'moment';
import '../../css/DotCalendar.css';

function DotCalendar() {
    const [value, onChange] = useState(new Date());
    const [selectedProduct, setSelectedProduct] = useState(null);
    const modalRef = useRef(null);

    const checkDayProducts = {
        '2024-03-09': {
            name: '상품명1',
            imageUrl: '상품1 이미지 URL',
            rentalDate: '2024-03-09',
        },
        '2024-03-02': {
            name: '상품명2',
            imageUrl: '상품2 이미지 URL',
            rentalDate: '2024-03-02',
        },
        // 다른 날짜와 상품 정보 추가
    };

    const dateColors = {
        '2024-03-09': '#13F287',
        '2024-03-02': '#A191DE',
        // 다른 날짜와 색상들 추가
    };

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setSelectedProduct(null);
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    const closeModal = () => {
        setSelectedProduct(null);
    };

    return (
        <div style={{ position: 'relative' }}>
            <Calendar
                onChange={onChange}
                value={value}
                calendarType="US"
                minDetail="month"
                maxDetail="month"
                showNeighboringMonth={false}
                formatDay={(locale, date) => moment(date).format('D')}
                formatYear={(locale, date) => moment(date).format('YYYY')}
                formatMonthYear={(locale, date) => moment(date).format('M월')}
                next2Label={null}
                prev2Label={null}
                tileContent={({ date }) => {
                    const dateString = moment(date).format('YYYY-MM-DD');
                    const isCheckDay = Object.keys(checkDayProducts).includes(dateString);
                    const dotColor = dateColors[dateString] || 'red';
                    return isCheckDay ? <div className="dot" style={{ backgroundColor: dotColor }} /> : null;
                }}
                tileClassName={({ date }) => {
                    const dateString = moment(date).format('YYYY-MM-DD');
                    return Object.keys(checkDayProducts).includes(dateString) ? 'clickable' : '';
                }}
                onClickDay={(value, event) => {
                    const dateString = moment(value).format('YYYY-MM-DD');
                    const product = checkDayProducts[dateString];
                    if (product) {
                        setSelectedProduct(product);
                    }
                }}
            />
            {selectedProduct && (
                <div
                    ref={modalRef}
                    className="modal-content"
                    style={{
                        position: 'absolute',
                        width: '300px',
                        height: 'auto',
                        borderRadius: '25px',
                        backgroundColor: '#DDDDDD',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        padding: '20px',
                        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)',
                    }}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                        <img
                            src={selectedProduct.imageUrl}
                            alt={selectedProduct.name}
                            style={{ maxWidth: '80px', marginRight: '20px' }}
                        />
                        <div>
                            <p>{moment(selectedProduct.rentalDate).format('DD일')}</p>
                            <p>{selectedProduct.name}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default DotCalendar;
