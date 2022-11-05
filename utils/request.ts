const nextOpts = {
  next: {
    revalidate: 1 * 60 * 60,
  },
}

export async function request<Response, ReqError>(url: string, options?: RequestInit): Promise<Response | ReqError> {
  const response = await fetch(url, { ...options, ...nextOpts })

  if (response.status === 400) {
    const error = (await response.json()) as ReqError
    return error
  }

  return response.json() as Promise<Response>
}
