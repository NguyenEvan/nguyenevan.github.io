import { useRoutes, Link, Outlet } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Experiences from './pages/Experiences';
import Courses from './pages/Courses';
import Course from './components/Course'; 
import Experience from './components/Experience';
import Project from './components/Project';
import './App.css';

function Layout() {
  return (
    <div className="App">
      <div className="header">
        <div className="header-title">Evan Nguyen</div>
        <nav className="navbar">
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/experiences">Experiences</Link>
          <Link to="/courses">Courses</Link>
        </nav>
      </div>
      <div className="page-content">
        <Outlet />
      </div>
    </div>
  );
}

function App() {
  const element = useRoutes([
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: 'projects', element: <Projects /> },
        { path: 'projects/:id', element: <Project /> },

        { path: 'experiences', element: <Experiences /> },

        { path: 'experiences/:id', element: <Experience /> },

        // Courses list (table)
        { path: 'courses', element: <Courses /> },

        // ⬇︎ Course detail page: /courses/:courseId
        { path: 'courses/:courseId', element: <Course /> },
      ],
    },
  ]);

  return element;
}

export default App;
