import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://dkhaidev.vercel.app/', // Replace with your actual domain
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    // Add more URLs if you have blog posts, etc.
  ]
}