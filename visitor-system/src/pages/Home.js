import React, { useEffect, useState } from 'react';
import AddVisitor from '../components/AddVisitor';
import VisitorList from '../components/VisitorList';
import axios from 'axios';

const Home = () => {
  const [visitors, setVisitors] = useState([]);

  useEffect(() => {
    axios.get('/api/visitors')
      .then((response) => {
        setVisitors(response.data);
      })
      .catch((error) => {
        console.error('Error fetching visitors:', error);
      });
  }, []);

  const addVisitor = (visitor) => {
    axios.post('/api/visitors', visitor)
      .then((response) => {
        setVisitors([...visitors, response.data]);
      })
      .catch((error) => {
        console.error('Error adding visitor:', error);
      });
  };

  return (
    <div className="container mx-auto">
      <AddVisitor addVisitor={addVisitor} />
    </div>
  );
};

export default Home;
