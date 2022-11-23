import { type } from 'os'

export type Tag = {
  id: string
  label: string
}

export type NoteData = {
  title: string
  content: string
  tags: Tag[]
}

export type Note = {
  id: string
} & NoteData

export type RawNoteData = {
  title: string
  content: string
  tagIds: string[]
}

export type RawNote = {
  id: string
} & RawNoteData

/* PROPS */
export type NoteFormProps = {
  onSubmit: (data: NoteData) => void
  addTag: (tag: Tag) => void
  availableTags: Tag[]
} & Partial<NoteData>

export type NewNoteProps = {
  onSubmit: (data: NoteData) => void
  addTag: (tag: Tag) => void
  availableTags: Tag[]
}

export type NoteProps = {
  deleteNote: (id: string) => void
}

export type EditNoteProps = {
  onSubmit: (id: string, data: NoteData) => void
  addTag: (tag: Tag) => void
  availableTags: Tag[]
}

export type NoteCardProps = {
  id: string
  title: string
  tags: Tag[]
}

export type NoteListProps = {
  availableTags: Tag[]
  notes: NoteCardProps[]
  updateTag: (id: string, label: string) => void
  deleteTag: (id: string) => void
}

export type NoteLayoutProps = {
  notes: Note[]
}

export type EditTagsModalProps = {
  availableTags: Tag[]
  show: boolean
  handleHideModal: () => void
  updateTag: (id: string, label: string) => void
  deleteTag: (id: string) => void
}
