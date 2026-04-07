import React, { useState } from 'react';
import './dashboard.css';
import { Card } from './components/card';
import { Sidebar } from './components/sidebar';

export default function DashboardLayout() {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="app-container">
      <Sidebar isExpanded={isExpanded} setIsExpanded={setIsExpanded} />

      <main className="main-content">
        <h1 className="header-logo">LOGO</h1>

        <section className="grid-layout">
          <Card className="card-large" />
          <Card className="card-large" />
          
          <Card className="card-medium" />
          <Card className="card-medium" />
          
          <Card className="card-full" />
        </section>
      </main>

    </div>
  );
}
