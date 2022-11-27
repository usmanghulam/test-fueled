import { Suspense } from 'react';
import Layout from './components/base/Layout';
import BrowserRouters from './routers';

const App = () => {
  return (
    <>
      <Suspense fallback={'...Loading'}>
        <Layout>
          <BrowserRouters />
        </Layout>
      </Suspense>
    </>
  );
}

export default App;
