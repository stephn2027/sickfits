/*
Welcome to Keystone! This file is what keystone uses to start the app.

It looks at the default export, and expects a Keystone config object.

You can find all the config options in our docs here: https://keystonejs.com/docs/apis/config
*/

import { config } from '@keystone-6/core';
import 'dotenv/config';
// Look in the schema file for how we define our lists, and how users interact with them through graphql or the Admin UI
import { lists } from './schema';

// Keystone auth is configured separately - check out the basic auth setup we are importing from our auth file.
import { withAuth, session } from './auth';
import { insertSeedData } from './seed-data';

const databaseURL = process.env.DATABASE_URL;
const frontendURL = process.env.FRONTEND_URL!;
export default withAuth(
  // Using the config function helps typescript guide you to the available options.
  config({
    // the db sets the database provider - we're using sqlite for the fastest startup experience
    db: {
      
      provider: 'postgresql' || 'sqlite',
      url: databaseURL || 'file:./keystone.db',
      async onConnect(context) {
        console.log('connected to the database!');
        if(process.argv.includes('--seed-data')){

          await insertSeedData(context.prisma);
        }
      },
    },
    // This config allows us to set up features of the Admin UI https://keystonejs.com/docs/apis/config#ui
    ui: {
      // For our starter, we check that someone has session data before letting them see the Admin UI.
      isAccessAllowed: (context) => !!context.session?.data,
    },
    lists,
    session,
    server: {
      cors: {
        origin: frontendURL || 'http://localhost:7777',
        credentials: true,
      },
    },
  })
);
