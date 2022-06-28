import { useState, useEffect } from 'react';
import { useFetch } from './helpers/helper';

function App() {
  const [data, setData] = useState([]);

    // Fetch API
    const getData = async () => {
      const url = URL;
      // Custom fetch hook
      const result = await useFetch(url, 'GET');
      // Set state to result
      setData(result?.item);
    };
    // Lifecycle management
    useEffect(() => {
      getData();
    }, []);

  return (
   <p>{data}</p>
  );
}

export default App;
