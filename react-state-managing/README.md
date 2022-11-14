### Ch 3:
* Error Handling <error boundary>
* Centralize API call in function
* Custom hook for API call
* Loading Status
* how to force delay:
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
  
