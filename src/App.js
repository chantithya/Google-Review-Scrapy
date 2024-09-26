import React, { useState } from 'react';
import './App.css';

function App() {
  const [keyword, setKeyword] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // You can use this data to trigger your scraping function
    console.log("Keyword:", keyword);
    console.log("Start Date:", startDate);
    console.log("End Date:", endDate);

    // Reset form fields
    setKeyword('');
    setStartDate('');
    setEndDate('');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Google Review Scraper</h1>
        <p className="description">Input a keyword and time range to scrape Google reviews.</p>
        
        <form onSubmit={handleSubmit} className="scraper-form">
          {/* Keyword Input */}
          <div className="form-group">
            <label htmlFor="keyword">Keyword</label>
            <input
              type="text"
              id="keyword"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="Enter keyword (e.g., 'cake shop')"
              required
              className="form-input"
            />
          </div>

          {/* Start Date Input */}
          <div className="form-group">
            <label htmlFor="startDate">Start Date</label>
            <input
              type="date"
              id="startDate"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              required
              className="form-input"
            />
          </div>

          {/* End Date Input */}
          <div className="form-group">
            <label htmlFor="endDate">End Date</label>
            <input
              type="date"
              id="endDate"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              required
              className="form-input"
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="submit-btn">Start Scraping</button>
        </form>
      </header>
    </div>
  );
}

export default App;
