
import { products } from './seed';
import {PrismaClient} from '@prisma/client';
export async function insertSeedData(keystone: any) {
  // Keystone API changed, so we need to check for both versions to get keystone

  const prisma = new PrismaClient();
  console.log(`🌱 Inserting Seed Data: ${products.length} Products`);
  const postgresql = new keystone({
    adapter: prismaC({
      URL: 'postgres://beqpswbi:ru2fCsMixSLOltvGx0WHaqciUr1ePMy7@arjuna.db.elephantsql.com/beqpswbi',
    }),
  });
  for (const product of products) {
    console.log(`  🛍️ Adding Product: ${product.name}`);
    const { _id } = await postgresql
      .model('ProductImage')
      .create({ image: product.photo, altText: product.description });
    product.photo = _id;
    await postgresql.model('Product').create(product);
  }
  console.log(`✅ Seed Data Inserted: ${products.length} Products`);
  console.log(
    `👋 Please start the process with \`yarn dev\` or \`npm run dev\``
  );
  process.exit();
}
