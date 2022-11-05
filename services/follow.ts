import { API_URL } from './api'
import { request } from 'utils/request'

import { Data as FollowResponse } from 'pages/api/follow'

export const getUserOfFollow = async () => {
  const url = `${API_URL}/follow`
  const users = await request<FollowResponse[], Error>(url)

  return users
}
