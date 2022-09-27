import { useEffect } from "react";
import { Base } from "../Base";
import { mockBase } from "../Base/mock";

function Home() {
  useEffect(() => {
    const load = async () => {
      const data = await fetch(
        "http://localhost:1337/api/pages/?slug=lha-so-a-minha-pagina"
      );
      const json = await data.json();
      console.log(json);
    };

    load();
  }, []);

  return <Base {...mockBase} />;
}

export default Home;