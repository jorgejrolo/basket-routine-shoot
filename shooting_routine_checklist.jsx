import { useState } from "react";

const exercises = [
  { id: 1, text: "Rodilla alta – 10 conversiones por lado" },
  { id: 2, text: "Balance medio giro – 10 conversiones" },
  { id: 3, text: "Balance doble finta – 5 conversiones cada lado" },
  { id: 4, text: "Balance caída a un lado – 5 conversiones cada lado" },
  { id: 5, text: "Cambio de lado – repetir anteriores al otro lado" },
  { id: 6, text: "Balance 1 tiempo – 10 conversiones cada lado" },
  { id: 7, text: "Balance stop salto – 15 conversiones" },
  { id: 8, text: "Balance balón sorpresa – 15 conversiones" },
  { id: 9, text: "Punkeo (3 posiciones) – 10 conversiones por spot" },
];

export default function ShootingRoutine() {
  const [checked, setChecked] = useState([]);

  const toggleCheck = (id) => {
    setChecked((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">🏀 Rutina de Tiro</h1>
      <div className="w-full max-w-md space-y-4">
        {exercises.map((exercise) => (
          <label
            key={exercise.id}
            className="flex items-center space-x-3 bg-gray-800 p-4 rounded-2xl shadow-md cursor-pointer hover:bg-gray-700 transition"
          >
            <input
              type="checkbox"
              checked={checked.includes(exercise.id)}
              onChange={() => toggleCheck(exercise.id)}
              className="w-5 h-5 text-green-500 focus:ring-green-400 rounded"
            />
            <span
              className={`$ {
                checked.includes(exercise.id)
                  ? "line-through text-gray-400"
                  : "text-white"
              }`}
            >
              {exercise.text}
            </span>
          </label>
        ))}
      </div>
      <button
        onClick={() => setChecked([])}
        className="mt-6 px-6 py-2 bg-green-500 text-black font-semibold rounded-xl shadow hover:bg-green-400 transition"
      >
        Resetear Checklist
      </button>
    </div>
  );
}
