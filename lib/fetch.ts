export const fetchStrapi = async ({
  resourceName,
  method = 'GET',
  body = {},
  type = 'content',
  headers = {},
}: {
  resourceName: string;
  method?: 'GET' | 'POST' | 'PUT';
  body?: object;
  type?: 'auth' | 'content';
  headers?: HeadersInit;
}) => {
  const response = await fetch(
    `/api/${resourceName}`,
    {
      method,
      body:
        method !== 'GET'
          ? JSON.stringify(
              type === 'content'
                ? {
                    data: body,
                  }
                : body
            )
          : undefined,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
        ...headers,
      },
    }
  );

  if (!response.ok) {
    throw new Error('Failed to fetch resource name');
  }
  const jsonResponse = await response.json();
  return jsonResponse;
};
