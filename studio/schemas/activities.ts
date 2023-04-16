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
                    {
                      name: 'hours',
                      title: 'Horários',
                      type: 'array',
                      of: [
                        {
                          name: 'horario',
                          title: 'Horário',
                          type: 'object',
                          fields: [
                            {
                              name: 'dayOfWeek',
                              title: 'Dia da Semana',
                              type: 'string',
                              options: {
                                list: [
                                  'Segunda',
                                  'Terça',
                                  'Quarta',
                                  'Quinta',
                                  'Sexta',
                                  'Sábado',
                                  'Domingo',
                                ],
                              },
                              validation: (Rule: {required: () => any}) => Rule.required(),
                            },
                            {
                              name: 'time',
                              title: 'Hora',
                              type: 'string',
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
          ],
        },
      ],
    },
  ],
}
