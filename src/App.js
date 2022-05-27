import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import UserComp from './UserComp';


function App() {
  
  return (
    <div className="App">
      <h1>Routing Setup</h1>
      <Router>
        <Link to="/">Home</Link><br />
        <Link to="/about">About</Link>
        <h1>React Dynamic Routes</h1>
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/*' element={<PageNFound />} />
          <Route path='/user/:id/:name' element={<UserComp/>}/>
        </Routes>


      </Router>
    </div>
  );
}

function Home() {
  const user = [
    { name: "Rishabh", id: 100 },
    { name: "Vishal", id: 101 },
    { name: "Vivek", id: 102 }
  ]
  return (
    <div>
      <h1>Home Page</h1>
      {user.map((item) => 
          <div><Link to={"/user/" + item.id+"/"+item.name}>{item.name}</Link></div>
        )}
    </div>
  )
}

function About() {
  return (
    <div>
      <h1>About Page</h1>
      <p>This is about page</p>
    </div>
  )
}

function PageNFound() {
  return (
    <div>
      <h1>404</h1>
      <p>Page doesn't exist</p>
    </div>
  )
}



export default App;
