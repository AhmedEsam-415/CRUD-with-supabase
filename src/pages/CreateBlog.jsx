import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../utils/supabase';

const CreateBlog = () => {
  const navigate = useNavigate();

  const [blogData, setBlogData] = useState({
    title: '',
    description: '',
  });

  const handleSave = async (e) => {
    e.preventDefault();

    // هنا هتحط كود سوبابيز لاحقاً
    const { error } = await supabase.from('Blog').insert([blogData]).select();

    if (!error) {
      navigate('/');
    } else {
      console.log(error.message);
    }
  };

  return (
    <div>
      <h2>Create New Blog</h2>
      <form
        onSubmit={handleSave}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          maxWidth: '400px',
        }}
      >
        <input
          type="text"
          placeholder="Title"
          required
          value={blogData.title}
          onChange={(e) => setBlogData({ ...blogData, title: e.target.value })}
          style={{ padding: '8px' }}
        />
        <textarea
          placeholder="Description"
          value={blogData.description}
          onChange={(e) =>
            setBlogData({ ...blogData, description: e.target.value })
          }
          required
          style={{ padding: '8px' }}
        />
        <button
          type="submit"
          style={{
            padding: '10px',
            backgroundColor: '#007bff',
            color: 'white',
          }}
        >
          Save Blog
        </button>
      </form>
    </div>
  );
};

export default CreateBlog;
