import EpisodeDetails from "./episodes/EpisodeDetails";
import EpisodeList from "./episodes/EpisodeList";
import ShowDetails from "./shows/ShowDetails";
import { tvShows } from "./shows/data";
import { useState } from "react";

/**
 * React TV is an web streaming platform that allows users to browse
 * through the episodes of a variety of different shows.
 */
export default function App() {
  const [shows] = useState(tvShows);
  const [selectedShow, setSelectedShow] = useState();
  return (
    <>
      <header>
        <p>React TV</p>
      </header>
      <main>
        <ShowDetails show={selectedShow} />
      </main>
    </>
  );
}
