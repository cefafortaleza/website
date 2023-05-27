export default {
  name: 'activitiesDoc',
  title: 'Atividades do CEFA',
  type: 'document',
  singleton: true,
  fields: [
    {
      name: 'activitiesList',
      title: 'Lista de Atividades',
      type: 'array',
      of: [
        {
          name: 'activity',
          title: 'Atividade',
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Título da Atividade',
              type: 'string',
              validation: (Rule: {required: () => any}) => Rule.required(),
            },
            {
              name: 'description',
              title: 'Descrição',
              type: 'array',
              of: [
                {
                  type: 'block',
                },
              ],
            },
            {
              name: 'subActivities',
              title: 'Sub-Atividades',
              type: 'array',
              of: [
                {
                  name: 'subactivity',
                  title: 'Sub Atividade',
                  type: 'object',
                  fields: [
                    {
                      name: 'title',
                      title: 'Título da Sub Atividade',
                      type: 'string',
                      validation: (Rule: {required: () => any}) => Rule.required(),
                    },
                    {
                      name: 'subtitle',
                      title: 'Sub Título da Sub Atividade',
                      type: 'string',
                    },
                    {
                      name: 'description',
                      title: 'Descrição',
                      type: 'array',
                      of: [
                        {
                          type: 'block',
                        },
                      ],
                      validation: (Rule: {required: () => any}) => Rule.required(),
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'activitiesMobileImage',
      title: 'Imagem das Atividades Vertical (Celulares)',
      type: 'image',
      validation: (Rule: {required: () => any}) => Rule.required(),
    },{
      name: 'activitiesDesktopImage',
      title: 'Imagem das Atividades Horizontal (Computador)',
      type: 'image',
      validation: (Rule: {required: () => any}) => Rule.required(),
    },
  ],
}
