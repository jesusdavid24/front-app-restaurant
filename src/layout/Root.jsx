import { Outlet, useNavigation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ValidateElement from "../components/ValidateElement";

const Root = () => {
  const navigation = useNavigation();
  const validPaths = ['/',
  '/restaurants',
  '/restaurants/:id',
  '/checkout',
  '/payment-status',
  '/payment-failed'
]

  return (
    <div>
      <ValidateElement
        validPaths={validPaths}>
        <Header />
      </ValidateElement>
      <main>
        {navigation.state === "loading" ? "Loading..." : <Outlet />}
      </main>
      <ValidateElement
        validPaths={validPaths}>
        <Footer />
      </ValidateElement>
    </div>
  );
};

export default Root;
