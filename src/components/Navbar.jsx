import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '1rem',
        background: '#333',
        color: '#fff',
      }}
    >
      <Link
        to="/"
        style={{
          color: '#fff',
          textDecoration: 'none',
          fontSize: '1.5rem',
          fontWeight: 'bold',
        }}
      >
        Blog
      </Link>

      <div style={{ display: 'flex', gap: '10px' }}>
        <Link to="/create">
          <button style={{ padding: '8px 16px', cursor: 'pointer' }}>
            Create New
          </button>
        </Link>
        <Link to="/login">
          <button
            style={{
              padding: '8px 16px',
              cursor: 'pointer',
              backgroundColor: '#007bff',
              color: '#fff',
            }}
          >
            LogIN
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
