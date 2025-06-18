import React from 'react';

const RequestServicePage = () => {
  return (
    <div className="form-container">
      <h2>Request a Service</h2>
      <form>
        <input type="text" placeholder="Problem description" required />
        <input type="text" placeholder="Your location" required />
        <button type="submit">Submit Request</button>
      </form>
    </div>
  );
};

export default RequestServicePage;
