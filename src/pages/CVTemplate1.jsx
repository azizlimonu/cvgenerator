import React, { useRef } from 'react'
import { useReactToPrint } from 'react-to-print'
import CVForm from '../components/CVForm'
import CVPreview from '../components/CVPreview'
import style from './CVTemplate1.module.css'

const CVTemplate1 = () => {
  const previewRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => previewRef.current
  });

  return (
    <div className={style.contain} >
      <CVForm onPrint={handlePrint} />
      <CVPreview ref={previewRef} />
    </div>
  )
}

export default CVTemplate1;