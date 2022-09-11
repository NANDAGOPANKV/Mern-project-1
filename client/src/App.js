import { useEffect, useState } from "react";
import "./App.css";
//import function
import { getTest } from "./functions/Test";
// importing spinner 
import {BeatLoader} from 'react-spinners'

function App() {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    getTest()
      .then((res) => {
        console.log(res);
        setData(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="App">
      {loading ? (
       <div>
        <BeatLoader/>
       {console.log('load')}
       </div>
        
      ) : data ? (
        <h1>{data}</h1>
      ) : (
        "Data Came Yet!"
      )}
    </div>
  );
}

export default App;
