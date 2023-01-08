export async function request<Response, ReqError>(url: string, options?: RequestInit): Promise<Response | ReqError> {
  const response = await fetch(url, { ...options, cache: 'no-store' })

  if (response.status === 400) {
    const error = (await response.json()) as ReqError
    return error
  }

  return response.json() as Promise<Response>
}
