import { useState, useEffect } from 'react';

interface TimeSlot {
  time: string;
  available: boolean;
}

interface DayData {
  date: string;
  dayOfWeek: string;
  slots: TimeSlot[];
}

// モックデータ（実際はAPI経由で取得）
const generateMockData = (): DayData[] => {
  const days = ['日', '月', '火', '水', '木', '金', '土'];
  const result: DayData[] = [];
  const today = new Date();

  for (let i = 0; i < 7; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);

    const slots: TimeSlot[] = [];
    // オンライン相談は10:00〜21:00（1時間刻み）
    for (let hour = 10; hour <= 21; hour++) {
      slots.push({
        time: `${hour}:00`,
        available: Math.random() > 0.35,
      });
    }

    result.push({
      date: `${date.getMonth() + 1}/${date.getDate()}`,
      dayOfWeek: days[date.getDay()],
      slots,
    });
  }

  return result;
};

export default function BookingWidget() {
  const [weekData, setWeekData] = useState<DayData[] | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<{ day: number; time: string } | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setWeekData(generateMockData());
      setIsLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  const handleSlotClick = (dayIndex: number, time: string, available: boolean) => {
    if (!available) return;
    setSelectedSlot({ day: dayIndex, time });
  };

  return (
    <div className="booking-widget">
      <div className="widget-header">
        <div className="header-top">
          <span className="widget-tag">ONLINE CONSULTATION</span>
          <span className="widget-status">
            <span className="status-dot"></span>
            リアルタイム更新
          </span>
        </div>
        <h3 className="widget-title">オンライン相談 空き状況</h3>
        <p className="widget-desc">LINE通話・Zoom・Google Meetで気軽にご相談</p>
      </div>

      {isLoading ? (
        <div className="skeleton-container">
          {[...Array(7)].map((_, i) => (
            <div key={i} className="skeleton-day">
              <div className="skeleton-header"></div>
              <div className="skeleton-slots">
                {[...Array(6)].map((_, j) => (
                  <div key={j} className="skeleton-slot"></div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="calendar-grid">
          {weekData?.map((day, dayIndex) => (
            <div key={dayIndex} className="day-column">
              <div className={`day-header ${day.dayOfWeek === '土' ? 'saturday' : ''} ${day.dayOfWeek === '日' ? 'sunday' : ''}`}>
                <span className="day-date">{day.date}</span>
                <span className="day-name">{day.dayOfWeek}</span>
              </div>
              <div className="slots-container">
                {day.slots.map((slot, slotIndex) => (
                  <button
                    key={slotIndex}
                    className={`slot-btn ${slot.available ? 'available' : 'unavailable'} ${
                      selectedSlot?.day === dayIndex && selectedSlot?.time === slot.time ? 'selected' : ''
                    }`}
                    onClick={() => handleSlotClick(dayIndex, slot.time, slot.available)}
                    disabled={!slot.available}
                    title={slot.time}
                  >
                    {slot.available ? '○' : '−'}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="time-legend">
        <span className="time-label-start">10:00</span>
        <span className="time-label-mid">15:00</span>
        <span className="time-label-end">21:00</span>
      </div>

      {selectedSlot && weekData && (
        <div className="selected-info">
          <div className="selected-left">
            <span className="selected-label">選択中</span>
            <span className="selected-date">
              {weekData[selectedSlot.day].date}（{weekData[selectedSlot.day].dayOfWeek}）{selectedSlot.time}〜
            </span>
          </div>
          <a href="#contact" className="book-btn">
            予約する →
          </a>
        </div>
      )}

      <div className="legend">
        <span className="legend-item"><span className="legend-dot available"></span>空き</span>
        <span className="legend-item"><span className="legend-dot unavailable"></span>予約済</span>
      </div>

      <div className="tools-info">
        <span className="tool-icon">📹</span>
        <span className="tool-text">LINE / Zoom / Google Meet 対応</span>
      </div>

      <style>{`
        .booking-widget {
          background: #fff;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 1.5rem;
          font-family: 'Noto Sans JP', sans-serif;
        }

        .widget-header {
          margin-bottom: 1.5rem;
        }

        .header-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.75rem;
        }

        .widget-tag {
          font-family: 'Space Grotesk', monospace;
          font-size: 0.6rem;
          color: #007aff;
          letter-spacing: 0.12em;
          background: rgba(0, 122, 255, 0.1);
          padding: 0.25rem 0.5rem;
          border-radius: 4px;
        }

        .widget-title {
          font-family: 'Zen Old Mincho', serif;
          font-size: 1.2rem;
          font-weight: 700;
          margin: 0 0 0.25rem 0;
          color: #0f172a;
        }

        .widget-desc {
          font-size: 0.75rem;
          color: #64748b;
          margin: 0;
        }

        .widget-status {
          font-size: 0.6rem;
          color: #64748b;
          display: flex;
          align-items: center;
          gap: 0.375rem;
        }

        .status-dot {
          width: 6px;
          height: 6px;
          background: #34d399;
          border-radius: 50%;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        .skeleton-container {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 0.375rem;
        }

        .skeleton-day {
          display: flex;
          flex-direction: column;
          gap: 0.375rem;
        }

        .skeleton-header {
          height: 44px;
          background: linear-gradient(90deg, #f1f5f9 25%, #e2e8f0 50%, #f1f5f9 75%);
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
          border-radius: 6px;
        }

        .skeleton-slots {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .skeleton-slot {
          height: 20px;
          background: linear-gradient(90deg, #f1f5f9 25%, #e2e8f0 50%, #f1f5f9 75%);
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
          border-radius: 3px;
        }

        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }

        .calendar-grid {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 0.25rem;
        }

        .day-column {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .day-header {
          text-align: center;
          padding: 0.5rem 0.125rem;
          background: #f8fafc;
          border-radius: 6px;
        }

        .day-header.saturday {
          background: rgba(59, 130, 246, 0.1);
        }

        .day-header.sunday {
          background: rgba(239, 68, 68, 0.1);
        }

        .day-date {
          display: block;
          font-family: 'Space Grotesk', monospace;
          font-size: 0.75rem;
          font-weight: 600;
          color: #0f172a;
        }

        .day-name {
          font-size: 0.6rem;
          color: #64748b;
        }

        .day-header.saturday .day-name {
          color: #3b82f6;
        }

        .day-header.sunday .day-name {
          color: #ef4444;
        }

        .slots-container {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .slot-btn {
          padding: 0.25rem;
          border: 1px solid #e2e8f0;
          border-radius: 3px;
          font-size: 0.65rem;
          cursor: pointer;
          transition: all 0.15s;
          background: #fff;
          line-height: 1;
        }

        .slot-btn.available {
          color: #34d399;
          border-color: #d1fae5;
        }

        .slot-btn.available:hover {
          background: #d1fae5;
          border-color: #34d399;
          transform: scale(1.05);
        }

        .slot-btn.unavailable {
          color: #cbd5e1;
          background: #f8fafc;
          cursor: not-allowed;
          font-size: 0.5rem;
        }

        .slot-btn.selected {
          background: #007aff;
          color: #fff;
          border-color: #007aff;
          transform: scale(1.1);
        }

        .time-legend {
          display: flex;
          justify-content: space-between;
          margin-top: 0.5rem;
          padding-top: 0.5rem;
          border-top: 1px solid #e2e8f0;
        }

        .time-label-start,
        .time-label-mid,
        .time-label-end {
          font-family: 'Fira Code', monospace;
          font-size: 0.55rem;
          color: #94a3b8;
        }

        .selected-info {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 1rem;
          padding: 0.875rem 1rem;
          background: rgba(0, 122, 255, 0.05);
          border: 1px solid rgba(0, 122, 255, 0.2);
          border-radius: 8px;
        }

        .selected-left {
          display: flex;
          flex-direction: column;
          gap: 0.125rem;
        }

        .selected-label {
          font-size: 0.6rem;
          color: #007aff;
          font-weight: 500;
        }

        .selected-date {
          font-size: 0.9rem;
          font-weight: 600;
          color: #0f172a;
        }

        .book-btn {
          background: #007aff;
          color: #fff;
          padding: 0.5rem 1rem;
          border-radius: 6px;
          font-size: 0.8rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.2s;
        }

        .book-btn:hover {
          background: #0066dd;
          transform: translateY(-1px);
        }

        .legend {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
          justify-content: center;
        }

        .legend-item {
          display: flex;
          align-items: center;
          gap: 0.375rem;
          font-size: 0.65rem;
          color: #64748b;
        }

        .legend-dot {
          width: 10px;
          height: 10px;
          border-radius: 2px;
        }

        .legend-dot.available {
          background: #d1fae5;
          border: 1px solid #34d399;
        }

        .legend-dot.unavailable {
          background: #f1f5f9;
          border: 1px solid #cbd5e1;
        }

        .tools-info {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          margin-top: 1rem;
          padding-top: 1rem;
          border-top: 1px dashed #e2e8f0;
        }

        .tool-icon {
          font-size: 1rem;
        }

        .tool-text {
          font-size: 0.7rem;
          color: #64748b;
        }
      `}</style>
    </div>
  );
}
