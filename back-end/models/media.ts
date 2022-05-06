import { model, Schema } from 'mongoose';

const mediaSchema = new Schema({
  path: { type: String, required: true },
  pathSm: { type: String, required: true },
  text: { type: String, required: true },
  icons: [String],
});

const Media = model('Media', mediaSchema);

// Media.deleteMany({}).then(() => console.log('\n\nDELETE\n\n'));
// populate();
async function populate() {
  await Media.create([
    {
      path: 'assets/landing/d_assortment_2021.webp',
      pathSm: 'assets/landing/t_assortment_2021.webp',
      text: 'Più di quanto ti aspetti\nModa, beauty, designer e molto altro',
      icons: ['fal fa-sparkles', 'fal fa-eye', 'fal fa-bag-shopping'],
    },
    {
      path: 'assets/landing/d_delivery_2021.webp',
      pathSm: 'assets/landing/t_delivery_2021.webp',
      text: 'Spedizione gratuita\nStile per ogni budget, con la spedizione gratuita',
      icons: [
        'fal fa-truck-fast',
        'fal fa-hearth',
        'fal fa-arrow-right',
        'fal fa-circle-notch',
      ],
    },
    {
      path: 'assets/landing/d_brands_2021.webp',
      pathSm: 'assets/landing/t_brands_2021.webp',
      text: 'Scopri i tuoi brand\nSegui i brand per novità e aggiornamenti',
      icons: ['fal fa-eye', 'fal fa-shuffle', 'fal fa-grid-2'],
    },
    {
      path: 'assets/landing/d_return_2021.webp',
      pathSm: 'assets/landing/t_return_2021.webp',
      text: 'Scopri i tuoi brand\nSegui i brand per novità e aggiornamenti',
      icons: [
        'fal fa-calendar-day',
        'fal fa-arrow-rotate-left',
        'fal fa-shuffle fa-rotate-270',
        'fal fa-hearth',
      ],
    },
    {
      path: 'assets/landing/d_personalisation.webp',
      pathSm: 'assets/landing/t_personalisation.webp',
      text: 'La moda su misura per te\nSuggerimenti di stile in base ai tuoi like',
      icons: [
        'fal fa-grid-2-plus',
        'fal fa-arrow-right',
        'fal fa-bag-shopping',
        'fal fa-circle-notch',
      ],
    },
    {
      path: 'assets/landing/d_sustainability.webp',
      pathSm: 'assets/landing/t_sustainability.webp',
      text: 'Un cambiamento per il meglio\nScopri moda più sostenibile',
      icons: [
        'fal fa-leaf fa-flip-horizontal',
        'fal fa-shirt',
        'fal fa-shuffle fa-rotate-270',
        'fal fa-circle-notch',
      ],
    },
    {
      path: 'assets/landing/d_payment.webp',
      pathSm: 'assets/landing/t_payment.webp',
      text: 'Metodi di pagamento semplici\nPiù scelta, zero stress',
      icons: [
        'fal fa-wallet',
        'fal fa-grid-2',
        'fal fa-shuffle fa-flip-horizontal',
        'fal fa-circle-check',
      ],
    },
  ]);
  console.log('\n\n\nLanding page imgs insert\n\n\n');
}

export default Media;
