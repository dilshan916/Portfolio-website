import { defineField, defineType } from 'sanity';

export const socialType = defineType({
    name: 'social',
    title: 'Social Links',
    type: 'document',
    fields: [
        defineField({
            name: 'github',
            title: 'GitHub URL',
            type: 'url',
        }),
        defineField({
            name: 'linkedin',
            title: 'LinkedIn URL',
            type: 'url',
        }),
        defineField({
            name: 'facebook',
            title: 'Facebook URL',
            type: 'url',
        }),
        defineField({
            name: 'freelancer',
            title: 'Freelancer URL',
            type: 'url',
        }),
        defineField({
            name: 'fiverr',
            title: 'Fiverr URL',
            type: 'url',
        }),
        defineField({
            name: 'phone',
            title: 'Phone Number',
            type: 'string',
        }),
    ],
});
