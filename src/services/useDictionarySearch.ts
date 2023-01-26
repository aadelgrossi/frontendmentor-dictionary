import axios from 'axios';
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

export interface DictionarySearchError {
  title: string;
  message: string;
  resolution: string;
}

type CustomError = {
  response?: {
    data?: DictionarySearchError;
  };
};

const useDictionarySearch = (word?: string) => {
  const useQueryReturn = useQuery({
    queryKey: ['dictionary', word],
    retry: false,
    enabled: !!word,
    queryFn: async () => {
      return axios.get<DictionaryEntry[]>(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`,
      );
    },
  });
  const error = useQueryReturn.error as CustomError;

  return { ...useQueryReturn, error };
};

export default useDictionarySearch;
