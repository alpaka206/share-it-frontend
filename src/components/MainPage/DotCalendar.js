import React, { useState } from 'react';
import Calendar from 'react-calendar';
import '../../css/DotCalendar.css';
import moment from 'moment';

function DotCalendar() {
    const [value, onChange] = useState(new Date());

    const checkDay = ['2024-03-09', '2024-03-02'];

    const dateColors = {
        '2024-03-09': '#13F287', // 예시 날짜와 색상
        '2024-03-02': '#A191DE', // 예시 날짜와 색상
        // 다른 날짜와 색상들 추가
    };

    return (
        <div>
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
                tileContent={({ date, view }) => {
                    const dateString = moment(date).format('YYYY-MM-DD');
                    const isCheckDay = checkDay.includes(dateString);
                    const dotColor = dateColors[dateString] || 'red'; // 기본 색상은 red로 설정

                    return isCheckDay ? <div className="dot" style={{ backgroundColor: dotColor }} /> : null;
                }}
            />
        </div>
    );
}

export default DotCalendar;
