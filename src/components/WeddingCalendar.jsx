import React from "react";

const WeddingCalendar = () => {
  const daysOfWeek = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
  const daysInJuly = 31;
  const weddingDay = 25;

  // Начало июля 2025 — вторник (1 июля 2025 года — вторник)
  const firstDayOffset = 2; // 1 июля приходится на вторник → отступ на 2 дня

  return (
    <div style={{ textAlign: "center" }}>
      <svg width="300" height="300" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
        {/* Фон календаря */}
        <rect x="0" y="0" width="300" height="300" rx="20" ry="20" fill="#fff" stroke="#e2e8f0" strokeWidth="2" />

        {/* Месяц */}
        <text x="150" y="40" fontSize="20" fontWeight="bold" textAnchor="middle" fill="#764ba2">июль 2025</text>

        {/* Заголовки дней недели */}
        {daysOfWeek.map((day, i) => (
          <text key={i} x={40 + i * 35} y="70" fontSize="14" textAnchor="middle" fill="#666">
            {day}
          </text>
        ))}

        {/* Дни месяца */}
        {Array.from({ length: daysInJuly }, (_, i) => {
          const day = i + 1;
          const row = Math.floor((i + firstDayOffset) / 7);
          const col = (i + firstDayOffset) % 7;
          const isWeddingDay = day === weddingDay;

          return (
            <g key={i}>
              <circle cx={40 + col * 35} cy={100 + row * 35} r="12" fill={isWeddingDay ? "#ffe6ec" : "#f8f8f8"} stroke={isWeddingDay ? "#e95a8f" : "#ddd"} strokeWidth="1" />
              <text
                x={40 + col * 35}
                y={100 + row * 35}
                fontSize="12"
                textAnchor="middle"
                dominantBaseline="middle"
                fontWeight={isWeddingDay ? "bold" : "normal"}
                fill={isWeddingDay ? "#d94f8a" : "#333"}
              >
                {day}
              </text>
              {isWeddingDay && (
                <text x={40 + col * 35} y={100 + row * 35 - 18} fontSize="16" textAnchor="middle" fill="#ff4b6c">
                  ❤️
                </text>
              )}
            </g>
          );
        })}
      </svg>

      {/* Подпись под календарем */}
      <p className="mt-4 text-lg font-medium text-pink-600">
        Мы ждём вас <strong>25 июля 2025 года</strong> в Нижнем Новгороде
      </p>
    </div>
  );
};

export default WeddingCalendar;