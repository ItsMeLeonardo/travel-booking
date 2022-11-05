import { API_URL } from './api'

import { request } from 'utils/request'

import { Data as Saved } from 'pages/api/saved'

export const getSaved = async () => {
  const saved = await request<Saved[], Error>(`${API_URL}/saved`)
  return saved
}
