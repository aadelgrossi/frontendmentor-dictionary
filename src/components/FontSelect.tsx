import { Listbox, Transition } from '@headlessui/react';
import clsx from 'clsx';
import { Fragment } from 'react';

import chevronDown from '../assets/icon-arrow-down.svg';
import ChevronDown from '../icons/ChevronDown';
import useUserPreferenceStore from '../store';

const options = [
  { value: 'sans', label: 'Sans Serif' },
  { value: 'serif', label: 'Serif' },
  { value: 'mono', label: 'Mono' },
];

const FontSelect = () => {
  const font = useUserPreferenceStore((state) => state.font);
  const setFont = useUserPreferenceStore((state) => state.setFont);

  return (
    <Listbox value={font} onChange={setFont}>
      <div className="relative">
        <Listbox.Button className="relative cursor-pointer">
          {({ open }) => (
            <span
              className={`flex text-[18px] items-center flex-row gap-[18px] font-bold font-${font}`}
            >
              {options.find((option) => option.value === font)?.label}
              <ChevronDown
                className={clsx({
                  'transition-transform ease-in-out': true,
                  '-scale-y-100': open,
                })}
              />
            </span>
          )}
        </Listbox.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-150"
          enterFrom="-translate-y-3"
          enterTo="translate-y-0"
          leave="transition ease-in duration-100"
          leaveFrom="translate-y-0 opacity-100"
          leaveTo="-translate-y-2 opacity-0"
        >
          <Listbox.Options
            className="z-10 flex flex-col min-w-[180px] gap-4 absolute
               mt-1 p-6 top-9 right-0
               rounded-2xl bg-white dark:bg-black
               shadow-[0px_5px_30px] shadow-black/20 dark:shadow-primary/70
               font-bold"
          >
            {options.map((option) => (
              <Listbox.Option
                className={clsx({
                  'cursor-pointer hover:text-primary': true,
                  'font-mono': option.value === 'mono',
                  'font-sans': option.value === 'sans',
                  'font-serif': option.value === 'serif',
                })}
                key={option.value}
                value={option.value}
              >
                {option.label}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
};

export default FontSelect;
