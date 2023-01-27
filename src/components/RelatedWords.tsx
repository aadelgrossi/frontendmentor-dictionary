import { Dispatch, SetStateAction } from 'react';

interface RelatedWordsProps {
  words?: string[];
  setWord: Dispatch<SetStateAction<string>>;
  type: string;
}

const RelatedWords = ({ words, setWord, type }: RelatedWordsProps) => {
  if (!words?.length) return null;
  return (
    <div className="flex flex-row text-[16px] md:text-[20px]">
      <p className="text-accent-500 mr-6 ">{type}</p>

      <div className="flex flex-row gap-2 flex-wrap">
        {words.map((word, idx) => {
          return (
            <button
              onClick={() => setWord(word)}
              key={idx}
              className="font-semibold text-primary hover:underline cursor-pointer"
            >
              {word}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default RelatedWords;
