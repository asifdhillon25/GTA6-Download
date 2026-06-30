import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import DownloadCard from "./components/DownloadCard";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import IntroLoader from "./components/IntroLoader";
import MouseGlow from "./components/MouseGlow";

export default function App() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <IntroLoader />
      <MouseGlow />
      <Navbar />
      <Hero />
      <DownloadCard />
      <Gallery />
      <Footer />
    </main>
  );
}