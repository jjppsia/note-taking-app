import { Button, Col, Form, Modal, Row, Stack } from 'react-bootstrap'
import { EditTagsModalProps } from './types'

function EditTagsModal({
  availableTags,
  show,
  handleHideModal,
  updateTag,
  deleteTag,
}: EditTagsModalProps) {
  return (
    <Modal show={show} onHide={handleHideModal}>
      <Modal.Header closeButton>
        <Modal.Title>Edit tags</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Stack gap={2}>
            {availableTags.map((tag) => (
              <Row key={tag.id}>
                <Col>
                  <Form.Control
                    type='text'
                    value={tag.label}
                    onChange={(e) => updateTag(tag.id, e.target.value)}
                  />
                </Col>
                <Col xs='auto'>
                  <Button
                    variant='outline-danger'
                    onClick={() => deleteTag(tag.id)}
                  >
                    &times;
                  </Button>
                </Col>
              </Row>
            ))}
          </Stack>
        </Form>
      </Modal.Body>
    </Modal>
  )
}

export default EditTagsModal
