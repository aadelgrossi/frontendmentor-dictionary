import { Switch } from '@headlessui/react';
import clsx from 'clsx';
import { useEffect } from 'react';

import Moon from '../icons/Moon';
import useUserPreferenceStore from '../store';

const ThemeToggle = () => {
  const theme = useUserPreferenceStore((state) => state.theme);
  const setTheme = useUserPreferenceStore((state) => state.setTheme);

  const checked = theme === 'dark';

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.add(theme);
    root.classList.remove(checked ? 'light' : 'dark');
  }, [theme]);

  const onChange = () => {
    setTheme(checked ? 'light' : 'dark');
  };

  return (
    <div className="flex flex-row items-center gap-5">
      <Switch
        checked={checked}
        onChange={onChange}
        className={clsx({
          'relative inline-flex h-5 w-10 items-center rounded-full': true,
          'bg-primary': checked,
          'bg-gray-500': !checked,
        })}
      >
        <span
          className={clsx({
            'inline-block h-[14px] w-[14px] transform rounded-full bg-white transition':
              true,
            'translate-x-6': checked,
            'translate-x-1': !checked,
          })}
        />
      </Switch>
      <Moon
        className={clsx({
          '[&>path]:stroke-primary': checked,
        })}
      />
    </div>
  );
};

export default ThemeToggle;
