import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TransactionsProvider } from './core/context/TransactionsContext';
import Transactions from './pages/Transactions/index';
import Advisor from './pages/Advisor';
import MyAccount from './pages/MyAccount';
import Layout from './components/layout/Layout';
import Dashboard from './pages/Dashboard';
import GlobalStyle from './styles/global';

const App = () => {
  return (
    <BrowserRouter>
      <TransactionsProvider>
        <GlobalStyle />
        <Routes>
          <Route
            path="/"
            element={
              <Layout title="Dashboard">
                <Dashboard />
              </Layout>
            }
          />
          <Route
            path="/transactions"
            element={
              <Layout title="Transações">
                <Transactions />
              </Layout>
            }
          />
          <Route
            path="/advisor"
            element={
              <Layout title="Consultor De IA">
                <Advisor />
              </Layout>
            }
          />
          <Route
            path="/myacount"
            element={
              <Layout title="Minha Conta">
                <MyAccount />
              </Layout>
            }
          />
        </Routes>
      </TransactionsProvider>
    </BrowserRouter>
  );
};

export default App;
