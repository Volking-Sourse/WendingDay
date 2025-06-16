import React from "react";

const WeddingDateSection = () => {
  return (
    <section style={{ textAlign: "center", padding: "4rem 1rem" }}>
      {/* Заголовок */}
      <h3 className="text-2xl font-semibold text-pink-600 mb-2">Июль 2025</h3>

      {/* Контейнер картинки */}
      <div style={{
        display: "inline-block",
        backgroundColor: "#fff",
        padding: "1.5rem",
        borderRadius: "1rem",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        maxWidth: "320px"
      }}>
        <img
          src="/calendar.jpg" // Убедись, что файл лежит в public/
          alt="Календарь июля 2025"
          style={{
            width: "100%",
            maxHeight: "300px",
            objectFit: "contain",
            borderRadius: "1rem",
            border: "2px solid #ff4b6c",
            boxShadow: "0 0 10px rgba(255, 75, 108, 0.3)"
          }}
        />
      </div>

      {/* Подпись под календарём */}
      <p className="mt-6 text-lg font-medium text-pink-600">
        Мы ждём вас <strong>25 июля 2025 года</strong> в Нижнем Новгороде
      </p>
    </section>
  );
};

export default WeddingDateSection;