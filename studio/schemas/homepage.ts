export default {
  name: 'homepage',
  title: 'Página Inicial',
  type: 'document',
  fields: [
    {
      name: 'slides',
      title: 'Slides',
      type: 'array',
      of: [
        {
          name: 'slide',
          title: 'Slide',
          type: 'object',
          fields: [
            {
              name: 'quote',
              title: 'Frase do Slide',
              type: 'string',
              validation: (Rule: {required: () => any}) => Rule.required(),
            },
            {
              name: 'author',
              title: 'Autor da Frase',
              type: 'string',
              validation: (Rule: {required: () => any}) => Rule.required(),
            },
            {
              name: 'image',
              title: 'Imagem do Slide',
              type: 'image',
              validation: (Rule: {required: () => any}) => Rule.required(),
            },
          ],
        },
      ],
      validation: (Rule: {required: () => any}) => Rule.required(),
    },
    {
      name: 'bannerOne',
      title: 'Banner Grupo Musical',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Título',
          type: 'string',
          validation: (Rule: {required: () => any}) => Rule.required(),
        },
        {
          name: 'buttonTitle',
          title: 'Título do Botão',
          type: 'string',
          validation: (Rule: {required: () => any}) => Rule.required(),
        },
        {
          name: 'link',
          title: 'Link',
          type: 'string',
          validation: (Rule: {required: () => any}) => Rule.required(),
        },
        {
          name: 'image',
          title: 'imagem',
          type: 'image',
          validation: (Rule: {required: () => any}) => Rule.required(),
        },
      ],
      validation: (Rule: {required: () => any}) => Rule.required(),
    },
    {
      name: 'maisDoCefa',
      title: 'Seção Mais do Cefa',
      type: 'array',
      of: [{type: 'block'}],
      validation: (Rule: {required: () => any}) => Rule.required(),
    },
    {
      name: 'bannerTwo',
      title: 'Banner Livraria',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Título',
          type: 'string',
          validation: (Rule: {required: () => any}) => Rule.required(),
        },
        {
          name: 'buttonTitle',
          title: 'Título do Botão',
          type: 'string',
          validation: (Rule: {required: () => any}) => Rule.required(),
        },
        {
          name: 'link',
          title: 'Link',
          type: 'string',
          validation: (Rule: {required: () => any}) => Rule.required(),
        },
        {
          name: 'image',
          title: 'imagem',
          type: 'image',
          validation: (Rule: {required: () => any}) => Rule.required(),
        },
      ],
      validation: (Rule: {required: () => any}) => Rule.required(),
    },
    {
      name: 'livraria',
      title: 'Seção Livraria',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
      validation: (Rule: {required: () => any}) => Rule.required(),
    },
  ],
}
