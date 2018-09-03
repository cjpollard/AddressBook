import { Component, Event, EventEmitter, State } from '@stencil/core';

@Component({
  tag: 'contact-form',
  styleUrl: 'contact-form.scss'
})
export class ContactForm {

  @Event() newContact: EventEmitter;
  @State() firstname: string;
  @State() surname: string;
  @State() email: string;
  @State() mobile: string;
  @State() address1: string;
  @State() address2: string;
  @State() town: string;
  @State() county: string;
  @State() country: string;
  @State() postcode: string;
  @State() phone: string;
  @State() dob: string;


  handleChange = (e) => {
    this[e.target.name] = e.target.value;
  }

  handleNewContact = () => {
    this.newContact.emit({
      firstname: this.firstname,
      surname: this.surname,
      email: this.email,
      mobile: this.mobile,
      address1: this.address1,
      address2: this.address2,
      town: this.town,
      county: this.county,
      country: this.country,
      postcode: this.postcode,
      phone: this.phone,
      dob: this.dob
    });

    this.firstname = '';
    this.surname = '';
    this.email = '';
    this.mobile = '';
    this.address1 = '';
    this.address2 = '';
    this.town = '';
    this.county = '';
    this.country = '';
    this.postcode = '';
    this.phone = '';
    this.dob = '';
    
  }

  render() {
    return (
      <div class="contact-form">
        <p>Add new contact</p>
        <br/>
        <input type="text" class="form-control" placeholder="First name" value={this.firstname} onChange={this.handleChange} />
        <input type="text" class="form-control" placeholder="Surname" value={this.surname} onChange={this.handleChange} />
        <input type="email" class="form-control" placeholder="Email" value={this.email} onChange={this.handleChange} />
        <input type="tel" class="form-control" placeholder="Mobile no." value={this.mobile} onChange={this.handleChange} />
        <input type="tel" class="form-control" placeholder="Phone no." value={this.phone} onChange={this.handleChange} />
        <input type="text" class="form-control" placeholder="House name/no." value={this.address1} onChange={this.handleChange} />
        <input type="text" class="form-control" placeholder="Street" value={this.address2} onChange={this.handleChange} />
        <input type="text" class="form-control" placeholder="Town/City" value={this.town} onChange={this.handleChange} />
        <input type="text" class="form-control" placeholder="County" value={this.county} onChange={this.handleChange} />
        <input type="text" class="form-control" placeholder="Country" value={this.country} onChange={this.handleChange} />
        <input type="text" class="form-control" placeholder="Postcode" value={this.postcode} onChange={this.handleChange} />
        <input type="date" class="form-control" placeholder="Date of birth" value={this.dob} onChange={this.handleChange} />
        <button onClick={this.handleNewContact}>Add</button>
      </div>
    );
  }
}