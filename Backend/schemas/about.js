export default {
    name: 'about',
    title: 'About',
    type: 'document',
    fields: [
      // {
      //   name: 'description',
      //   title: 'Description',
      //   type: 'text',
      // },
      {
        name: 'description',
        type: 'array',
        title: 'Description',
        of: [
          {
            type: 'block'
          }
        ]
      }
    ],
  }
  