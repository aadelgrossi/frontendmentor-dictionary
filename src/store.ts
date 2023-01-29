import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Theme = 'light' | 'dark';
type Font = 'sans' | 'serif' | 'mono';

interface UserPreferenceState {
  theme: Theme;
  font: Font;
}

interface UserPreferenceStore extends UserPreferenceState {
  setTheme: (theme: Theme) => void;
  setFont: (font: Font) => void;
}

const persistedStore = persist<UserPreferenceStore>(
  (set) => ({
    font: 'serif',
    theme: 'light',
    setFont(font) {
      set({ font });
    },
    setTheme(theme) {
      set({ theme });
    },
  }),
  { name: 'dictionary-user-preferences' },
);

const useUserPreferenceStore = create(persistedStore);

export default useUserPreferenceStore;
