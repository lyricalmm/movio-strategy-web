import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import PlaybookView from './views/PlaybookView';
import OverviewView from './views/OverviewView';
import ContextView from './views/ContextView';
import FundingView from './views/FundingView';
import JAView from './views/JAView';
import TeamView from './views/TeamView';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PlaybookView />} />
          <Route path="calendar" element={<OverviewView />} />
          <Route path="business" element={<ContextView />} />
          <Route path="funding" element={<FundingView />} />
          <Route path="ja-romania" element={<JAView />} />
          <Route path="echipa" element={<TeamView />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
