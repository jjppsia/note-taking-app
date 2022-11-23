import { useEffect, useState } from 'react'

export function useLocalStorage<T>(key: string, initialValue: T | (() => T)) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    const item = localStorage.getItem(key)

    if (item === null) {
      if (initialValue instanceof Function) {
        return initialValue()
      }

      return initialValue
    }

    return JSON.parse(item)
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(storedValue))
  }, [key, storedValue])

  return [storedValue, setStoredValue] as [T, typeof setStoredValue]
}
