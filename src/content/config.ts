import { defineCollection, z } from 'astro:content';

const servicesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    heroImage: z.string().optional(),
    features: z.array(z.string()),
    benefits: z.array(z.string()).optional(),
  }),
});

const locationsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    city: z.string(),
    title: z.string(), // e.g. "Laser Cutting Services in Mississauga"
    description: z.string(),
    coordinates: z.object({
      lat: z.number(),
      lng: z.number()
    })
  })
});

export const collections = {
  'services': servicesCollection,
  'locations': locationsCollection,
};
