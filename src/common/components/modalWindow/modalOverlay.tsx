import {
  FC,
  KeyboardEvent,
  KeyboardEventHandler,
  MouseEvent,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'

import ReactDOM from 'react-dom'

import s from './Modal.module.scss'

import { getNumberOfPenultimateElement } from '@/common/utils/getNumberOfPenultimateElement'

type PropsType = {
  isOpen: boolean
  children: ReactNode
  onClose?: () => void
  modalContainer?: string
}
export const ModalOverlay: FC<PropsType> = ({
  children,
  onClose,
  isOpen,
  modalContainer = '#modals',
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null)

  const [container, setContainer] = useState<Element | null>(null)

  const onEscape: KeyboardEventHandler<HTMLDivElement> = e => {
    if (e.key === 'Escape' && onClose) {
      onClose()
      e.stopPropagation()
    }
  }

  const handleClick = useCallback(
    (e: KeyboardEvent<HTMLDivElement> | MouseEvent<HTMLElement>) => {
      e.stopPropagation()

      if (e.target === containerRef.current && onClose) {
        onClose.call(null)
      }
    },
    [onClose]
  )

  useEffect(() => {
    setContainer(document.querySelector(modalContainer))
  }, [])

  useEffect(() => {
    const length = container?.childNodes.length || 0
    const nextScript = document.querySelector('#__next')

    if (containerRef.current) {
      containerRef.current.focus()
      nextScript?.setAttribute('inert', '')
    }

    if (length !== 0) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    if (length > 1) {
      container?.children[getNumberOfPenultimateElement(length)]?.setAttribute('inert', 'true')
    }

    return () => {
      if (length === 1) {
        document.body.style.overflow = 'auto'
        nextScript?.removeAttribute('inert')
      }
      ;(container?.lastElementChild as HTMLElement)?.removeAttribute('inert')
      ;(container?.lastElementChild as HTMLElement)?.focus()
    }
  }, [isOpen, container])

  if (!container || !children || !isOpen) return null

  return (
    <>
      {ReactDOM.createPortal(
        <div
          onKeyDown={onEscape}
          aria-hidden
          id="modal"
          className={s.modalBlock}
          ref={containerRef}
          onClick={handleClick}
        >
          {children}
        </div>,
        container
      )}
    </>
  )
}
