import DashboardLayout from "./Layouts/DashboardLayout/DashboardLayout";
import { Allpayments,  ReconcilePayment, UnReconcilePayment } from "./Pages"
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
           <Route
            path="/reconcliepayment"
            element={<RouteWithLayout Layout={DashboardLayout} Component={ReconcilePayment}/>}
          />
          <Route
            path="/un-reconcliepayment"
            element={<RouteWithLayout Layout={DashboardLayout} Component={UnReconcilePayment }/>}
          />
        </Routes>
      </BrowserRouter>  
       
    </>
  );
}

export default App;
