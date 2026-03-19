/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import EraPage from './pages/EraPage';
import Technology from './pages/Technology';
import Timeline from './pages/Timeline';
import Compare from './pages/Compare';
import Study from './pages/Study';
import Graph from './pages/Graph';
import Glossary from './pages/Glossary';
import Library from './pages/Library';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="ancient" element={<EraPage eraId="ancient" />} />
          <Route path="modern" element={<EraPage eraId="modern" />} />
          <Route path="current" element={<EraPage eraId="current" />} />
          <Route path="technology" element={<Technology />} />
          <Route path="timeline" element={<Timeline />} />
          <Route path="compare" element={<Compare />} />
          <Route path="study" element={<Study />} />
          <Route path="graph" element={<Graph />} />
          <Route path="glossary" element={<Glossary />} />
          <Route path="library" element={<Library />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

