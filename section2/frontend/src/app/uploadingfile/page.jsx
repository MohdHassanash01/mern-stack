import axios from 'axios'
import React from 'react'
import toast from 'react-hot-toast'

const page = () => {

const handleUpload = (e) => {
 let file = e.target.files[0]
 const formData = new FormData()
 formData.append('file',file)
 formData.append('upload_preset','myproject01')
 formData.append('cloud_name','dgiyyhb9f')

axios.post("https://api.cloudinary.com/v1_1/dgiyyhb9f/image/upload",formData,{
  headers:{
    'Content-Type':"multipart/form-data"
  }
})
.then((result) => {
console.log(result.data);
toast.success('file upload successfully')

}).catch((err) => {
  console.log(err);
  toast.error("Failed to upload file")

})


}

  return (
    <div className='max-w-2xl mx-auto rounded-lg border-4 border-gray-300 flex justify-center'>

        <label htmlFor="uploadfile" className='text-5xl font-bold'>Upload Your file :</label>

        <input 
        id='uploadfile' 
        type="file" 
        className='hidden' 
        onChange={handleUpload}/>
      
    </div>
  )
}

export default page
