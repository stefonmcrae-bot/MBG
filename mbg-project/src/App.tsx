import { useMemo, useEffect, useState } from 'react';
import { Container, Theme } from './settings/types';
import { MobileBatteryGuys } from './components/generated/MobileBatteryGuys';
import { NewJerseyPage } from './components/generated/NewJerseyPage';
import { NYCServicePage } from './components/generated/NYCServicePage';
import { NJServicePage } from './components/generated/NJServicePage';
import { NYCJumpStartPage } from './components/generated/NYCJumpStartPage';
import { NJJumpStartPage } from './components/generated/NJJumpStartPage';
import { NYCFleetServicePage } from './components/generated/NYCFleetServicePage';
import { NJFleetServicePage } from './components/generated/NJFleetServicePage';
import { AboutPage } from './components/generated/AboutPage';
import { ContactPage } from './components/generated/ContactPage';
import { ServiceAreaPage } from './components/generated/ServiceAreaPage';
import { BookingPage } from './components/generated/BookingPage';
import { ThankYou } from './pages/ThankYou';

let theme: Theme = 'light';
// only use 'centered' container for standalone components, never for full page apps or websites.
let container: Container = 'none';

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    // Simple client-side routing
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);

    // Handle link clicks
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      
      if (link && link.href.startsWith(window.location.origin)) {
        const url = new URL(link.href);
        if (url.pathname === '/' || url.pathname === '/new-jersey' || url.pathname === '/services' || url.pathname === '/services-nj' || url.pathname === '/nyc-battery-service' || url.pathname === '/nj-battery-service' || url.pathname === '/jump-start' || url.pathname === '/nyc-jump-start' || url.pathname === '/nj-jump-start' || url.pathname === '/nyc-fleet-service' || url.pathname === '/nj-fleet-service' || url.pathname === '/about' || url.pathname === '/contact' || url.pathname === '/service-areas' || url.pathname === '/areas-we-service' || url.pathname === '/book' || url.pathname === '/thank-you') {
          e.preventDefault();
          window.history.pushState({}, '', url.pathname);
          setCurrentPath(url.pathname);
          window.scrollTo(0, 0);
        }
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  function setTheme(theme: Theme) {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  setTheme(theme);

  const generatedComponent = useMemo(() => {
    // Simple routing logic
    if (currentPath === '/new-jersey') {
      return <NewJerseyPage />;
    }
    if (currentPath === '/services' || currentPath === '/nyc-battery-service') {
      return <NYCServicePage />;
    }
    if (currentPath === '/services-nj' || currentPath === '/nj-battery-service') {
      return <NJServicePage />;
    }
    if (currentPath === '/jump-start' || currentPath === '/nyc-jump-start') {
      return <NYCJumpStartPage />;
    }
    if (currentPath === '/nj-jump-start') {
      return <NJJumpStartPage />;
    }
    if (currentPath === '/nyc-fleet-service') {
      return <NYCFleetServicePage />;
    }
    if (currentPath === '/nj-fleet-service') {
      return <NJFleetServicePage />;
    }
    if (currentPath === '/about') {
      return <AboutPage />;
    }
    if (currentPath === '/contact') {
      return <ContactPage />;
    }
    if (currentPath === '/service-areas' || currentPath === '/areas-we-service') {
      return <ServiceAreaPage />;
    }
    if (currentPath === '/book') {
      return <BookingPage />;
    }
    if (currentPath === '/thank-you') {
      return <ThankYou />;
    }
    return <MobileBatteryGuys />; // Default NYC home page
  }, [currentPath]);

  if (container === 'centered') {
    return (
      <div className="h-full w-full flex flex-col items-center justify-center">
        {generatedComponent}
      </div>
    );
  } else {
    return generatedComponent;
  }
}

export default App;