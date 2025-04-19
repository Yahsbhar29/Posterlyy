
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/components/ui/sonner";
import { ArrowLeft } from "lucide-react";

export default function Checkout() {
  const { cartItems, getCartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const subtotal = getCartTotal();
  const isCartEmpty = cartItems.length === 0;

  // If cart is empty, redirect to cart page
  if (isCartEmpty) {
    navigate("/cart");
    return null;
  }

  // Handle checkout submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate processing
    setTimeout(() => {
      toast.success("Order placed successfully! Thank you for your purchase.");
      clearCart();
      navigate("/");
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="container py-12">
      <div className="mb-6">
        <Button 
          variant="ghost" 
          onClick={() => navigate("/cart")} 
          className="flex items-center gap-2"
        >
          <ArrowLeft className="h-4 w-4" /> Back to cart
        </Button>
      </div>
      
      <h1 className="text-3xl font-bold tracking-tight">Checkout</h1>
      
      <form onSubmit={handleSubmit} className="mt-8 grid gap-8 lg:grid-cols-3">
        {/* Checkout form */}
        <div className="lg:col-span-2 space-y-6">
          {/* Shipping information */}
          <div className="rounded-lg border p-6">
            <h2 className="text-lg font-medium">Shipping Information</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div>
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" required className="mt-1" />
              </div>
              <div>
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" required className="mt-1" />
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" required className="mt-1" />
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="address">Street Address</Label>
                <Input id="address" required className="mt-1" />
              </div>
              <div>
                <Label htmlFor="city">City</Label>
                <Input id="city" required className="mt-1" />
              </div>
              <div>
                <Label htmlFor="postalCode">Postal Code</Label>
                <Input id="postalCode" required className="mt-1" />
              </div>
              <div>
                <Label htmlFor="state">State/Province</Label>
                <Input id="state" required className="mt-1" />
              </div>
              <div>
                <Label htmlFor="country">Country</Label>
                <Input id="country" required className="mt-1" />
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" required className="mt-1" />
              </div>
            </div>
          </div>
          
          {/* Payment information */}
          <div className="rounded-lg border p-6">
            <h2 className="text-lg font-medium">Payment Method</h2>
            <div className="mt-4 space-y-4">
              <div>
                <Label htmlFor="cardName">Name on Card</Label>
                <Input id="cardName" required className="mt-1" />
              </div>
              <div>
                <Label htmlFor="cardNumber">Card Number</Label>
                <Input 
                  id="cardNumber" 
                  required 
                  className="mt-1"
                  placeholder="**** **** **** ****"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="cardExpiry">Expiry Date</Label>
                  <Input 
                    id="cardExpiry" 
                    required 
                    className="mt-1" 
                    placeholder="MM/YY"
                  />
                </div>
                <div>
                  <Label htmlFor="cardCvc">CVC</Label>
                  <Input 
                    id="cardCvc" 
                    required 
                    className="mt-1" 
                    placeholder="***"
                  />
                </div>
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
                {/* Order items summary */}
                <div className="space-y-2">
                  {cartItems.map((item) => (
                    <div key={item.product.id} className="flex justify-between text-sm">
                      <span>
                        {item.quantity} × {item.product.title}
                      </span>
                      <span>
                        ₹{(item.quantity * (item.quantity >= 5 ? 40 : 50)).toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>
                
                <Separator />
                
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
                
                <div className="flex items-start space-x-2">
                  <Checkbox id="terms" required />
                  <div className="grid gap-1.5 leading-none">
                    <label
                      htmlFor="terms"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      I agree to the terms and conditions
                    </label>
                    <p className="text-sm text-muted-foreground">
                      By placing this order, you agree to our terms of service.
                    </p>
                  </div>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-lime-500 hover:bg-lime-600"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Processing..." : "Place Order"}
                </Button>
              </div>
              
              <div className="mt-6 text-center text-sm text-muted-foreground">
                <p>Secure checkout powered by Stripe</p>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
