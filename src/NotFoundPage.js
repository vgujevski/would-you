import React from 'react';
import { Link } from 'react-router-dom';

export const NotFoundPage = () => (
  <div className="content-container">
    <div className="not-found-page-container">
      <h2>404! - Something went wrong</h2>
      <Link className="link" to="/"> go back</Link>
    </div>
  </div>
)