import { useState } from "react";

const Education = () => {
  // Plant Growth Tracker State
  const [plants, setPlants] = useState<{ name: string; growthStage: string }[]>([]);
  const [newPlant, setNewPlant] = useState("");

  const addPlant = () => {
    if (newPlant.trim()) {
      setPlants([...plants, { name: newPlant, growthStage: "Seedling" }]);
      setNewPlant("");
    }
  };

  const updateGrowth = (index: number) => {
    const updatedPlants = plants.map((plant, i) =>
      i === index ? { ...plant, growthStage: "Grown Plant 🌱" } : plant
    );
    setPlants(updatedPlants);
  };

  return (
    <main className="min-h-screen bg-gray-100">
      <header className="bg-green-700 text-white p-6">
        <h1 className="text-3xl font-bold">Engage & Educate</h1>
        <p className="text-lg mt-2">Learn to care for plants and track their growth!</p>
      </header>

      {/* Plant Care Tips Section */}
      <section className="p-6 bg-green-50">
        <h2 className="text-2xl font-bold text-green-800 mb-4">Plant Care Tips</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Watering", description: "Water plants early in the morning to prevent evaporation." },
            { title: "Sunlight", description: "Place plants in spots that get adequate sunlight." },
            { title: "Fertilizer", description: "Use organic fertilizers for better soil health." },
          ].map((tip, index) => (
            <div key={index} className="p-4 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-green-700">{tip.title}</h3>
              <p className="text-gray-600 mt-2">{tip.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Plant Growth Tracker Section */}
      <section className="p-6 bg-green-100">
        <h2 className="text-2xl font-bold text-green-800 mb-4">Plant Growth Tracker</h2>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Enter plant name"
            className="p-2 border rounded-l-md"
            value={newPlant}
            onChange={(e) => setNewPlant(e.target.value)}
          />
          <button
            className="p-2 bg-green-600 text-white rounded-r-md"
            onClick={addPlant}
          >
            Add Plant
          </button>
        </div>
        <ul>
          {plants.map((plant, index) => (
            <li key={index} className="flex items-center justify-between bg-white p-4 mb-2 rounded-md shadow">
              <span className="text-green-700 font-semibold">
                {plant.name} - {plant.growthStage}
              </span>
              <button
                className="text-sm bg-green-500 text-white py-1 px-2 rounded"
                onClick={() => updateGrowth(index)}
              >
                Update Growth
              </button>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default Education;
