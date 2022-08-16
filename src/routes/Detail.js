import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Movie from "../components/Movie";

function Detail() {
  const { id } = useParams();
  const [detail, setDetail] = useState([]);
  const [loading, setLoading] = useState(true);

  const getMovie = async () => {
    const json = await (
      await fetch(`
    https://api.themoviedb.org/3/movie/${id}?api_key=7ce4e16883f03f551929f70193140234&language=ko-KR`)
    ).json();
    setDetail(json.genres);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <ul>
          <h2>장르</h2>
          {detail.map((id, index) => (
            <li key={index}>{detail[index].name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Detail;
