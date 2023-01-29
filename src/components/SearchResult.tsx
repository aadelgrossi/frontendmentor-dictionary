import { Dispatch, ReactNode, SetStateAction } from 'react';

import link from '../assets/icon-new-window.svg';
import { DictionaryEntry } from '../services/useDictionarySearch';
import PlayButton from './PlayButton';
import RelatedWords from './RelatedWords';

interface SearchResultProps {
  setWord: Dispatch<SetStateAction<string>>;
  result: DictionaryEntry;
}

const SectionTitle = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-row items-center gap-3">
      <span className="italic font-bold text-[16px] md:text-[20px]">{children}</span>
      <hr className="w-full" />
    </div>
  );
};

const SearchResult = (props: SearchResultProps) => {
  const { result, setWord } = props;
  const { word, meanings, sourceUrls, phonetics } = result;

  const phonetic = phonetics.find((item) => item.audio);

  return (
    <div id="container" className="mt-6 md:mt-12 flex flex-col">
      <div id="word" className="flex flex-row justify-between">
        <div>
          <h1 className="font-bold text-[32px] md:text-[64px]">{word}</h1>
          <p className="text-primary text-md md:text-2xl font-sans">{phonetic?.text}</p>
        </div>
        <PlayButton src={phonetic?.audio} />
      </div>

      {meanings.map((meaning) => {
        const { partOfSpeech, definitions, synonyms, antonyms } = meaning;
        return (
          <div id={`meaning-${partOfSpeech}`} className="mt-8" key={partOfSpeech}>
            <SectionTitle>{meaning.partOfSpeech}</SectionTitle>
            <p className="text-accent-500 mt-6 mb-4 md:text-xl">Meaning</p>

            <ul className="list-disc marker:text-primary text-[15px] list-inside leading-6 last:mb-0">
              {definitions.map((definition, idx) => {
                return (
                  <li className="ml-[22px] mb-3 text-[15px] md:text-lg" key={idx}>
                    {definition.definition}
                  </li>
                );
              })}
            </ul>

            {definitions.map((definition, idx) => {
              if (!definition.example) return;
              return (
                <p key={idx} className="ml-4 mt-[13px] text-accent-500 md:text-[18px]">
                  &quot;{definition.example}&quot;
                </p>
              );
            })}

            <RelatedWords
              className="mt-16"
              words={synonyms}
              setWord={setWord}
              type="Synonyms"
            />
            <RelatedWords words={antonyms} setWord={setWord} type="Antonyms" />
          </div>
        );
      })}

      <hr className="my-6" />

      <div
        className="flex flex-col gap-1 items-start
        md:flex-row md:gap-5 md:items-center"
      >
        <p className="underline text-gray-500">Source</p>
        {sourceUrls.map((url) => {
          return (
            <a
              key={url}
              href={url}
              target="_blank"
              className="flex flex-row gap-2 underline text-sm"
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
