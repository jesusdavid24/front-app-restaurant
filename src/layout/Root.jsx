import { useState, useContext, useEffect } from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import { RestaurantsContext } from '../store/context/RestaurantsContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ValidateElement from '../components/ValidateElement';
import ErrorElement from '../components/ErrorElement';
import Loader from '../components/Loader';

const Root = () => {
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();

  const { restaurants, error } = useContext(RestaurantsContext);

  const invalidPaths = ['/registration', '/login', '/admin'];

  useEffect(() => {
    !!restaurants && setLoading(false);
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorElement />;
  }

  return (
    <div className='root-layout'>
      <ValidateElement invalidPaths={invalidPaths}>
        <Header />
      </ValidateElement>
      <main>{navigation.state === 'loading' ? 'Loading...' : <Outlet />}</main>
      <ValidateElement invalidPaths={invalidPaths}>
        <Footer />
      </ValidateElement>
    </div>
  );
};

export default Root;
