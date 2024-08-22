import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Search from "./components/Search";

const App = () => {
  return (
    <>
      <div className="w-dvw h-dvh bg-[#202020] flex items-center flex-col p-2">
        <Navbar />
        <Hero />
        <Search />
      </div>
    </>
  );
};
export default App;
