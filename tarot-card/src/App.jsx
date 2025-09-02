import { useState } from "react";
import deck from "./deck";

function App() {
  const [card, setCard] = useState(null);

  const drawCard = () => {
    const randomIndex = Math.floor(Math.random() * deck.length);
    setCard(deck[randomIndex]);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-purple-100 p-6">
      <h1 className="text-3xl font-bold mb-6">🔮 Random Tarot Card Generator</h1>

      <button
        onClick={drawCard}
        className="px-6 py-3 bg-purple-600 text-white rounded-2xl shadow-lg hover:bg-purple-700 transition"
      >
        Draw a Card
      </button>

      {/* ✅ Wrap in curly braces */}
      {card && (
        <div className="mt-6 p-6 rounded-2xl shadow-md max-w-md text-center border border-gray-600 bg-white">
          <h2 className="text-xl font-semibold">{card.name}</h2>
          <p className="mt-2 text-gray-700">{card.meaning}</p>
          <p className="mt-2 italic text-purple-700">✨ {card.message}</p>
        </div>
      )}
    </div>
  );
}

export default App;
