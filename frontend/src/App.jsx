import { useState } from 'react';
import { useBusinessStore } from './store/businessStore';
import BusinessForm from './components/BusinessForm';
import BusinessCard from './components/BusinessCard';

function App() {
  const [loading, setLoading] = useState(false);
  const { data, setBusinessData } = useBusinessStore();

  const handleFormSubmit = async (name, location) => {
    if (!name || !location) return alert('Please enter both fields');
    try {
      setLoading(true);
      const res = await fetch('http://localhost:5000/business-data', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, location })
      });
      const json = await res.json();
      setBusinessData({ ...json, name, location });
    } catch (err) {
      console.error('Fetch failed:', err);
    } finally {
      setLoading(false);
    }
  };

  const regenerateHeadline = async () => {
    if (!data?.name || !data?.location) return;
    try {
      setLoading(true);
      const res = await fetch(
        `http://localhost:5000/regenerate-headline?name=${data.name}&location=${data.location}`
      );
      const json = await res.json();
      setBusinessData({ ...data, headline: json.headline });
    } catch (err) {
      console.error('Regeneration failed:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 to-purple-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-xl space-y-6">
        <h1 className="text-2xl font-bold text-center text-gray-800 flex items-center justify-center gap-2">
          <img src="https://img.icons8.com/color/48/graph.png" className="h-8" alt="logo" />
          Local Business Dashboard
        </h1>
        <BusinessForm onSubmit={handleFormSubmit} loading={loading} />
        {loading ? (
          <div className="flex justify-center">
            <div className="w-8 h-8 border-4 border-blue-300 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          data && <BusinessCard data={data} onRegenerate={regenerateHeadline} />
        )}
      </div>
    </div>
  );
}

export default App;