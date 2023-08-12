import React from 'react'
import './styles/pdf.css'

const Pdf = () => {
  return (
    <>
    <div className="formbold-main-wrapper">
  {/* Author: FormBold Team */}
  {/* Learn More: https://formbold.com */}
  <div className="formbold-form-wrapper">
    <div className="mb-6 pt-4">
      <label className="formbold-form-label formbold-form-label-2">
        Upload File
      </label>
      <div className="formbold-mb-5 formbold-file-input">
        <input type="file" name="file" id="file" />
        <label htmlFor="file">
          <div>
            <span className="formbold-drop-file"> Drop files here </span>
            <span className="formbold-or"> Or </span>
            <span className="formbold-browse"> Browse </span>
          </div>
        </label>
      </div>
      <div>
        <button className="formbold-btn w-full">Send File</button>
      </div>
    </div>
  </div>
</div>
</>

  )
}

export default Pdf