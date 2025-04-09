import React from 'react';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { About } from './pages/About';
import { Home } from './pages/Home';
import { CommitteeMembers } from './pages/CommitteeMembers';
import { EmpowermentPrograms } from './pages/EmpowermentPrograms';
import { BankServices } from './pages/BankServices';
import { NewsAndEvents } from './pages/NewsAndEvents';
import { Contact } from './pages/Contact';
export function App() {
  return <Router>
      <Layout>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/committee" element={<CommitteeMembers />} />
          <Route path="/empowerment" element={<EmpowermentPrograms />} />
          <Route path="/services" element={<BankServices />} />
          <Route path="/news" element={<NewsAndEvents />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
    </Router>;
}