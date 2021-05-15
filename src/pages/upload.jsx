import { useState } from 'react'

const Upload = () => {
  const [fileInputState, setFileInputState] = useState('')
  const [selectedFile, setSelectedFile] = useState('')
  const [previewSource, setPreviewSource] = useState('')

  const handleFileInputChange = e => {
    const file = e.target.files[0]
    previewFile(file)
  }

  const previewFile = file => {
    const reader = new FileReader()
    reader.readAsDataURL(file) // fungsi dari javascript
    reader.onloadend = () => {
      // fungsi dari javascript juga
      setPreviewSource(reader.result)
    }
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (!previewSource) return
    uploadImage(previewSource)
    console.log(previewSource)
  }

  const uploadImage = base64EncodedImage => {
    console.log(base64EncodedImage)
  }

  return (
    <>
      <h1>Upload</h1>
      <form onSubmit={e => handleSubmit(e)}>
        <input
          type='file'
          onChange={e => handleFileInputChange(e)}
          name='image'
          value={fileInputState}
          className='form-input'
        />
        <button type='submit'>submit</button>
      </form>
      {previewSource && <img src={previewSource} />}
    </>
  )
}

export default Upload
