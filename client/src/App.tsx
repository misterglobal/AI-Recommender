import React, { useState } from 'react';
import './App.css';
import BusinessForm from './components/BusinessForm';
import RecommendationList from './components/RecommendationList';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorMessage from './components/ErrorMessage';
import { fetchRecommendations } from './services/api';

const App: React.FC = () => {
  const [recommendations, setRecommendations] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleFormSubmit = async (formData: any) => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchRecommendations(formData);
      setRecommendations(data);
    } catch (err) {
      setError('Failed to fetch recommendations. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md p-4">
        <h1 className="text-2xl font-bold text-gray-800">
          Business AI Recommendations
        </h1>
      </header>
      <div className="container mx-auto p-4">
        <BusinessForm onSubmit={handleFormSubmit} />
        {loading && <LoadingSpinner />}
        {error && <ErrorMessage message={error} />}
        <RecommendationList recommendations={recommendations} />
      </div>
    </div>
  );
};

export default App;