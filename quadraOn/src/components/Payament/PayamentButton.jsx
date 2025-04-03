import { useState } from "react";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("STRIPE_SECRET_KEY");

export default function CheckoutButton() {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const { data } = await axios.post("http://localhost:5000/create-checkout-session");
      const stripe = await stripePromise;
      await stripe.redirectToCheckout({ sessionId: data.id });
    } catch (error) {
      console.error("Erro ao iniciar pagamento:", error);
    }
    setLoading(false);
  };

  return (
    <button 
      onClick={handleCheckout} 
      disabled={loading} 
      style={{ backgroundColor: "transparent", border: "none", fontSize: "16px", cursor: "pointer", color: "#fff" }}
    >
      {loading ? "Processando..." : "Pagar"}
    </button>
  );
}
