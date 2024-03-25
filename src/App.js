import React, { useEffect, useState } from 'react';

import Map from './components/Map';
import Loading from './components/Loading';
import InfoBox from './components/Info';

function App() {

  const [loading, setLoading] = useState(true);
  const [info, setInfo] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3300);
    setInfo(true);
  }, []);

  if(loading) {
    return <Loading />;
  };

  if(!loading && info) {
    return <InfoBox setInfo={setInfo}/>;
  };

  if(!loading && !info) {
    return <Map />;
  };
};

export default App;