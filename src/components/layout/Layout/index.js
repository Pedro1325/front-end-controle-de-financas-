import { useState } from 'react';
import Sidebar from '../Sidebar';
import Header from '../Header';
import * as C from './styles';

const Layout = ({ children, title }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <C.Container>
      <Sidebar isOpen={sidebarOpen} />
      <C.Overlay
        $isOpen={sidebarOpen}
        onClick={() => setSidebarOpen(false)}
      />
      <C.Main>
        <Header
          title={title}
          onMenuClick={() => setSidebarOpen(true)}
        />
        <C.Content>{children}</C.Content>
      </C.Main>
    </C.Container>
  );
};

export default Layout;
