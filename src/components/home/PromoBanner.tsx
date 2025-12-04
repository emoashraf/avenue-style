import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const PromoBanner = () => {
  return (
    <section className="py-12">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl gradient-accent p-8 md:p-12">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-foreground/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-foreground/10 rounded-full translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-4 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-foreground/20 text-accent-foreground text-sm font-medium">
                <Sparkles className="h-4 w-4" />
                Limited Time Offer
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-accent-foreground">
                Flat 50% Off on Winter Collection
              </h2>
              <p className="text-accent-foreground/80 max-w-md">
                Get ready for the season with our premium jackets, sweaters, and more. Don't miss out!
              </p>
            </div>
            <Link to="/products?category=jackets">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8">
                Shop Winter Wear
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
