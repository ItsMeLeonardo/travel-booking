import { request } from 'utils/request'

import { History } from 'entities/history'

import { API_URL } from './api'

export const getHistories = async () => {
  const url = `${API_URL}/history`
  const histories = request<History[], Error>(url)
  return histories
}
