import { defineField, defineType } from 'sanity';

export const projectType = defineType({
    name: 'project',
    title: 'Projects',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Project Title',
            type: 'string',
        }),
        defineField({
            name: 'description',
            title: 'Short Description',
            type: 'text',
        }),
        defineField({
            name: 'image',
            title: 'Project Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'tags',
            title: 'Tags/Technologies',
            type: 'array',
            of: [{ type: 'string' }],
        }),
        defineField({
            name: 'link',
            title: 'Project URL',
            type: 'url',
        }),
    ],
});
