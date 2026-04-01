import { useNavigate } from 'react-router-dom';

import { useEffect, useState } from 'react';
import { supabase } from '../utils/supabase';

const Home = () => {
  const navigate = useNavigate();

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from('Blog').select();
      if (error) return console.log(error);
      setBlogs(data);
    };

    fetchData();
  }, []);

  const deleteItem = async (id) => {
    const { error } = await supabase.from('Blog').delete().eq('id', id);

    if (!error) {
      setBlogs(blogs.filter((blog) => blog.id !== id));
    } else {
      console.log(error.message);
    }
  };

  return (
    <div style={{ display: 'grid', gap: '20px' }}>
      {blogs.map((item) => (
        <div
          key={item.id}
          style={{
            border: '1px solid #ccc',
            padding: '15px',
            borderRadius: '8px',
          }}
        >
          <h1>{item.title}</h1>
          <p>{item.description}</p>
          <div style={{ display: 'flex', gap: '10px' }}>
            <button
              style={{
                backgroundColor: 'red',
                color: '#fff',
                border: 'none',
                padding: '5px 15px',
              }}
              onClick={() => deleteItem(item.id)}
            >
              Delete
            </button>
            <button
              onClick={() => navigate(`/edit/${item.id}`)}
              style={{
                backgroundColor: 'green',
                color: '#fff',
                border: 'none',
                padding: '5px 15px',
              }}
            >
              Edit
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
