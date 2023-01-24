import { useQuery } from 'react-query';

export interface DictionaryEntry {
  word: string;
  phonetic: string;
  phonetics: Array<{
    text: string;
    audio: string;
  }>;
  origin: string;
  meanings: Array<{
    partOfSpeech: string;
    definitions: Array<{
      definition: string;
      example: string;
    }>;
    synonyms: string[];
    antonyms: string[];
  }>;
  sourceUrls: string[];
}

interface DictionarySearchError {
  title: string;
  message: string;
  resolution: string;
}

const useDictionarySearch = (word?: string) => {
  const useQueryReturn = useQuery<DictionaryEntry[], DictionarySearchError>({
    queryKey: ['dictionary', word],
    queryFn: async () => {
      return fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`).then(
        (res) => res.json(),
      );
    },
  });

  return useQueryReturn;
};

export default useDictionarySearch;
