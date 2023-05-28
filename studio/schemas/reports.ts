export default {
  name: 'reports',
  title: 'Boletins CEFA',
  type: 'document',
  fields: [
    {
      name: 'year',
      title: 'Ano',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'yearlyReports',
          title: 'Boletins Anuais',
          fields: [
            {
              name: 'year',
              title: 'Year',
              type: 'string',
            },
            {
              name: 'reports',
              title: 'Boletins',
              type: 'array',
              of: [
                {
                  type: 'object',
                  name: 'report',
                  title: 'Boletim',
                  fields: [
                    {
                      name: 'title',
                      title: 'Título',
                      type: 'string',
                    },
                    {
                      name: 'file',
                      title: 'Boletim',
                      type: 'file',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
