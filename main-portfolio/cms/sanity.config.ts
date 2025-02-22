import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {I18nFields} from 'sanity-plugin-i18n-fields'

export default defineConfig({
  name: 'default',
  title: 'portofolio',

  projectId: '5jkamrnf',
  dataset: 'production',

  plugins: [
    structureTool(),
    visionTool(),
    I18nFields({
      locales: [
        {
          code: 'id',
          label:"🇮🇩",
          title: 'Indonesian',
          default: true,
        },
        {
          code: 'en',
          label: 'en',
          title: 'English',
        },
      ],
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
