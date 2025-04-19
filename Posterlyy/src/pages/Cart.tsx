
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import CartItem from "@/components/CartItem";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingCart } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function Cart() {
  const { cartItems, getCartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  
  const subtotal = getCartTotal();
  const isCartEmpty = cartItems.length === 0;

  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold tracking-tight">Your Cart</h1>
      
      {isCartEmpty ? (
        <div className="mt-12 flex flex-col items-center justify-center py-12 text-center">
          <div className="rounded-full bg-muted p-6">
            <ShoppingCart className="h-10 w-10 text-muted-foreground" />
          </div>
          <h2 className="mt-6 text-xl font-semibold">Your cart is empty</h2>
          <p className="mt-2 text-muted-foreground">
            Looks like you haven't added any posters to your cart yet.
          </p>
          <Link to="/shop" className="mt-6">
            <Button>
              Continue Shopping
            </Button>
          </Link>
        </div>
      ) : (
        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          {/* Cart items */}
          <div className="lg:col-span-2">
            <div className="rounded-lg border">
              <div className="p-6">
                <div className="flex items-center justify-between pb-4">
                  <h2 className="text-lg font-medium">
                    Cart ({cartItems.reduce((total, item) => total + item.quantity, 0)} items)
                  </h2>
                  <Button 
                    variant="ghost"
                    onClick={clearCart}
                    className="text-sm text-muted-foreground hover:text-destructive"
                  >
                    Clear cart
                  </Button>
                </div>
                
                <Separator className="mb-4" />
                
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <CartItem 
                      key={item.product.id} 
                      product={item.product} 
                      quantity={item.quantity} 
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Order summary */}
          <div>
            <div className="rounded-lg border">
              <div className="p-6">
                <h2 className="text-lg font-medium">Order Summary</h2>
                
                <div className="mt-6 space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>₹{subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span>Free</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-medium">
                    <span>Total</span>
                    <span>₹{subtotal.toFixed(2)}</span>
                  </div>
                  
                  <Button 
                    onClick={() => navigate("/checkout")} 
                    className="w-full bg-lime-500 hover:bg-lime-600"
                  >
                    Checkout <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                
                <div className="mt-6 text-center text-sm text-muted-foreground">
                  <p>Secure checkout powered by Stripe</p>
                </div>
              </div>
            </div>
            
            <div className="mt-4 rounded-lg border bg-muted/40 p-4">
              <h3 className="text-sm font-medium">Have a discount code?</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Discount codes can be applied at checkout.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
