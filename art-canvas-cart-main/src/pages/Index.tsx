import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Index() {
  // Display only the first 4 products on the homepage
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center overflow-hidden py-20 md:py-32">
        <div 
          className="absolute inset-0 z-0 bg-black/40"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1604871000636-074fa5117945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.6)"
          }}
        />
        <div className="container relative z-10 max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl">
            Artify Your Space with <span className="text-lime-400">Premium Posters</span>
          </h1>
          <p className="mt-4 text-lg text-white/90 md:text-xl">
            Transform your walls with our collection of carefully curated posters. From abstract art to nature scenes, we have something for every taste.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link to="/shop">
              <Button size="lg" className="bg-purple-500 hover:bg-purple-600">
                Shop Now <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold tracking-tight">Featured Posters</h2>
            <Link to="/shop" className="flex items-center text-sm font-medium text-lime-600 hover:text-lime-700">
              View All <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Discount Banner */}
      <section className="bg-lime-50 py-12">
        <div className="container">
          <div className="rounded-lg bg-gradient-to-r from-purple-500 to-purple-600 p-8 text-center shadow-lg">
            <h2 className="text-2xl font-bold text-white md:text-3xl">
              Buy 5 or More Posters & Save 20%
            </h2>
            <p className="mt-3 text-white/90">
              Get each poster for just ₹40 when you order 5 or more. Perfect for refreshing your entire space!
            </p>
            <Link to="/shop" className="mt-6 inline-block">
              <Button size="lg" variant="outline" className="border-white text-white bg-transparent hover:bg-white hover:text-black">
                Shop Collection
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2 md:gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">About Posterly</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                At Posterly, we believe in the power of visual art to transform spaces and inspire thoughts. 
                Our carefully curated collection features high-quality prints that make a statement.
              </p>
              <ul className="mt-6 space-y-2">
                <li className="flex gap-2">
                  <div className="rounded-full bg-lime-500/10 p-1">
                    <svg className="h-5 w-5 text-lime-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Premium quality prints</span>
                </li>
                <li className="flex gap-2">
                  <div className="rounded-full bg-lime-500/10 p-1">
                    <svg className="h-5 w-5 text-lime-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Fast shipping worldwide</span>
                </li>
                <li className="flex gap-2">
                  <div className="rounded-full bg-lime-500/10 p-1">
                    <svg className="h-5 w-5 text-lime-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Volume discounts available</span>
                </li>
              </ul>
            </div>
            <div className="relative overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1595341888016-a392ef81b7de?ixlib=rb-4.0.3"
                alt="Posters displayed in a modern room"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
