import { Directus } from '@directus/sdk'

export const directusClient = new Directus(
  process.env.NEXT_PUBLIC_API_URL ?? '',
  {
    auth: {
      staticToken: process.env.DIRECTUS_ADMIN_TOKEN ?? '',
    },
  },
)
