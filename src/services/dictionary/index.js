const formatApiRequest = word =>
  `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=${process.env.API_KEY}`;

const formatApiResponse = words => {
  return words.map(word => {
    const { shortdef: definitions, hwi: headWordInfo } = word;
    const { hw: name } = headWordInfo;

    return {
      name,
      definitions
    };
  });
};

const getDefinition = async word => {
  const request = formatApiRequest(word);
  const response = await fetch(request);
  const data = await response.json();
  return formatApiResponse(data);
};

export { getDefinition };
