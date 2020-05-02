import React, { Component } from "react";


class ContactCard extends Component {
  render() {
    const { imgUrl, product,phone, email} =this.props.contact
    return (
      <div className="contact-card m-2" >
        <img src={imgUrl} />
        <h3>{product} </h3>
        <p>phone:{phone}</p>
        <p>email:{email}</p>
      </div> 
    );
  }
}


export default ContactCard;
