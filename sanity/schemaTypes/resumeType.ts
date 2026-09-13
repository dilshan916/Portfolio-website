import { defineField, defineType } from 'sanity'

export const resumeType = defineType({
    name: 'resume',
    title: 'Resume/CV PDF',
    type: 'document',
    fields: [
        defineField({
            name: 'cvFile',
            title: 'Upload your CV (PDF only)',
            type: 'file',
            options: {
                accept: '.pdf'
            }
        }),
    ],
})
