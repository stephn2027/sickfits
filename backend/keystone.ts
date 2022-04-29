import { Product } from './schemas/Product';
import { createSchema } from '@keystone-next/keystone/schema';
import { statelessSessions, withItemData } from '@keystone-next/keystone/session';
import { createAuth } from '@keystone-next/auth';
import { config } from '@keystone-next/keystone/schema';
import 'dotenv/config';
import { User } from './schemas/User';


const databaseURL =
process.env.DATABASE_URL || 'mongodb://localhost/keystone-sick-fits-tutorial';

const sessionConfig = {
  maxAge: 60 * 60 * 24 * 360, // how long they stay signed in
  secret: process.env.COOKIE_SECRET,
};

const {withAuth} = createAuth({
 listKey: "User",
 identityField:'email',
 secretField: 'password',
 initFirstItem: {
   fields:['name','email','password']
   // TODO: add initial roles here 
 },
})

export default withAuth(config({
  server: {
    cors: {
      origin: [process.env.FRONTEND_URL],
      credentials: true,
    },
  },
  db: {
    adapter: 'mongoose',
    url: databaseURL,
    // todo Data seeding here
  },
  lists: createSchema({
    // schema here
    User,
    Product,
  }),
  // todo change roles here
  ui: {
    // show the UI only for people who pass this test
    isAccessAllowed: ({session}) => {
      //console.log(session);
      return !!session?.data;
    },
  },
  session: withItemData(statelessSessions(sessionConfig),{
    // GraphQl query
    User:'id',
  })
}));
