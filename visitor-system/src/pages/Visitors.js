import React, { useEffect, useState } from 'react';
import AddVisitor from '../components/AddVisitor';
import VisitorList from '../components/VisitorList';
import axios from 'axios';

const Visitors = () => {

  return (
    <div className="container mx-auto p-2">
      <VisitorList /> 
    </div>
  );
};

export default Visitors;
