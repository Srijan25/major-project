import React from 'react'
import './styles/pdf.css';


const Pdf = () => {
    return (
        <>
        <input type="file" id="pdf-upload" accept="application/pdf" />
        <button id="zoom-in">Zoom In</button>
        <div id="zoom-percent">60</div>
        <button id="zoom-out">Zoom Out</button>
        <button id="zoom-reset">Reset Zoom</button>
        <div id="pages" />

      </>
      
    )
}

export default Pdf
