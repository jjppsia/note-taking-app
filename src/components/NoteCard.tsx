import { Badge, Card, Stack } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styles from '../css/NoteCard.module.css'
import { NoteCardProps } from './types'

function NoteCard({ id, title, tags }: NoteCardProps) {
  return (
    <Card
      as={Link}
      to={`/${id}`}
      className={`h-100 text0reset text-decoration-none ${styles.card}`}
    >
      <Card.Body>
        <Stack
          className='align-items-center justify-content-center h-100'
          gap={2}
        >
          <Card.Title className='text-dark'>{title}</Card.Title>
          {tags.length > 0 && (
            <Stack
              className='justify-content-center flex-wrap'
              gap={1}
              direction='horizontal'
            >
              {tags.map((tag) => (
                <Badge bg='success' key={tag.id} className='text-truncate'>
                  {tag.label}
                </Badge>
              ))}
            </Stack>
          )}
        </Stack>
      </Card.Body>
    </Card>
  )
}

export default NoteCard
