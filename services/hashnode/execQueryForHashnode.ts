export const execQueryForHashnode = async (query: string, variables = {}) => {
  const data = await fetch('https://gql.hashnode.com', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  return data.json();
};
