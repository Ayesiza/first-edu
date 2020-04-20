import React,{ Component} from 'react';
import Navbar from './components/navbar';
// import Counters from './components/counters'
import TodoItem from './components/todoItems'
import Footer from './components/footer'
import './App.css';

class App extends Component {
  render(){
  return(
  <React.Fragment>
 <Navbar />
 <main className="container-fluid wrapper">
 <div className=' todo-list'>
<TodoItem />
<TodoItem />
<TodoItem />
<TodoItem />
 </div>
 </main>
 <Footer />
 
 </React.Fragment>
  );
}
}

export default App;
