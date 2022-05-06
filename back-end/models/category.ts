import { Schema, model } from 'mongoose';

const categorySchema = new Schema({
  name: { type: String, required: true },
});

const Category = model('Category', categorySchema);

// populate();
async function populate() {
  await Category.create([
    { name: 'Abiti da festa' },
    { name: 'adidas Ozweego' },
    { name: 'adidas Rivalry' },
    { name: 'Borse' },
    { name: 'Cashmere' },
    { name: 'Giacche da uomo' },
    { name: 'Giubbotti' },
    { name: 'Impermeabili' },
    { name: 'Jeans' },
    { name: 'Multipack' },
    { name: 'Promozioni' },
    { name: 'Puma Cali' },
    { name: 'Scarpe Eleganti' },
    { name: 'Smoking uomo' },
    { name: 'Sneakers' },
    { name: 'Stivali' },
    { name: 'Tacchi alti' },
    { name: 'Taglie forti' },
  ]);
  console.log('CATEGORIES INSERT');
}

export default Category;
