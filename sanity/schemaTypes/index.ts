import { type SchemaTypeDefinition } from 'sanity'
import { projectType } from './projectType'
import { socialType } from './socialType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [projectType, socialType],
}
