import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import CategorySection from "@/components/home/CategorySection";
import TrendingProducts from "@/components/home/TrendingProducts";
import PromoBanner from "@/components/home/PromoBanner";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <CategorySection />
        <TrendingProducts />
        <PromoBanner />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
