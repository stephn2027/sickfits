import { integer, select, text } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';
export const Product = list({
  //TODO
  //access:
  fields: {
    name: text({ isRequired: true }),
    description: text({
      ui: {
        displayMode: 'input',
      },
    }),
    status: select({
      options: [
        { label: 'draft', value: 'DRAFT' },
        { label: 'available', value: 'AVAILABLE' },
        { label: 'unavailable', value: 'UNAVAILABLE' },
      ],
      defaultValue: 'DRAFT',
      ui: {
        displayMode: 'segmented-control',
        createView: { fieldMode: 'hidden' },
      },
    }),
    price: integer(),
    //TODO: photo
  },
});
