import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';

import Calendar from './pages/Calendar';

import ECommerce from './pages/Dashboard/ECommerce';

import Profile from './pages/Profile';

import Tables from './pages/Tables';

import DefaultLayout from './layout/DefaultLayout';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <DefaultLayout>
      <Routes>
        <Route
          index
          element={
            <>
              <PageTitle title="Ilyas Nur" />
              <ECommerce />
            </>
          }
        />
        <Route
          path="/calendar"
          element={
            <>
              <PageTitle title="Ilyas Nur" />
              <Calendar />
            </>
          }
        />
        <Route
          path="/profile"
          element={
            <>
              <PageTitle title="Ilyas Nur" />
              <Profile />
            </>
          }
        />
        <Route
          path="/tables"
          element={
            <>
              <PageTitle title="Ilyas Nur" />
              <Tables />
            </>
          }
        />

      
      </Routes>
    </DefaultLayout>
  );
}

export default App;
