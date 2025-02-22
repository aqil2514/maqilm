import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      description: 'Untuk slug',
      type: 'string',
    }),
    defineField({
      name: 'displayTitle',
      title: 'Display Title',
      description: 'Ini akan digunakan untuk judul',
      type: 'i18n.string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'},
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
    defineField({
      name: 'i18nBlockContent',
      title: 'Localized Block Content',
      type: 'object',
      fields: [
        defineField({
          name: 'en',
          title: 'English',
          type: 'array',
          of: [
            {
              type: 'block',
              marks: {
                annotations: [
                  {
                    name: 'link',
                    title: 'External Link',
                    type: 'object',
                    fields: [
                      {
                        name: 'href',
                        title: 'URL',
                        type: 'url',
                      },
                      {
                        name: 'target',
                        title: 'Open in new tab?',
                        type: 'boolean',
                        initialValue: true,
                      },
                    ],
                  },
                ],
              },
            },
            {type: 'image'},
          ],
        }),
        defineField({
          name: 'id',
          title: 'Bahasa Indonesia',
          type: 'array',
          of: [
            {
              type: 'block',
              marks: {
                annotations: [
                  {
                    name: 'link',
                    title: 'External Link',
                    type: 'object',
                    fields: [
                      {
                        name: 'href',
                        title: 'URL',
                        type: 'url',
                      },
                      {
                        name: 'target',
                        title: 'Open in new tab?',
                        type: 'boolean',
                        initialValue: true,
                      },
                    ],
                  },
                ],
              },
            },
            {type: 'image'},
          ],
        }),
      ],
    }),
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
