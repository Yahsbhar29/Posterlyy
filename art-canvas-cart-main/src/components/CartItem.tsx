
import { Product } from '@/data/products';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CartItemProps {
  product: Product;
  quantity: number;
}

export default function CartItem({ product, quantity }: CartItemProps) {
  const { updateQuantity, removeFromCart, getItemPrice } = useCart();

  const itemPrice = getItemPrice(product, quantity);
  const totalPrice = itemPrice * quantity;

  return (
    <div className="flex items-center py-4 border-b">
      <div className="flex-shrink-0 mr-4 w-20 h-20">
        <Link to={`/product/${product.id}`}>
          <img 
            src={product.image} 
            alt={product.title} 
            className="h-full w-full object-cover rounded-md"
          />
        </Link>
      </div>
      
      <div className="flex-grow">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-medium">{product.title}</h3>
        </Link>
        <div className="flex items-center mt-1">
          <span className="text-sm text-muted-foreground mr-2">
            ₹{itemPrice.toFixed(2)} each
          </span>
          {itemPrice < product.price && (
            <span className="text-xs bg-lime-100 text-lime-800 px-2 py-0.5 rounded-full">
              20% off
            </span>
          )}
        </div>
      </div>
      
      <div className="flex items-center gap-2">
        <div className="flex items-center border rounded-md">
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-8 w-8 rounded-r-none"
            onClick={() => updateQuantity(product.id, quantity - 1)}
          >
            <Minus className="h-3 w-3" />
          </Button>
          <span className="w-10 text-center">{quantity}</span>
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-8 w-8 rounded-l-none"
            onClick={() => updateQuantity(product.id, quantity + 1)}
          >
            <Plus className="h-3 w-3" />
          </Button>
        </div>
        
        <Button 
          variant="ghost" 
          size="icon"
          className="h-8 w-8 text-destructive hover:text-destructive/90"
          onClick={() => removeFromCart(product.id)}
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>
      
      <div className="ml-4 text-right w-24">
        <p className="font-medium">₹{totalPrice.toFixed(2)}</p>
      </div>
    </div>
  );
}
