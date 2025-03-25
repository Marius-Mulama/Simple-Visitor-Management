import React, { useState, useEffect } from 'react';
import axios from "axios";

const VisitorList = () => {
  const [visitors, setVisitors] = useState([]);

  useEffect(() => {
    const fetchVisitors = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/visitors"); // Replace with your backend endpoint
        setVisitors(response.data);
      } catch (error) {
        console.error('Error fetching visitors data:', error);
      }
    };

    fetchVisitors();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Visitors</h2>
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Nationality</th>
            <th className="py-2 px-4 border-b">ID Number</th>
            <th className="py-2 px-4 border-b">Purpose of Visit</th>
            <th className="py-2 px-4 border-b">Date of Visit</th>
            <th className="py-2 px-4 border-b">Time of Visit</th>
          </tr>
        </thead>
        <tbody>
          {visitors.map(visitor => (
            <tr key={visitor.id}>
              <td className="py-2 px-4 border-b">{visitor.name}</td>
              <td className="py-2 px-4 border-b">{visitor.nationality}</td>
              <td className="py-2 px-4 border-b">{visitor.idNumber}</td>
              <td className="py-2 px-4 border-b">{visitor.purposeOfVisit}</td>
              <td className="py-2 px-4 border-b">{visitor.dateOfVisit}</td>
              <td className="py-2 px-4 border-b">{visitor.timeOfVisit}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VisitorList;
