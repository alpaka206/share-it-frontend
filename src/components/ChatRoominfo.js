import React, { Fragment, useRef, useState } from "react";
import "../css/ChatRoominfo.css";

const ChatRoominfo = ({ stompClient, chatHistory, setChatHistory }) => {
  const [makeDeal, setMakeDeal] = useState(false);
  const [rentalDate, setRentalDate] = useState({
    year: "",
    month: "",
    day: "",
    hour: "",
    minute: "",
  });

  const [returnDate, setReturnDate] = useState({
    year: "",
    month: "",
    day: "",
    hour: "",
    minute: "",
  });

  const rentalYearRef = useRef(null);
  const rentalMonthRef = useRef(null);
  const rentalDayRef = useRef(null);
  const rentalHourRef = useRef(null);
  const rentalMinuteRef = useRef(null);

  const returnYearRef = useRef(null);
  const returnMonthRef = useRef(null);
  const returnDayRef = useRef(null);
  const returnHourRef = useRef(null);
  const returnMinuteRef = useRef(null);

  const handleInputChange = (
    event,
    setDate,
    nextRef,
    maxLength,
    maxValue,
    minValue = 0
  ) => {
    const { name, value } = event.target;
    if (
      value === "" ||
      (/^\d+$/.test(value) &&
        (!maxValue ||
          (parseInt(value) >= minValue && parseInt(value) <= maxValue)))
    ) {
      setDate((prevState) => ({
        ...prevState,
        [name]: value,
      }));
      if (nextRef && value.length >= maxLength) {
        nextRef.current.focus();
      }
    }
  };

  const handleDeal = () => {
    const rental = new Date(
      rentalDate.year,
      rentalDate.month - 1,
      rentalDate.day,
      rentalDate.hour,
      rentalDate.minute
    );
    const returnD = new Date(
      returnDate.year,
      returnDate.month - 1,
      returnDate.day,
      returnDate.hour,
      returnDate.minute
    );

    if (
      isNaN(rental.getTime()) ||
      isNaN(returnD.getTime()) ||
      returnD <= rental
    ) {
      alert("대여 및 반납 일자를 올바르게 설정해주세요.");
      return;
    }
    if (stompClient && stompClient.connected) {
      const messageData = {
        roomId: chatHistory.roomId,
        senderId: chatHistory.userId,
        purchaseId: 1,
        startDate: rental,
        endDate: returnD,
        sendTime: new Date().toISOString(),
      };

      stompClient.publish({
        destination: `/pub/chat/purchase`,
        body: JSON.stringify(messageData),
      });

      stompClient.subscribe(
        `/pub/chat/purchase${chatHistory.roomId}`,
        (message) => {
          const response = JSON.parse(message.body);
          // 응답을 받아와서 chatHistory의 messages에 추가
          setChatHistory((prev) => ({
            ...prev,
            messages: [...prev.messages, response],
          }));
        }
      );
    }
  };

  return (
    <Fragment>
      <div className="ChatRoominfo">
        <div className="ChatRoominfo-Info-Container">
          <div className="ChatRoominfo-img">
            <img
              src={process.env.PUBLIC_URL + `assets/mypage.svg`}
              alt="Item"
            />
          </div>
          <div className="ChatRoominfo-textinfo">
            <div className="ChatRoominfo-username">winterizcoming</div>
            <div className="ChatRoominfo-itemname">매직 마우스</div>
          </div>
        </div>
        <div className="ChatRoominfo-button-Container">
          <button className="ChatRoominfo-complete-button" type="button">
            <img src={process.env.PUBLIC_URL + `assets/check.svg`} alt="Item" />{" "}
            거래완료
          </button>
          <button
            className="ChatRoominfo-plan-button"
            type="button"
            onClick={() => setMakeDeal(true)}
          >
            <img
              src={process.env.PUBLIC_URL + `assets/calendar.svg`}
              alt="Item"
            />
            약속잡기
          </button>
        </div>
      </div>
      {makeDeal && (
        <div className="chatRoominfo-overlay">
          <div className="chatRoominfo-overlay-content">
            <div className="chatRoominfo-overlay-date">
              <div className="chatRoominfo-overlay-date-text">대여일</div>
              <div className="chatRoominfo-overlay-date-day">
                <input
                  type="text"
                  name="year"
                  placeholder="-"
                  value={rentalDate.year}
                  maxLength={4}
                  onChange={(e) =>
                    handleInputChange(e, setRentalDate, rentalMonthRef, 4)
                  }
                  ref={rentalYearRef}
                />
                년
                <input
                  type="text"
                  name="month"
                  placeholder="-"
                  value={rentalDate.month}
                  maxLength={2}
                  onChange={(e) =>
                    handleInputChange(e, setRentalDate, rentalDayRef, 2, 12, 1)
                  }
                  ref={rentalMonthRef}
                />
                월
                <input
                  type="text"
                  name="day"
                  placeholder="-"
                  value={rentalDate.day}
                  maxLength={2}
                  onChange={(e) =>
                    handleInputChange(e, setRentalDate, rentalHourRef, 2, 31, 1)
                  }
                  ref={rentalDayRef}
                />
                일
              </div>
              <div className="chatRoominfo-overlay-date-time">
                <input
                  type="text"
                  name="hour"
                  placeholder="-"
                  value={rentalDate.hour}
                  maxLength={2}
                  onChange={(e) =>
                    handleInputChange(
                      e,
                      setRentalDate,
                      rentalMinuteRef,
                      2,
                      23,
                      0
                    )
                  }
                  ref={rentalHourRef}
                />
                :
                <input
                  type="text"
                  name="minute"
                  placeholder="-"
                  value={rentalDate.minute}
                  maxLength={2}
                  onChange={(e) =>
                    handleInputChange(e, setRentalDate, null, 2, 59, 0)
                  }
                  ref={rentalMinuteRef}
                />
              </div>
            </div>
            <div className="chatRoominfo-overlay-date">
              <div className="chatRoominfo-overlay-date-text">반납일</div>
              <div className="chatRoominfo-overlay-date-day">
                <input
                  type="text"
                  name="year"
                  placeholder="-"
                  value={returnDate.year}
                  maxLength={4}
                  onChange={(e) =>
                    handleInputChange(e, setReturnDate, returnMonthRef, 4)
                  }
                  ref={returnYearRef}
                />
                년
                <input
                  type="text"
                  name="month"
                  placeholder="-"
                  value={returnDate.month}
                  maxLength={2}
                  onChange={(e) =>
                    handleInputChange(e, setReturnDate, returnDayRef, 2, 12, 1)
                  }
                  ref={returnMonthRef}
                />
                월
                <input
                  type="text"
                  name="day"
                  placeholder="-"
                  value={returnDate.day}
                  maxLength={2}
                  onChange={(e) =>
                    handleInputChange(e, setReturnDate, returnHourRef, 2, 31, 1)
                  }
                  ref={returnDayRef}
                />
                일
              </div>
              <div className="chatRoominfo-overlay-date-time">
                <input
                  type="text"
                  name="hour"
                  placeholder="-"
                  value={returnDate.hour}
                  maxLength={2}
                  onChange={(e) =>
                    handleInputChange(
                      e,
                      setReturnDate,
                      returnMinuteRef,
                      2,
                      23,
                      0
                    )
                  }
                  ref={returnHourRef}
                />
                :
                <input
                  type="text"
                  name="minute"
                  placeholder="-"
                  value={returnDate.minute}
                  maxLength={2}
                  onChange={(e) =>
                    handleInputChange(e, setReturnDate, null, 2, 59, 0)
                  }
                  ref={returnMinuteRef}
                />
              </div>
            </div>
          </div>
          <div className="chatRoominfo-overlay-button">
            <button
              type="button"
              onClick={() => setMakeDeal(false)}
              className="chatRoominfo-overlay-cancel-button"
            >
              취소
            </button>
            <button
              type="button"
              onClick={() => handleDeal()}
              className="chatRoominfo-overlay-submit-button"
            >
              보내기
            </button>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default ChatRoominfo;
