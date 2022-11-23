import { NoteForm } from '.'
import { NewNoteProps } from './types'

function NewNote({ onSubmit, addTag, availableTags }: NewNoteProps) {
  return (
    <>
      <h1 className='mb-4'>New Note</h1>
      <NoteForm
        onSubmit={onSubmit}
        addTag={addTag}
        availableTags={availableTags}
      />
    </>
  )
}

export default NewNote
