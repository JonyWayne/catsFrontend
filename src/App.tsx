import Header from "./components/Header";
import CatList from "./components/CatList";
import LoadingState from "./components/LoadingState";
import ErrorState from "./components/ErrorState";
import Footer from "./components/Footer";
import { useCats } from "./hooks/useCats";

function App() {
  const { cats, loading, error } = useCats();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Our Feline Friends
          </h2>
          <p className="text-gray-600">
            Meet our wonderful collection of cartoon cats, each with their own
            personality and style!
          </p>
        </div>

        {error && <ErrorState message={error} />}

        {loading ? <LoadingState /> : <CatList cats={cats} />}
      </main>

      <Footer />
    </div>
  );
}

export default App;
