### Ch 3:
`App.jsx`
* Error Handling <error boundary>
* Centralize API call in function
* Custom hook for API call
* Loading Status
* How to force delay:
  ```javascript
   "scripts": {
    "start": "run-p start-app start-api",
    "start-app": "cross-env REACT_APP_API_BASE_URL=http://localhost:3001/ react-scripts start",
    "start-api": "json-server --port 3001 --watch db.json --delay 0", /* change delay to larger number to fake delay */
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  ```

* How to use Async API call instead of promise
  ```javascript
  useEffect(
    async function init(){
      try{
        const response = await getProducts("shoes");
        setProducts(response);
      } catch(e){
        setError(e);
      } finally{
        setLoading(false);
      }
    }
  );
  ```
* Async/await is syntactic sugar over promises.
* define custom hook
  ```javascript
  import { useState, useEffect } from "react";

const baseUrl = process.env.REACT_APP_API_BASE_URL;

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function init() {
      try {
        const response = await fetch(baseUrl + url);
        if (response.ok) {
          const json = await response.json();
          setData(json);
        } else {
          throw response;
        }
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    }
    init();
  }, [url]);

  return { data, error, loading };
}
  ```

