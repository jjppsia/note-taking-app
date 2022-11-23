import { NoteForm } from '.'
import { useNote } from '../hooks/useOutletContext'
import { EditNoteProps } from './types'

function EditNote({ onSubmit, addTag, availableTags }: EditNoteProps) {
  const note = useNote()

  return (
    <>
      <h1 className='mb-4'>Edit Note</h1>
      <NoteForm
        title={note.title}
        content={note.content}
        tags={note.tags}
        onSubmit={(data) => onSubmit(note.id, data)}
        addTag={addTag}
        availableTags={availableTags}
      />
    </>
  )
}

export default EditNote
