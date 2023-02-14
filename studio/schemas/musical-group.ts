export default {
  name: 'musicalGroup',
  title: 'Página - Grupo Musical',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Imagem do Banner',
      type: 'image',
      validation: (Rule: {required: () => any}) => Rule.required(),
    },
    {
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: (Rule: {required: () => any}) => Rule.required(),
    },
    {
      name: 'content',
      title: 'Conteúdo',
      type: 'array',
      of: [{type: 'block'}],
      validation: (Rule: {required: () => any}) => Rule.required(),
    },
  ],
}
