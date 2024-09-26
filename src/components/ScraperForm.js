import React, { useState } from 'react';

const ScraperForm = ({ onSubmit }) => {
  const [keyword, setKeyword] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send the keyword and date range back to the parent component
    onSubmit({ keyword, startDate, endDate });
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '300px', margin: 'auto' }}>
      <h2>Google Review Scraper</h2>
      
      {/* Keyword Input */}
      <label>Keyword:</label>
      <input
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Enter keyword (e.g., 'cake shop')"
        required
      />

      {/* Time Range Input */}
      <label>Start Date:</label>
      <input
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        required
      />

      <label>End Date:</label>
      <input
        type="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
        required
      />

      {/* Submit Button */}
      <button type="submit" style={{ marginTop: '20px', padding: '10px', background: 'blue', color: 'white', border: 'none', cursor: 'pointer' }}>
        Start Scraping
      </button>
    </form>
  );
};

export default ScraperForm;