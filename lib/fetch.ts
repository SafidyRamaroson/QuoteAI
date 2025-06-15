export const fetchResource = async ({
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
    `${process.env.NEXT_PUBLIC_API_URL}/api/${resourceName}`,
    {
      method,
      body:
        method !== 'GET'
          ? JSON.stringify(
            body
          )
          : undefined,
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
    }
  );

  console.log('response', response);

  if (!response.ok) {
    throw new Error('Failed to fetch resource name');
  }
  const jsonResponse = await response.json();
  return jsonResponse;
};
