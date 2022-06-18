import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { publicRoute } from './routes/PublicRoutes';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import PrivateRoute from "./authentication/PrivateRoute";
import { PrivateRoutes } from "./routes/PrivateRoutes";
import AdminRoute from "./authentication/AdminRoute";
import Dashboard from "./pages/Dashboard/Dashboard";
import AddAdmin from "./pages/Dashboard/AddAdmin";
import AddService from "./pages/Dashboard/AddService";
function App() {
  useEffect(() => {
    AOS.init()
  }, []);
  return (
    <Navbar>
      <Routes>
        {/* <Route path="/" element={<Home> </Home>}> </Route>
        <Route path="/about" element={<About> </About>}> </Route>
        <Route path="/services" element={<Services> </Services>}> </Route>
        <Route path="/contact" element={<Contact> </Contact>}> </Route>
        <Route path="/login" element={<Login> </Login>}> </Route> */}
        {
          publicRoute.map(({ path, Component }, index) => <Route
            key={index}
            path={path}
            element={<Component />}
          />)
        }
        {/* <Route path="/services" element={<PrivateRoute><Services> </Services></PrivateRoute>}> </Route>
        <Route path="/about" element={<PrivateRoute><About> </About></PrivateRoute>}> </Route> */}
        <Route element={<PrivateRoute />}>
          {
            PrivateRoutes.map(({ path, Component }, index) => <Route
              key={index}
              path={path}
              element={<Component />}
            />)
          }
        </Route>
        <Route element={<AdminRoute />}>
          <Route path="/dashboard" element={<Dashboard> </Dashboard>}>
            <Route path='add-admin' element={<AddAdmin> </AddAdmin>} />
            <Route path='add-service' element={<AddService> </AddService>} />
          </Route>
        </Route>
      </Routes>
    </Navbar>
  );
}

export default App;
