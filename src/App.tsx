import 'bootstrap/dist/css/bootstrap.min.css'
import { useMemo } from 'react'
import { Container } from 'react-bootstrap'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import { EditNote, NewNote, Note, NoteLayout, NoteList } from './components'
import { NoteData, RawNote, Tag } from './components/types'
import { useLocalStorage } from './hooks/useLocalStorage'

function App() {
  const [notes, setNotes] = useLocalStorage<RawNote[]>('notes', [])
  const [tags, setTags] = useLocalStorage<Tag[]>('tags', [])

  const noteWithtTags = useMemo(
    () =>
      notes.map((note) => ({
        ...note,
        tags: tags.filter((tag) => note.tagIds.includes(tag.id)),
      })),
    [notes, tags]
  )

  const createNote = ({ tags, ...data }: NoteData) => {
    setNotes((prevNotes) => [
      ...prevNotes,
      { ...data, id: uuidv4(), tagIds: tags.map((tag) => tag.id) },
    ])
  }

  const updateNote = (id: string, { tags, ...data }: NoteData) => {
    setNotes((prevNotes) => {
      return prevNotes.map((note) => {
        if (note.id === id) {
          return {
            ...note,
            ...data,
            tagIds: tags.map((tag) => tag.id),
          }
        }

        return note
      })
    })
  }

  const deleteNote = (id: string) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id))
  }

  const addTag = (tag: Tag) => {
    setTags((prevTags) => [...prevTags, tag])
  }

  const updateTag = (id: string, label: string) => {
    setTags((prevTags) => {
      return prevTags.map((prevTag) => {
        if (prevTag.id === id) {
          return { ...prevTag, label }
        }

        return prevTag
      })
    })
  }

  const deleteTag = (id: string) => {
    setTags((prevTags) => prevTags.filter((tag) => tag.id !== id))
  }

  return (
    <BrowserRouter>
      <Container className='my-4'>
        <Routes>
          <Route
            path='/'
            element={
              <NoteList
                notes={noteWithtTags}
                availableTags={tags}
                updateTag={updateTag}
                deleteTag={deleteTag}
              />
            }
          />
          <Route
            path='/new'
            element={
              <NewNote
                onSubmit={createNote}
                addTag={addTag}
                availableTags={tags}
              />
            }
          />
          <Route path='/:id' element={<NoteLayout notes={noteWithtTags} />}>
            <Route index element={<Note deleteNote={deleteNote} />} />
            <Route
              path='edit'
              element={
                <EditNote
                  onSubmit={updateNote}
                  addTag={addTag}
                  availableTags={tags}
                />
              }
            />
          </Route>
          <Route path='*' element={<h1>Not Found</h1>} />
        </Routes>
      </Container>
    </BrowserRouter>
  )
}

export default App
