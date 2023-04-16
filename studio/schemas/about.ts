export default {
  name: 'about',
  title: 'Página - Sobre o CEFA',
  type: 'document',
  fields: [
    {
      name: 'presentation',
      title: 'Apresentação',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Título',
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
        },
      ],
    },
    {
      name: 'board',
      title: 'Diretoria, Conselho Consultivo Fiscal e Coordenadorias',
      type: 'object',
      fields: [
        {
          name: 'diretoria',
          title: 'Diretoria Executiva',
          type: 'array',
          of: [
            {
              name: 'boardItem',
              title: 'Cargo',
              type: 'object',
              fields: [
                {
                  name: 'title',
                  title: 'Cargo',
                  type: 'string',
                },
                {
                  name: 'name',
                  title: 'Nome / Ocupante',
                  type: 'string',
                },
                {
                  name: 'email',
                  title: 'E-mail',
                  type: 'email',
                },
              ],
            },
          ],
        },
        {
          name: 'conselho',
          title: 'Conselho Consultivo Fiscal',
          type: 'array',
          of: [
            {
              name: 'boardItem',
              title: 'Cargo',
              type: 'object',
              fields: [
                {
                  name: 'title',
                  title: 'Cargo',
                  type: 'string',
                },
                {
                  name: 'name',
                  title: 'Nome / Ocupante',
                  type: 'string',
                },
                {
                  name: 'email',
                  title: 'E-mail',
                  type: 'email',
                },
              ],
            },
          ],
        },
        {
          name: 'coordenadores',
          title: 'Coordenadorias',
          type: 'array',
          of: [
            {
              name: 'boardItem',
              title: 'Cargo',
              type: 'object',
              fields: [
                {
                  name: 'title',
                  title: 'Cargo',
                  type: 'string',
                },
                {
                  name: 'name',
                  title: 'Nome / Ocupante',
                  type: 'string',
                },
                {
                  name: 'email',
                  title: 'E-mail',
                  type: 'email',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'estatuto',
      title: 'Estatuto',
      type: 'file',
    },
    {
      name: 'bylaws',
      title: 'Regimento Interno',
      type: 'file',
    },
  ],
}
