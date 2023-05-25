export default {
  name: 'information',
  title: 'Informações Gerais do Cefa',
  type: 'document',
  fields: [
    {
      name: 'socialMedia',
      title: 'Redes Sociais',
      type: 'object',
      fields: [
        {
          name: 'instagram',
          title: 'Usuário do Instagram',
          type: 'string',
          validation: (Rule: {required: () => any}) => Rule.required(),
        },
        {
          name: 'facebook',
          title: 'Usuário do Facebook',
          type: 'string',
          validation: (Rule: {required: () => any}) => Rule.required(),
        },
        {
          name: 'youtube',
          title: 'Link do Canal no Youtube',
          type: 'string',
          validation: (Rule: {required: () => any}) => Rule.required(),
        },
      ],
    },
    {
      name: 'contact',
      title: 'Redes Sociais',
      type: 'object',
      fields: [
        {
          name: 'phone',
          title: 'Telefone',
          type: 'string',
          validation: (Rule: {required: () => any}) => Rule.required(),
        },
        {
          name: 'mail',
          title: 'Email para Contato',
          type: 'string',
          validation: (Rule: {required: () => any}) => Rule.required(),
        },
      ],
    },
    {
      name: 'address',
      title: 'Endereço',
      type: 'object',
      fields: [
        {
          name: 'street',
          title: 'Rua com Número',
          type: 'string',
          validation: (Rule: {required: () => any}) => Rule.required(),
        },
        {
          name: 'neighborhood',
          title: 'Bairro',
          type: 'string',
          validation: (Rule: {required: () => any}) => Rule.required(),
        },
        {
          name: 'city',
          title: 'Cidade',
          type: 'string',
          validation: (Rule: {required: () => any}) => Rule.required(),
        },
        {
          name: 'cep',
          title: 'CEP',
          type: 'string',
          validation: (Rule: {required: () => any}) => Rule.required(),
        },
      ],
    },
    {
      name: 'instagramHashtag',
      title: 'Instagram Hashtag',
      type: 'string',
      validation: (Rule: {required: () => any}) => Rule.required(),
    },
    {
      name: 'instagramEventsHashtag',
      title: 'Instagram Events Hashtag',
      type: 'string',
      validation: (Rule: {required: () => any}) => Rule.required(),
    },
  ],
}
