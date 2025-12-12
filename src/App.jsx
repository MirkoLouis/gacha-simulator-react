import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import IdeaPage from './pages/IdeaPage';
import QuizPage from './pages/QuizPage';
import LoginPage from './pages/LoginPage';
import ProjectList from './pages/ProjectList';
import ProjectDetail from './pages/ProjectDetail';
import './styles.css'

function App() {
  // This is the root component of the application. It manages the global
  // theme state and sets up the client-side router for all pages.
  const [theme, setTheme] = useState('light');
  
  // Removed projects state and related functions

  useEffect(() => {
    document.body.className = '';
    if (theme === 'dark') {
      document.body.classList.add('dark-mode');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}> {/* Removed props */}
          <Route
            path="/"
            element={
              <HomePage
                onToggleTheme={toggleTheme}
                mainTitle="GachaLearn"
                // Removed isInventorySectionInView and setIsInventorySectionInView
              />
            }
          />
          <Route
            path="/projects"
            element={
              <ProjectList />
            }
          />
          <Route
            path="/projects/:id"
            element={
              <ProjectDetail />
            }
          />
          <Route path="/idea" element={<IdeaPage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
