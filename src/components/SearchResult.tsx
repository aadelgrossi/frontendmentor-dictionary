import { Dispatch, ReactNode, SetStateAction } from 'react';

import link from '../assets/icon-new-window.svg';
import play from '../assets/icon-play.svg';
import { DictionaryEntry } from '../services/useDictionarySearch';

interface SearchResultProps {
  setWord: Dispatch<SetStateAction<string>>;
  result: DictionaryEntry;
}

const SectionTitle = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-row items-center gap-3">
      <span className="italic font-bold text-md">{children}</span>
      <hr className="w-full divide-zinc-800" />
    </div>
  );
};

const SearchResult = (props: SearchResultProps) => {
  const { result, setWord } = props;
  const { word, phonetic, meanings, sourceUrls } = result;

  return (
    <div id="container" className="mt-6 flex flex-col">
      <div id="word" className="flex flex-row justify-between">
        <div>
          <h1 className="font-bold text-[32px]">{word}</h1>
          <p className="text-primary text-md">{phonetic}</p>
        </div>
        <button aria-label="play-phonetic" aria-roledescription="Play phonetic">
          <img alt="play-phonetic" src={play} />
        </button>
      </div>

      {meanings.map((meaning) => {
        const { partOfSpeech, definitions, synonyms } = meaning;
        return (
          <div id={`meaning-${partOfSpeech}`} className="mt-8" key={partOfSpeech}>
            <SectionTitle>{meaning.partOfSpeech}</SectionTitle>
            <p className="text-gray-500 mt-6 mb-4">Meaning</p>

            {definitions.map((definition, idx) => {
              return (
                <div key={idx}>
                  <ul className="list-disc marker:text-primary text-[15px] list-inside leading-6">
                    <li className="mb-3" key={idx}>
                      {definition.definition}
                    </li>
                  </ul>

                  {definition.example && (
                    <p className="ml-5 text-accent-500">
                      &quot;{definition.example}&quot;
                    </p>
                  )}
                </div>
              );
            })}

            {synonyms.length > 0 && (
              <div className="flex flex-row">
                <p className="text-gray-500 mr-6">Synonyms</p>

                <div className="flex flex-row gap-2 flex-wrap">
                  {synonyms.map((synonym, idx) => {
                    return (
                      <button
                        onClick={() => setWord(synonym)}
                        key={idx}
                        className="font-semibold text-primary hover:underline cursor-pointer"
                      >
                        {synonym}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        );
      })}

      <hr className="my-6" />

      <div className="flex flex-col gap-1">
        <p className="underline text-gray-500">Source</p>
        {sourceUrls.map((url) => {
          return (
            <a
              key={url}
              href={url}
              target="_blank"
              className="flex flex-row gap-2 underline"
              rel="noreferrer"
            >
              {url}
              <img alt="source" src={link} />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default SearchResult;
