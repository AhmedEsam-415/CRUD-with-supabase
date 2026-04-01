import { useNavigate, useParams } from 'react-router-dom';
import { supabase } from '../utils/supabase';
import { useEffect, useState } from 'react';

const EditBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [blogData, setBlogData] = useState({ title: '', description: '' });

  // To Get Data From supaBase
  useEffect(() => {
    const getData = async () => {
      const { data, error } = await supabase.from('Blog').select().eq('id', id);
      if (error) return console.error(error.message);
      setBlogData(data[0]);
    };
    getData();
  }, [id]);

  // To Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // هنا هتعمل Update للداتا في سوبابيز لاحقاً
    const { error } = await supabase
      .from('Blog')
      .update(blogData)
      .eq('id', id)
      .select();
    if (!error) {
      navigate('/');
    } else {
      console.error(error.message);
    }
  };

  return (
    <div>
      <h2>Edit Blog #{id}</h2>
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          maxWidth: '400px',
        }}
      >
        <input
          type="text"
          value={blogData.title}
          onChange={(e) => setBlogData({ ...blogData, title: e.target.value })}
          style={{ padding: '8px' }}
        />
        <textarea
          value={blogData.description}
          onChange={(e) =>
            setBlogData({ ...blogData, description: e.target.value })
          }
          style={{ padding: '8px' }}
        />

        <button
          type="submit"
          style={{
            padding: '10px',
            backgroundColor: '#28a745',
            color: 'white',
          }}
        >
          Submit Edit
        </button>
      </form>
    </div>
  );
};

export default EditBlog;
