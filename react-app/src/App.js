import React, { Component } from "react";
import Navbar from "./components/navbar";
// import Counters from './components/counters'
// import TodoItem from "./components/todoItems";
import Footer from "./components/footer";
import "./App.css";
import ContactCard from "./components/contactCard";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <main className="container-fluid wrapper">
          <div className="contacts d-flex">
            <ContactCard 
            contact={{product:"Bags", imgUrl:"http://picsum.photos/200", phone:"07824266488", email:"hfhg@gmail.co"}}
            />
            <ContactCard 
            contact={{product:"Dresses", imgUrl:"https://placeimg.com/200/200/people", phone:"07824266488", email:"hfhg@gmail.co"}}
            />
            <ContactCard 
            contact={{product:"Shoes", imgUrl:"https://i.picsum.photos/id/21/200/200.jpg", phone:"07824266488", email:"hfhg@gmail.co"}}
            /> 
             <ContactCard 
            contact={{product:"Bags", imgUrl:"http://picsum.photos/200", phone:"07824266488", email:"hfhg@gmail.co"}}
            />
            <ContactCard 
            contact={{product:"Dresses", imgUrl:"https://placeimg.com/200/200/people", phone:"07824266488", email:"hfhg@gmail.co"}}
            />
            <ContactCard 
            contact={{product:"Shoes", imgUrl:"https://i.picsum.photos/id/21/200/200.jpg", phone:"07824266488", email:"hfhg@gmail.co"}}
            /> 
             <ContactCard 
            contact={{product:"Shoes", imgUrl:"https://i.picsum.photos/id/21/200/200.jpg", phone:"07824266488", email:"hfhg@gmail.co"}}
            /> 
             
          </div>
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
