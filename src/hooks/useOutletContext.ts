import { useOutletContext } from 'react-router-dom'
import { Note } from '../components/types'

export function useNote() {
  return useOutletContext<Note>()
}
