import { Outlet, useNavigation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ValidateElement from '../components/ValidateElement';

const Root = () => {
  const navigation = useNavigation();
  const invalidPaths = ['/registration', '/login', '/admin'];

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
