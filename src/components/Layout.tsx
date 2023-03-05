import { FC, ReactNode } from 'react';
import Header from '@/components/Header';

interface Props {
  children: ReactNode
}

const Layout: FC<Props> = ({ children }) => (
  <>
    <Header />
    <main className="mt-16">
      {children}
    </main>
  </>
);

export default Layout;
