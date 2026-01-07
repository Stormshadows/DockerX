import { useEffect, useState } from 'react';

function App() {
  const [containers, setContainers] = useState([]);

  const fetchContainers = async () => {
    const res = await fetch('http://localhost:8000/containers');
    const data = await res.json();
    setContainers(data);
  };

  const controlContainer = async (id, action) => {
    await fetch(`http://localhost:8000/container/${id}/${action}`, { method: 'POST' });
    fetchContainers();
  };

  useEffect(() => {
    fetchContainers();
    const interval = setInterval(fetchContainers, 5000); // auto-refresh
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Docker Dashboard</h1>
      <table className="min-w-full border">
        <thead>
          <tr className="border-b">
            <th className="px-4 py-2 text-left align-middle">ID</th>
            <th className="px-4 py-2 text-left align-middle">Name</th>
            <th className="px-4 py-2 text-left align-middle">Status</th>
            <th className="px-4 py-2 text-center align-middle">Actions</th>
          </tr>
        </thead>
        <tbody>
          {containers.map(c => (
            <tr key={c.id} className="border-b">
              <td className="px-4 py-2 align-middle" style={{ verticalAlign: "middle" }}>{c.id}</td>
              <td className="px-4 py-2 align-middle" style={{ verticalAlign: "middle" }}>{c.name}</td>
              <td className="px-4 py-2 align-middle" style={{ verticalAlign: "middle" }}>{c.status}</td>
              <td className="px-4 py-2 text-center align-middle" style={{ verticalAlign: "middle" }}>
                <div className="inline-flex gap-2 justify-center items-center">
                  <button className="bg-green-500 text-white px-2 py-1 rounded" onClick={() => controlContainer(c.id, 'start')}>Start</button>
                  <button className="bg-red-500 text-white px-2 py-1 rounded" onClick={() => controlContainer(c.id, 'stop')}>Stop</button>
                  <button className="bg-blue-500 text-white px-2 py-1 rounded" onClick={() => controlContainer(c.id, 'restart')}>Restart</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;