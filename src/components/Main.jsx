import { useEffect, useState } from "react";
import { fetchAmiibo } from "../features/fetchAmiibo";

export const Main = () => {
  const [gameSeries, setGameSeries] = useState([]);
  const [displayCount, setdisplayCount] = useState(20);

  useEffect(() => {
    (async () => {
      fetchAmiibo("gameseries").then((res) => {
        setGameSeries(res);
      });
    })();
  }, []);

  return (
    <main>
      <h2>ゲームシリーズ</h2>
      <ul>
        {gameSeries.map((game, index) => {
          return (
            <li key={index}>
              <p>{game.name}</p>
            </li>
          );
        })}
      </ul>
    </main>
  );
};
