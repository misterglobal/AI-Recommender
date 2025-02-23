import React from 'react';

interface RecommendationListProps {
    recommendations: string[];
}

const RecommendationList: React.FC<RecommendationListProps> = ({ recommendations }) => {
    return (
        <div className="recommendation-list">
            <h2 className="text-lg font-bold">AI Recommendations</h2>
            <ul className="list-disc pl-5">
                {recommendations.map((recommendation, index) => (
                    <li key={index} className="mb-2">{recommendation}</li>
                ))}
            </ul>
        </div>
    );
};

export default RecommendationList;