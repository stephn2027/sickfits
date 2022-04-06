


import keystone from '../keystone';
import { products } from './data';

export async function insertSeedData(keystone: any) {
  // Keystone API changed, so we need to check for both versions to get keystone
  
 

  console.log(`🌱 Inserting Seed Data: ${products.length} Products`);
  const {postgresql} = keystone;
  for (const product of products) {
    console.log(`  🛍️ Adding Product: ${product.name}`);
    const { _id } = await postgresql
    .model('ProductImage')
    .create({ image: product.photo, altText: product.description });
    product.photo = _id;
    await postgresql.model('Product').create(product);
  }
  console.log(`✅ Seed Data Inserted: ${products.length} Products`);
  console.log(`👋 Please start the process with \`yarn dev\` or \`npm run dev\``);
  process.exit();
}
