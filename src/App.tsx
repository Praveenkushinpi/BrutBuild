import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/Home';
import AboutPage from './pages/AboutPage';
import FeaturesPage from './pages/FeaturesPage';
import DevelopmentPage from './pages/DevelopmentPage';
import CommunityPage from './pages/CommunityPage';
import ContactPage from './pages/ContactPage';
import PagesDevVisit from './pages/PagesDevVisit';
import LoginPage from './pages/LoginPage';
import Profile from './pages/Profile';
import Templates from './pages/Templates';
import AiIntegration from './pages/AiIntegration';
import ExplorePage from './pages/ExplorePage';
function App() {
  const [currentPage, setCurrentPage] = useState<string>(window.location.hash.replace('#', '') || 'home');
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      setIsTransitioning(true);
      const hash = window.location.hash.replace('#', '') || 'home';
      setCurrentPage(hash);
      document.title = `BrutBuild - ${hash.charAt(0).toUpperCase() + hash.slice(1)}`;
 
      setTimeout(() => {
        setIsTransitioning(false);
      }, 300);
    };

    window.addEventListener('hashchange', handleHashChange);
    
  
    handleHashChange();

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'about':
        return <AboutPage />;
      case 'features':
        return <FeaturesPage />;
      case 'development':
        return <DevelopmentPage />;
      case 'community':
        return <CommunityPage />;
      case 'contact':
        return <ContactPage />;
      case 'pagesdev':
        return <PagesDevVisit  />;
      case 'login':
        return <LoginPage  />;  
      case 'profile':
        return <Profile />;
      case 'templates':
        return <Templates />;
      case 'ai':
        return <AiIntegration />;  
      case 'explore':
        return <ExplorePage />;       
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-mono bg-white text-black">
      <Navbar currentPage={currentPage} />
      <main className={`flex-grow transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;