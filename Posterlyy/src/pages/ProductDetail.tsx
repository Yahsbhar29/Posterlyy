
import { useParams, useNavigate, Link } from "react-router-dom";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { ShoppingCart, ArrowLeft, Plus, Minus, Check } from "lucide-react";
import { useState } from "react";
import { toast } from "@/components/ui/sonner";
import ProductCard from "@/components/ProductCard";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, getItemPrice } = useCart();
  const [quantity, setQuantity] = useState(1);

  // Find the product by id
  const product = products.find(product => product.id === Number(id));

  // If product not found, redirect to shop
  if (!product) {
    navigate("/shop");
    return null;
  }

  // Get related products (same category, excluding current product)
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  // Calculate price based on quantity
  const unitPrice = getItemPrice(product, quantity);
  const totalPrice = unitPrice * quantity;

  // Handle quantity change
  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  // Add to cart with selected quantity
  const handleAddToCart = () => {
    // Add product multiple times based on quantity
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    toast.success(`${quantity} × ${product.title} added to cart!`);
  };

  // Proceed to checkout
  const handleBuyNow = () => {
    handleAddToCart();
    navigate("/cart");
  };

  return (
    <div className="container py-8 md:py-12">
      {/* Back button */}
      <div className="mb-6">
        <Button variant="ghost" onClick={() => navigate(-1)} className="flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" /> Back
        </Button>
      </div>
      
      {/* Product details */}
      <div className="grid gap-8 md:grid-cols-2">
        {/* Product image */}
        <div className="overflow-hidden rounded-lg border bg-background">
          <img 
            src={product.image} 
            alt={product.title} 
            className="h-full w-full object-cover"
          />
        </div>
        
        {/* Product info */}
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <p className="mt-4 text-muted-foreground">{product.description}</p>
          
          <div className="mt-6">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold">${unitPrice.toFixed(2)}</span>
              {unitPrice < product.price && (
                <span className="text-sm font-medium text-lime-600">
                  20% off with 5+ posters
                </span>
              )}
            </div>
            
            <div className="mt-6 space-y-6">
              {/* Quantity selector */}
              <div>
                <h3 className="mb-2 font-medium">Quantity</h3>
                <div className="flex">
                  <div className="flex items-center border rounded-md">
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-10 w-10 rounded-r-none"
                      onClick={decrementQuantity}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-12 text-center">{quantity}</span>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-10 w-10 rounded-l-none"
                      onClick={incrementQuantity}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  {quantity >= 5 ? (
                    <span className="flex items-center gap-1 text-lime-600">
                      <Check className="h-4 w-4" /> 
                      Discount applied: ₹40 per poster
                    </span>
                  ) : (
                    <span>Buy 5 or more posters to get 20% off (₹40 each)</span>
                  )}
                </p>
              </div>
              
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button 
                  onClick={handleAddToCart} 
                  className="flex-1 bg-lime-500 hover:bg-lime-600"
                >
                  <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
                </Button>
                <Button 
                  onClick={handleBuyNow} 
                  variant="outline" 
                  className="flex-1"
                >
                  Buy Now
                </Button>
              </div>
              
              <div className="border-t pt-6">
                <h3 className="font-medium">Total: ₹{totalPrice.toFixed(2)}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Related products */}
      {relatedProducts.length > 0 && (
        <div className="mt-16">
          <h2 className="mb-6 text-2xl font-bold">You might also like</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
