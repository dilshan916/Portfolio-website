import { type SchemaTypeDefinition } from 'sanity'
import { projectType } from './projectType'
import { socialType } from './socialType'
import { resumeType } from './resumeType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [projectType, socialType, resumeType],
}
