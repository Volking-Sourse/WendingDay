import React from "react";

const WeddingDateSection = () => {
  const daysOfWeek = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
  const daysInJuly = 31;
  const weddingDay = 25;

  // 1 июля 2025 — вторник → отступ на 2 дня
  const firstDayOffset = 2;

  return (
    <section style={{ textAlign: "center", padding: "4rem 1rem" }}>
      <h2 className="text-3xl font-semibold text-pink-600 mb-4">Дата свадьбы</h2>
      <p className="text-lg text-gray-700 mb-6">июль 2025</p>

      {/* SVG календарь */}
      <div style={{
        display: "inline-block",
        backgroundColor: "#fff",
        padding: "1.5rem",
        borderRadius: "1rem",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        maxWidth: "320px"
      }}>
        <svg width="300" height="300" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
          {/* Фон календаря */}
          <rect x="0" y="0" width="300" height="300" rx="16" ry="16" fill="#fff" stroke="#e2e8f0" strokeWidth="2" />

          {/* Месяц */}
          <text x="150" y="40" fontSize="20" fontWeight="bold" textAnchor="middle" fill="#d94f8a">
            июль 2025
          </text>

          {/* Дни недели */}
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
                {isWeddingDay && (
                  <>
                    {/* Внешнее кольцо вокруг дня свадьбы */}
                    <circle cx={40 + col * 35} cy={100 + row * 35} r="20" fill="#ffe6ec" stroke="#e95a8f" strokeWidth="2" />
                  </>
                )}

                {/* День */}
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
              </g>
            );
          })}
        </svg>
      </div>

      {/* Подпись под календарём */}
      <p className="mt-6 text-lg font-medium text-pink-600">
        Мы ждём вас <strong>25 июля 2025 года</strong> в Нижнем Новгороде
      </p>
    </section>
  );
};

export default WeddingDateSection;