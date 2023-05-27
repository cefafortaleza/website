export default {
  name: 'reports',
  title: 'Boletins CEFA',
  type: 'document',
  fields: [
    {
      name: 'reports',
      title: 'Boletins',
      type: 'array',
      of: [
        {
          type: 'object',
          title: 'Boletim',
          name: 'report',
          fields: [
            {
              name: 'title',
              title: 'Título',
              type: 'string',
            },
            {
              name: 'file',
              title: 'Arquivo',
              type: 'file',
            },
          ],
        },
      ],
    },
  ],
}
