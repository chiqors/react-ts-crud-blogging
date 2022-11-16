import Post from './components/Post';
import Navbar from './components/ui/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-16 py-2">
        <Post />
      </div>
    </>
  );
}

export default App;
