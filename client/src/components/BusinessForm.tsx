Sure, here's the contents for the file: /business-ai-recommendations/business-ai-recommendations/client/src/components/BusinessForm.tsx

import React, { useState } from 'react';

const BusinessForm: React.FC<{ onSubmit: (data: any) => void }> = ({ onSubmit }) => {
    const [businessName, setBusinessName] = useState('');
    const [email, setEmail] = useState('');
    const [industry, setIndustry] = useState('Restaurant');
    const [businessSize, setBusinessSize] = useState('1-10');
    const [annualRevenue, setAnnualRevenue] = useState('');
    const [customerDemographics, setCustomerDemographics] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!businessName || !email || !annualRevenue || !customerDemographics) {
            setError('Please fill in all fields.');
            return;
        }
        setError('');
        onSubmit({
            businessName,
            email,
            industry,
            businessSize,
            annualRevenue,
            customerDemographics,
        });
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 bg-white rounded shadow-md">
            <h2 className="text-lg font-bold mb-4">Business Information</h2>
            {error && <p className="text-red-500">{error}</p>}
            <div className="mb-4">
                <label className="block mb-2">Business Name</label>
                <input
                    type="text"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    className="border rounded w-full p-2"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block mb-2">Email</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border rounded w-full p-2"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block mb-2">Industry</label>
                <select
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                    className="border rounded w-full p-2"
                >
                    <option value="Restaurant">Restaurant</option>
                    <option value="E-commerce">E-commerce</option>
                    <option value="Other">Other</option>
                </select>
            </div>
            <div className="mb-4">
                <label className="block mb-2">Business Size</label>
                <select
                    value={businessSize}
                    onChange={(e) => setBusinessSize(e.target.value)}
                    className="border rounded w-full p-2"
                >
                    <option value="1-10">1-10</option>
                    <option value="11-50">11-50</option>
                    <option value="51+">51+</option>
                </select>
            </div>
            <div className="mb-4">
                <label className="block mb-2">Annual Revenue</label>
                <input
                    type="text"
                    value={annualRevenue}
                    onChange={(e) => setAnnualRevenue(e.target.value)}
                    className="border rounded w-full p-2"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block mb-2">Customer Demographics</label>
                <textarea
                    value={customerDemographics}
                    onChange={(e) => setCustomerDemographics(e.target.value)}
                    className="border rounded w-full p-2"
                    required
                />
            </div>
            <button type="submit" className="bg-blue-500 text-white rounded p-2">Submit</button>
        </form>
    );
};

export default BusinessForm;