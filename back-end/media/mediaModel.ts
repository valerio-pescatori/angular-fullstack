const mongoose = require('mongoose');
const { Schema } = mongoose;

const mediaSchema = new Schema({
  path: { type: String, required: true },
  text: { type: String, required: true },
  icons: [String],
});

const Media = mongoose.model('Media', mediaSchema);

// add();
async function add() {
  await Media.create([
    {
      path: 'assests/landing/d_assortment_2021.png',
      text: 'Più di quanto ti aspetti\nModa, beauty, designer e molto altro',
    },
    {
      path: 'assests/landing/d_delivery_2021.png',
      text: 'Spedizione gratuita\nStile per ogni budget, con la spedizione gratuita',
    },
    {
      path: 'assests/landing/t_brands_2021.png',
      text: 'Scopri i tuoi brand\nSegui i brand per novità e aggiornamenti',
    },
    {
      path: 'assests/landing/t_return_2021.png',
      text: 'Scopri i tuoi brand\nSegui i brand per novità e aggiornamenti',
    },
    {
      path: 'assests/landing/d_personalisation.png',
      text: 'La moda su misura per te\nSuggerimenti di stile in base ai tuoi like',
    },
    {
      path: 'assests/landing/d_sustainability.png',
      text: 'Un cambiamento per il meglio\nScopri moda più sostenibile',
    },
    {
      path: 'assests/landing/d_payment.png',
      text: 'Metodi di pagamento semplici\nPiù scelta, zero stress',
    },
  ]);
  console.log('Landing page imgs insert');
}

module.exports = Media;
