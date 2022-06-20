import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { publicRoute } from "./routes/PublicRoutes";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import PrivateRoute from "./authentication/PrivateRoute";
import { PrivateRoutes } from "./routes/PrivateRoutes";
import AdminRoute from "./authentication/AdminRoute";
import Dashboard from "./pages/Dashboard/Dashboard";
import AddAdmin from "./pages/Dashboard/AddAdmin";
import AddService from "./pages/Dashboard/AddService";
import Home from "./pages/Home/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Navbar>
      {/* <Routes>
        {publicRoute.map(({ path, Component }, index) => (
          <Route key={index} path={path} element={<Component />} />
        ))}
        <Route element={<PrivateRoute />}>
          {PrivateRoutes.map(({ path, Component }, index) => (
            <Route key={index} path={path} element={<Component />} />
          ))}
        </Route>
        <Route element={<AdminRoute />}>
          <Route path="/dashboard" element={<Dashboard> </Dashboard>}>
            <Route path="add-admin" element={<AddAdmin> </AddAdmin>} />
            <Route path="add-service" element={<AddService> </AddService>} />
          </Route>
        </Route>
      </Routes> */}

      {/* Same as above but break the manner */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />

        <Route element={<PrivateRoute />}>
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
        </Route>

        <Route path="dashboard" element={<Dashboard />}>
          <Route path="add-admin" element={<AddAdmin />} />
          <Route path="add-service" element={<AddService />} />
        </Route>
      </Routes>
    </Navbar>
  );
}

export default App;
