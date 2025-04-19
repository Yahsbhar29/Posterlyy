import { Link } from 'react-router-dom';
import { Product } from '@/data/products';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { useCart } from '@/context/CartContext';
import { ShoppingCart } from 'lucide-react';
import { toast } from '@/components/ui/sonner';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart, getItemPrice } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.title} added to cart!`);
  };

  const itemPrice = getItemPrice(product, 1);

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <Link to={`/product/${product.id}`}>
        <div className="aspect-square overflow-hidden">
          <img 
            src={product.image} 
            alt={product.title} 
            className="h-full w-full object-cover transition-transform hover:scale-105"
          />
        </div>
      </Link>
      <CardContent className="p-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="text-lg font-semibold line-clamp-1">{product.title}</h3>
        </Link>
        <p className="text-sm text-muted-foreground line-clamp-2 mt-1">{product.description}</p>
        <p className="mt-2 font-medium text-lg">₹{itemPrice}</p>
        <p className="text-xs text-muted-foreground">
          Buy 5 or more: ₹40 each
        </p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button 
          onClick={handleAddToCart} 
          className="w-full bg-lime-500 hover:bg-lime-600"
        >
          <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
