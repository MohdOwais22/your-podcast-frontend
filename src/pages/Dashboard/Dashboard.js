import React, { useEffect, useState } from 'react';
import bgImg from './img1.jpg';
import './Dashboard.css';
import { useDispatch, useSelector } from 'react-redux';
import { uploadPodcast } from '../../actions/podcast';
import { Toaster, toast } from 'react-hot-toast';

export default function Dashboard() {
  const { loading, error, podcast } = useSelector((state) => state.podcast);

  console.log(podcast, error, loading);

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: '',
    speaker: '',
    file: null,
  });

  useEffect(() => {
    if (podcast) {
      toast.success('Podcast Uploaded Successfully');
    }
    if (error) {
      toast.error(error);
    }
    dispatch({ type: 'clearError' });
    dispatch({ type: 'clearMessage' });
  }, [podcast]);

  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    try {
      dispatch(uploadPodcast(formData));
      setFormData({
        name: '',
        description: '',
        category: '',
        speaker: '',
        file: null,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFilePreview = (e) => {
    const file = e.target.files[0];
    console.log(file);
    const reader = new FileReader();
    reader.onload = () => {
      setFormData({
        ...formData,
        file,
      });
    };
    reader.readAsDataURL(file);
  };

  return (
    <section>
      <div className="register">
        <div className="col-1">
          <h2>ADMIN DASHBOARD</h2>
          <span>Add the Podcast</span>
          <Toaster />
          <form id="form" className="flex flex-col" onSubmit={onSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Podcast Name"
            />
            <input
              type="text"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Podcast Description"
            />
            <select
              name="category"
              value={formData.category}
              onChange={handleInputChange}
            >
              <option value="audio">Audio</option>
              <option value="video">Video</option>
            </select>
            <input
              type="text"
              name="speaker"
              value={formData.speaker}
              onChange={handleInputChange}
              placeholder="Name of the Speaker"
            />

            <input
              type="file"
              name="file"
              accept=".mp3,.mp4"
              onChange={handleFilePreview}
            />
            {formData.file === null && <span>This field is required</span>}

            <button
              disabled={formData.file === null || loading}
              className="btn"
            >
              Upload
            </button>
          </form>
        </div>
        <div className="col-2">
          {formData.file ? (
            <div>
              {formData.category === 'video' ? (
                <video controls style={{ width: '300px', height: '300px' }}>
                  <source src={formData.file} type="video/mp4" />
                </video>
              ) : (
                <audio controls style={{ width: '300px' }}>
                  <source src={formData.file} type="audio/mp3" />
                </audio>
              )}
            </div>
          ) : (
            <img
              src={bgImg}
              alt=""
              style={{ width: '300px', height: '300px' }}
            />
          )}
        </div>
      </div>
    </section>
  );
}
