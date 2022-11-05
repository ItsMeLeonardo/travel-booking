import type { FeedFilters } from 'app/(width-user-grid)/home/feed/[slug]/page'

export type Feed = {
  id: string
  placeImage: string
  userName: string
  avatar: string
  tag: FeedFilters[]
}
