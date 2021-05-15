import { useRef, useState } from 'react'

export default function ImageUploader() {
  const fileSelect = useRef(null)

  const [image, setImage] = useState(null)
  const [progress, setProgress] = useState(0)

  async function handleImageUpload() {
    if (fileSelect) {
      fileSelect.current.click()
    }
  }

  function uploadFile(file) {
    const url = `http://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUDNAME}/upload`
    const xhr = new XMLHttpRequest()
    const fd = new FormData()
    xhr.open('POST', url, true)
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest')

    // Update progress (can be used to show progress indicator)
    xhr.upload.addEventListener('progress', e => {
      setProgress(Math.round((e.loaded * 100.0) / e.total))
      console.log(Math.round((e.loaded * 100.0) / e.total))
    })

    xhr.onreadystatechange = e => {
      if (xhr.readyState == 4 && xhr.status == 200) {
        const response = JSON.parse(xhr.responseText)

        setImage(response.secure_url)
        console.log('ini', response.secure_url)
      }
    }

    fd.append(
      'upload_preset',
      process.env.NEXT_PUBLIC_CLOUDINARY_UNSIGNED_UPLOAD_PRESET
    )
    fd.append('tags', 'browser_upload')
    fd.append('file', file)
    xhr.send(fd)
  }

  function handleFiles(files) {
    for (let i = 0; i < files.length; i++) {
      console.log(files[i])
      uploadFile(files[i])
    }
  }

  return (
    <div
      className='bg-gray-200 border-4 border-dashed border-gray-400 rounded-lg'
      style={{ height: 400, width: 600 }}
    >
      <form className='flex justify-center items-center h-full'>
        <input
          ref={fileSelect}
          type='file'
          accept='image/*'
          style={{ display: 'block' }}
          onChange={e => handleFiles(e.target.files)}
        />
        {/* <button onClick={handleImageUpload} type='button'>
          Browse
        </button> */}
      </form>
    </div>
  )
}
