import { useEffect, useState } from "react";
import Gif from "./Gif.js";
import getGifs from "../services/getGifs.js";

export default function ListOfGifs({ keyword }) {

      const [gifs, setGifs] = useState([])

    useEffect(function () {
      getGifs({ keyword }).then(gifs => setGifs(gifs))
  }, [keyword])
    return (
      <div>
        {gifs.map(({id, title, url}) => (
          <Gif
            key={id}
            id={id}
            title={title}
            url={url}
          />
        ))}
      </div>
    );
}