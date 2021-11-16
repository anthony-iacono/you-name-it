export default function getSynonyms(keyword) {
  return fetch(`https://www.dictionaryapi.com/api/v3/references/thesaurus/json/${keyword}?key=eea1834b-5c27-4dff-8bdf-54448122d3cc`)
    .then((res) => res.json())
    .then((data) => data.reduce((acc, datum) => {
      const synonymsFound = [];
      if (datum.meta.id === keyword) {
        datum.meta.syns.forEach((synonyms) => {
          synonyms.forEach((synonym) => {
            if (!synonymsFound.includes(synonym)) {
              synonymsFound.push(synonym);
            }
          });
        });
      }
      return acc.concat(synonymsFound);
    }, []));
}
