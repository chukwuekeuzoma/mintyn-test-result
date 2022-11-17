import DashboardLayout from "./Layouts/DashboardLayout/DashboardLayout";
import { Allpayments } from "./Pages"
import { BrowserRouter, Routes, Route } from "react-router-dom";


function RouteWithLayout({ Layout, Component, ...rest }) {
  return (
    <Layout {...rest}>
      <Component {...rest} />
    </Layout>
  );
}

function App() {
  return (
    <>
        <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<RouteWithLayout Layout={DashboardLayout} Component={Allpayments} />}
          />
        </Routes>
      </BrowserRouter>  
       
    </>
  );
}

export default App;
