import React, { useEffect, useState, useRef } from "react";
import eventsData from "../../data/Activities.json";

interface Event {
  date: string;
  title: string;
}

type CalendarProps = {
  className?: string;
};

const Calendar = ({ className }: CalendarProps) => {
  const [events, setEvents] = useState<Event[]>([]);
  const [currentMonth, setCurrentMonth] = useState<number>(
    new Date().getMonth()
  );
  const [currentYear, setCurrentYear] = useState<number>(
    new Date().getFullYear()
  );
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [popupPosition, setPopupPosition] = useState<{
    top: number;
    left: number;
  } | null>(null);

  const popupRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const currentMonthEvents = eventsData.filter((event) => {
      const eventDate = new Date(event.date);
      return (
        eventDate.getMonth() === currentMonth &&
        eventDate.getFullYear() === currentYear
      );
    });
    setEvents(currentMonthEvents);
  }, [currentMonth, currentYear]);

  const generateCalendar = () => {
    const firstDay = new Date(currentYear, currentMonth, 1);
    const lastDay = new Date(currentYear, currentMonth + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startDay = (firstDay.getDay() + 6) % 7;
    const weeks = [];
    let day = 1;

    for (let i = 0; i < 6; i++) {
      const week = [];
      for (let j = 0; j < 7; j++) {
        if ((i === 0 && j >= startDay) || (i > 0 && day <= daysInMonth)) {
          week.push(day);
          day++;
        } else {
          week.push(null); // Fyller på tomma dagar i början eller slutet av månaden
        }
      }
      weeks.push(week);
    }
    return weeks;
  };

  const handleMouseEnter = (date: number, e: React.MouseEvent) => {
    const hoveredDate = `${currentYear}-${String(currentMonth + 1).padStart(
      2,
      "0"
    )}-${String(date).padStart(2, "0")}`;

    const event = events.find((event) => event.date === hoveredDate);

    if (event) {
      setSelectedEvent(event);

      const rect =
        e.target instanceof Element
          ? e.target.getBoundingClientRect()
          : { top: 0, left: 0 };

      // Beräkna och justera positionen för popupen
      const popupTop = rect.top + 40;
      const popupLeft = rect.left + 10;

      const adjustedTop =
        popupTop + 300 > window.innerHeight ? rect.top - 300 : popupTop;
      const adjustedLeft =
        popupLeft + 200 > window.innerWidth ? rect.left - 200 : popupLeft;

      setPopupPosition({ top: adjustedTop, left: adjustedLeft });
    }
  };

  const handleMouseLeave = () => {
    setSelectedEvent(null);
    setPopupPosition(null);
  };

  const handlePreviousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const weeks = generateCalendar();

  return (
    <>
      <section className={`p-8 bg-gray-100 shadow-lg lg:rounded-2xl text-amber-900 ${className}`}>
        <div className="text-center p-4 lg:flex lg:items-center lg:justify-center lg:h-full">
          <div>
            <h1 className="text-4xl font-bold mb-14 text-amber-900">Kalender</h1>
            {/* Månadsnavigation */}
            <div className="flex justify-center items-center mb-8">
              <button
                onClick={handlePreviousMonth}
                className="text-xl text-blue-500 hover:text-blue-700 mr-4 cursor-pointer"
              >
                {"<"}
              </button>
              <span className="text-2xl font-semibold">
                {new Date(currentYear, currentMonth).toLocaleString("sv-SE", {
                  month: "long",
                  year: "numeric",
                })}
              </span>
              <button
                onClick={handleNextMonth}
                className="text-xl text-blue-500 hover:text-blue-700 ml-4 cursor-pointer"
              >
                {">"}
              </button>
            </div>

            {/* Kalendern */}
            <div className="grid grid-cols-7 gap-4 mb-8">
              {["Mån", "Tis", "Ons", "Tor", "Fre", "Lör", "Sön"].map(
                (day, index) => (
                  <div key={index} className="font-semibold">
                    {day}
                  </div>
                )
              )}
              {weeks.map((week, i) => (
                <React.Fragment key={i}>
                  {week.map((day, j) => (
                    <div
                      key={j}
                      onMouseEnter={(e) => day && handleMouseEnter(day, e)}
                      onMouseLeave={handleMouseLeave}
                      className={`calendar-date-cell cursor-pointer p-4 text-center rounded-lg border border-gray-300 ${
                        day &&
                        events.some(
                          (event) =>
                            event.date ===
                            `${currentYear}-${String(currentMonth + 1).padStart(
                              2,
                              "0"
                            )}-${String(day).padStart(2, "0")}`
                        )
                          ? "bg-blue-200 font-bold"
                          : ""
                      } ${
                        day && (j === 5 || j === 6)
                          ? "text-red-500"
                          : "text-gray-700"
                      }`}
                    >
                      {day}
                    </div>
                  ))}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Popup Dialog */}
      {selectedEvent && popupPosition && (
        <div
          ref={popupRef}
          className="fixed bg-white p-4 rounded-lg shadow-lg z-10"
          style={{
            top: `${popupPosition.top}px`,
            left: `${popupPosition.left}px`,
            width: "200px",
            zIndex: 1000,
          }}
        >
          <h2 className="text-lg font-semibold text-blue-800">
            {selectedEvent.title}
          </h2>
          <p className="text-sm text-gray-700">Datum: {selectedEvent.date}</p>
        </div>
      )}
    </>
  );
};

export default Calendar;
