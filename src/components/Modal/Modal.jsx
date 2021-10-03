import { useEffect } from 'react'
import styles from './Modal.module.css'

const Modal = props => {
  const closeOnEscapeKeyDown = e => {
    if ((e.charCode || e.keyCode) === 27) {
      props.onClose()
    }
  }

  useEffect(() => {
    document.body.addEventListener('keydown', closeOnEscapeKeyDown)
    return function cleanup() {
      document.body.removeEventListener('keydown', closeOnEscapeKeyDown)
    }
  }, [])

  return (
    <div
      className={`${styles.modal} ${props.show ? styles.show : ''}`}
      onClick={props.onClose}
    >
      <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <h4 className={styles.modalTitle}>{props.title}</h4>

          <h4 className={styles.modalCancel} onClick={props.onClose}>
            x
          </h4>
        </div>
        <div className={styles.modalBody}>{props.body}</div>
      </div>
      )
    </div>
  )
}

export default Modal
