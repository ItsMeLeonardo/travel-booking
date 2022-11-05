import { request } from 'utils/request'

import type { Feed } from 'entities/feed'
import type { FeedFilters } from 'app/(width-user-grid)/home/feed/[slug]/page'
import type { ErrorResponse as FeedError } from 'pages/api/feed/[slug]'

import { API_URL } from './api'

export const getFeed = async (filter: FeedFilters) => {
  const url = `${API_URL}/feed/${filter}`
  const histories = request<Feed[], FeedError>(url)
  return histories
}
