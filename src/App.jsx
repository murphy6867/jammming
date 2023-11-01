import Playlist from "./components/Playlist";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import Track from "./components/Track";
import TrackList from "./components/TrackList";

function App() {

  return (
    <main>
      <header className="text-3xl font-bold underline">
        <h1>Jammming application.</h1>
        <SearchBar />
      </header>
      <section>
        <SearchResults />
      </section>
      <section>
        <Playlist />
      </section>
    </main>
  )
}

export default App
