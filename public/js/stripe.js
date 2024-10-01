// import axios from 'axios';
// import { Stripe } from 'stripe';
const stripe = Stripe(
  'pk_test_51OclRvSJ7NQSZl6bTmV7e69GaB1GqLtMe79wfGA4Nl6O1Bc7IXxdSmAQJ87bCvQcI85IOnT5kTZPkhTt5j5ykdmy00j3uZWIHM'
);
import { showAlert } from './alerts.js';

// const { showAlert } = require('./alerts.js');
export const bookTour = async (tourId) => {
  try {
    // 1) Get checkout session from API
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);
    // 2) Create checkout form + chanre credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
