import { ProcessedSponsor } from "./processed-sponsor"

export type RecommendationSponsor = {
  sponsor: {
    id: string
  },
  similarSponsors: ProcessedSponsor[]
}
