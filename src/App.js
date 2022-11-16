import { Header } from "./Components"


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
       <Header/>
    </>
  );
}

export default App;
