import { Schema, model } from 'mongoose';

const brandSchema = new Schema({
  name: { type: String, required: true },
});

const Brand = model('Brand', brandSchema);

// populate();
async function populate() {
  await Brand.create([
    { name: 'Adidas' },
    { name: 'Alexander McQueen' },
    { name: 'Asics' },
    { name: 'Benetton' },
    { name: 'Bershka' },
    { name: 'Billabong' },
    { name: 'Birkenstock' },
    { name: 'Calvin Klein' },
    { name: 'Casio' },
    { name: 'Cheap Monday' },
    { name: 'Clarks' },
    { name: 'Colmar Originals' },
    { name: 'Converse' },
    { name: 'Desigual' },
    { name: 'Diesel' },
    { name: 'Dr. Martens' },
    { name: 'Esprit' },
    { name: 'Even&Odd' },
    { name: 'Felpe Jordan' },
    { name: 'Gap' },
    { name: 'Geox' },
    { name: 'Guess' },
    { name: 'Just Cavalli' },
    { name: 'Kappa' },
    { name: 'Lacoste' },
    { name: 'Lee Jeans' },
    { name: 'Levis' },
    { name: 'Liu Jo' },
    { name: 'Michael Kors' },
    { name: 'Napapijri' },
    { name: 'New Balance' },
    { name: 'Nike' },
    { name: 'Nike' },
    { name: 'Polo Ralph Lauren' },
    { name: 'Puma' },
    { name: 'Quiksilver' },
    { name: 'Ray ban' },
    { name: 'Replay' },
    { name: 'Scarpe Jordan' },
    { name: 'Sisley' },
    { name: 'Tommy Hilfger' },
    { name: 'Topshop' },
    { name: 'Triumph' },
    { name: 'Under Armour' },
    { name: 'Vans' },
  ]);
  console.log('BRANDS INSERT');
}

export default Brand;
