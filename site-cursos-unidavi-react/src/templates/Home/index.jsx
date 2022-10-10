import { useEffect, useState } from "react";
import { Base } from "../Base";
import { mockBase } from "../Base/mock";
import {mapData} from '../../api/map-data';
import { PageNotFound } from "../PageNotFound";
import { Loading } from "../Loading";

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const load = async () => {

      try{
        const data = await fetch('http://localhost:1337/api/pages/?slug=olha-so-a-minha-pagina-1');
        const json = await data.json();
        const { attributes } = json.data[0];
        const pageData = mapData([attributes]);

        await new Promise(r =>{
         
            setData(pageData[0]);
            
        });
        
      }catch(e){
        setData(undefined);
      }
    };

    load();
  }, []);

  if (data === undefined) {
    return <PageNotFound />
  }

  if (data && !data.slug) {
    return <Loading />
  }

  return <Base {...mockBase} />;
}

export default Home;