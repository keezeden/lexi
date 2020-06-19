const constructApiCall = (word) =>
    `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=${process.env.API_KEY}`

const getDefinition = (word) => new Promise((resolve, reject) =>
    fetch(constructApiCall(word)).then(r => resolve(r.json())).catch(reject)
)

export { getDefinition }