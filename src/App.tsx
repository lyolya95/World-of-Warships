import React, { FC } from 'react';
import { Ships } from './pages/ships';
import { useGetShips } from './hooks';
import { Loader } from './components/loader';
import logo from './assets/logo.svg';
import { Image } from './components/image';

const App: FC = () => {
  const { ships, loading } = useGetShips();

  if (loading) return <Loader isLoading={loading} />;

  return (
    <div className="container">
      <div className="header">
        <Image src={logo} alt="logo" />
        <h1>World of Warships</h1>
      </div>

      <Ships ships={ships} />
    </div>
  );
};

export default App;