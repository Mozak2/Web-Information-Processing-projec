import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import SessionCard from './SessionCard';

const Sessions = () => {
  const [sessions, setSessions] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get('http://localhost:4002/sessions/');
      setSessions(res.data);
    };
    getData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="w-full min-h-screen bg-gray-300">
      <div className="flex justify-center">
        <Link
          to="/sessions/add"
          className="bg-blue-200 "
        >
          Add New Therapist Session
        </Link>
      </div>
      <div className="">
        {sessions
          .sort((a, b) => a.date < b.date)
          .map((s, i) => (
            <SessionCard key={i} session={s}></SessionCard>
          ))}
      </div>
    </div>
  );
};

export default Sessions;
