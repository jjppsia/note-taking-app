import { Badge, Button, Col, Row, Stack } from 'react-bootstrap'
import ReactMarkdown from 'react-markdown'
import { Link, useNavigate } from 'react-router-dom'
import { useNote } from '../hooks/useOutletContext'
import { NoteProps } from './types'

function Note({ deleteNote }: NoteProps) {
  const navigate = useNavigate()
  const note = useNote()

  return (
    <>
      <Row className='align-items-center mb-4'>
        <Col>
          <h1>{note.title}</h1>
          {note.tags.length > 0 && (
            <Stack className='flex-wrap' gap={1} direction='horizontal'>
              {note.tags.map((tag) => (
                <Badge key={tag.id} className='text-truncate'>
                  {tag.label}
                </Badge>
              ))}
            </Stack>
          )}
        </Col>
        <Col xs='auto'>
          <Stack gap={2} direction='horizontal'>
            <Link to={`/${note.id}/edit`}>
              <Button variant='primary'>Edit</Button>
            </Link>
            <Button
              variant='outline-danger'
              onClick={() => {
                deleteNote(note.id)
                navigate('/')
              }}
            >
              Delete
            </Button>
            <Link to='/'>
              <Button variant='outline-secondary'>Back</Button>
            </Link>
          </Stack>
        </Col>
      </Row>
      <ReactMarkdown>{note.content}</ReactMarkdown>
    </>
  )
}

export default Note
