import React, { useState } from 'react';
import { FormData } from '../types';
import { fetchRecommendations } from '../services/api';

export const RecommendationForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    businessType: '',
    size: 0,
    revenue: 0,
    demographics: []
  });
  const [recommendations, setRecommendations] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const data = await fetchRecommendations(formData);
      setRecommendations(data);
    } catch (err) {
      setError('Failed to fetch recommendations');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Business Type
          <input
            type="text"
            value={formData.businessType}
            onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          />
        </label>
      </div>
      {/* Add other form fields here */}
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Get Recommendations
      </button>
      {error && <div className="text-red-500">{error}</div>}
    </form>
  );
};