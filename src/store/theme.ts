import { atom, useAtom } from 'jotai'

const timeTheme = new Date().getHours() >= 20 ? 'dark' : 'light'
export const themeAtom = atom(timeTheme, (get, set, newPrice: 'dark' | 'light') => {
  if (get(themeAtom) !== newPrice) {
    set(themeAtom, newPrice)
  }
})
export const useTheme = () => useAtom(themeAtom)
