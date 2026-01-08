import HeroSection from "@/components/home/HeroSection";
import NewsFeed from "@/components/home/NewsFeed";
import UpcomingEvents from "@/components/home/UpcomingEvents";
import GallerySection from "@/components/home/GallerySection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />

      <section className="section-neutral container mx-auto px-4 md:px-6 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <NewsFeed />
          </div>
          <div className="lg:col-span-1">
            <UpcomingEvents />
          </div>
        </div>
      </section>

      <div className="section-purple">
        <GallerySection />
      </div>

    </div>
  );
}
