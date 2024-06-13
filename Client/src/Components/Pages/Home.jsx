/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ */
/*ইনশাআল্লাহ */
import react from 'react';
import {useState} from 'react';

const fetctDatafromApi = async () => {
  return await fetch(`http://loclahost:3000/gigs`)
}

function Home() {
  const [data, setData] = useState([fetctDatafromApi]);
  return(
  <>
  {data.map((gigdata)=> {
    return <Gigbox  />
  })}
  </>);
}
