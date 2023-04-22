import React, { useState } from 'react'
import bgImg from '../assets/img1.jpg';
import { useForm } from 'react-hook-form';

export default function Form() {

  const { register, handleSubmit, watch, formState: { errors } } = useForm()
  const onSubmit = data => console.log(data);
  const [fileData, setFileData] = useState(null);

  const handleFilePreview = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setFileData(reader.result);
    };
    reader.readAsDataURL(file);
  };


  return (
    <section>
      <div className="register">
        <div className="col-1">
          <h2>ADMIN DASHBOARD</h2>
          <span>Add the Podcast</span>

          <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
            <input type="text" {...register("name")} placeholder='Podcast Name' />
            <input type="text" {...register("description")} placeholder='Podcast Description' />
            <select {...register("category")}>
              <option value="audio">Audio</option>
              <option value="video">Video</option>
            </select>
            <input type="text" {...register("speaker")} placeholder='Name of the Speaker' />

            <input
              type="file"
              {...register("myFile", {
                required: true,
                validate: {
                  acceptedFormats: (value) =>
                    ["audio/mpeg", "audio/mp3", "video/mp4"].includes(value[0].type),
                },
              })}
              accept=".mp3,.mp4"
              onChange={handleFilePreview}
            />
            {errors.myFile && <span>This field is required</span>}

            <button className='btn'>Sign In</button>
          </form>

        </div>
        <div className="col-2">
          {fileData ? (
            <div>

              <video controls style={{ width: "300px", height: "300px" }}>
                <source src={fileData} type="video/mp4" />
              </video>
            </div>
          ) : (
            <img src={bgImg} alt="" style={{ width: "300px", height: "300px" }} />
          )}
        </div>
      </div>
    </section>
  )
}
