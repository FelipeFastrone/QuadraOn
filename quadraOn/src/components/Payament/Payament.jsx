import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import PayamentForm from './PayamentForm';
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_XKUpwPvvEnNxMsSzoLm8H3i8');

export default function Payament() {
//   const options = {
//     // passing the client secret obtained from the server
//     clientSecret: '',
//   };

  return (
    <Elements stripe={stripePromise}>
    <PayamentForm/>
    </Elements>
  );
}