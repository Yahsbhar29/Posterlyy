
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-background border-t py-6 md:py-10">
      <div className="container flex flex-col items-center gap-4 md:flex-row md:justify-between">
        <div className="flex flex-col items-center gap-2 md:items-start">
          <Link to="/" className="flex items-center gap-2">
            <img 
              src="/lovable-uploads/0b475658-5467-4835-9309-a3d539b3c0a3.png" 
              alt="Posterly Logo" 
              className="h-6 w-auto" 
            />
            <span className="text-lg font-bold">Posterly</span>
          </Link>
          <p className="text-sm text-muted-foreground">Artify your thoughts</p>
        </div>
        
        <div className="flex gap-8 text-sm md:gap-12">
          <div className="flex flex-col gap-2">
            <p className="font-medium">Shop</p>
            <Link to="/shop" className="text-muted-foreground hover:text-foreground">
              All Posters
            </Link>
            <Link to="/shop" className="text-muted-foreground hover:text-foreground">
              New Arrivals
            </Link>
            <Link to="/shop" className="text-muted-foreground hover:text-foreground">
              Best Sellers
            </Link>
          </div>
          
          <div className="flex flex-col gap-2">
            <p className="font-medium">Company</p>
            <Link to="/" className="text-muted-foreground hover:text-foreground">
              About Us
            </Link>
            <Link to="/" className="text-muted-foreground hover:text-foreground">
              Contact
            </Link>
            <Link to="/" className="text-muted-foreground hover:text-foreground">
              FAQ
            </Link>
          </div>
        </div>
      </div>
      
      <div className="container mt-8 border-t pt-6">
        <p className="text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Posterly. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
