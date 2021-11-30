import './App.css';
import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { DataGrid } from '@mui/x-data-grid';
import { Typography } from '@mui/material';

function App() {
  const [url, setUrl] = useState('')
  const [sourse, setSourse] = useState([]);

  const columns = [
    { field: 'id', headerName: 'ID', width: 70, flex: 0.5 },
    { field: url === 'users' ? 'name' : 'title', headerName: url === 'users' ? 'NAME' : 'TO DO', width: 130, flex: 1 },
  ];

  const rows = sourse;

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${url}`).then((res) => res.json()).then(jsonRes => setSourse(jsonRes))
  }, [url])

  return (
    <div className="App">
      <h1>Click the button to see what happens</h1>
      <Button variant='contained' onClick={() => setUrl('users')}>click to see users</Button>
      <Button variant='contained' color="secondary" onClick={() => setUrl('todos')}>click to see to do</Button>
      {/* {sourse.map((item) => (<div key={item.id}><p>{url === 'users' ? item.name : item.title}</p></div>))} */}
      <br />
      <div style={{ height: 400, width: '100%', display: 'flex', paddingTop: '50px', paddingBottom: '50px'  }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          // sx={{ padding: '50px', textAlign: 'center'}}
        />
      </div>
      <h3>This simple app shows that i am practicing how to get API by using fetch, axios and useEffect hook</h3>
    </div>
  );
}

export default App;
