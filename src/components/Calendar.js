// Calendar.js
import React, { useState } from 'react';
import '../css/Calendar.css';

const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];

const Calendar = () => {
    const [currentDate, setCurrentDate] = useState(new Date());

    const goToNextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
    };

    const goToPrevMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    };

    const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
    const startDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();

    const renderDays = () => {
        const days = [];
        for (let i = 0; i < startDay; i++) {
            days.push(<div key={`empty-${i}`} className="empty"></div>);
        }
        for (let i = 1; i <= daysInMonth; i++) {
            const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), i);
            days.push(<Day key={i} date={date} />);
        }
        return days;
    };

    return (
        <div className="calendar">
            <div className="header">
                <button onClick={goToPrevMonth}>&lt;</button>
                <div className="month">{currentDate.getMonth() + 1}월</div>
                <button onClick={goToNextMonth}>&gt;</button>
            </div>
            <div className="days-of-week">
                {daysOfWeek.map((day, index) => (
                    <div key={index} className="day-of-week">
                        {day}
                    </div>
                ))}
            </div>
            <div className="days">{renderDays()}</div>
        </div>
    );
};

const Day = ({ date }) => {
    const [selected, setSelected] = useState(false);

    const handleClick = () => {
        setSelected(true);
    };

    return (
        <div className={`day ${selected ? 'selected' : ''}`} onClick={handleClick}>
            {date.getDate()}
        </div>
    );
};

export default Calendar;
