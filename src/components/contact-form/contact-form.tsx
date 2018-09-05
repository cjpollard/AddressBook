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
    console.log(e.target.name, e.target.value);
    this[e.target.name] = e.target.value;
    console.log(this.firstname);
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
        <input type="text" class="form-control" name="firstname" required placeholder="First name" value={this.firstname} onChange={(e) => this.handleChange(e)} />
        <input type="text" class="form-control" name="surname" required placeholder="Surname" value={this.surname} onChange={(e) => this.handleChange(e)} />
        <input type="email" class="form-control" name="email" required placeholder="Email" value={this.email} onChange={(e) => this.handleChange(e)} />
        <input type="tel" class="form-control" name="mobile" placeholder="Mobile no." value={this.mobile} onChange={(e) => this.handleChange(e)} />
        <input type="tel" class="form-control" name="phone" placeholder="Phone no." value={this.phone} onChange={(e) => this.handleChange(e)} />
        <input type="text" class="form-control" name="address1" placeholder="House name/no." value={this.address1} onChange={(e) => this.handleChange(e)} />
        <input type="text" class="form-control" name="address2" placeholder="Street" value={this.address2} onChange={(e) => this.handleChange(e)} />
        <input type="text" class="form-control" name="town" placeholder="Town/City" value={this.town} onChange={(e) => this.handleChange(e)} />
        <input type="text" class="form-control" name="county" placeholder="County" value={this.county} onChange={(e) => this.handleChange(e)} />
        <input type="text" class="form-control" name="country" placeholder="Country" value={this.country} onChange={(e) => this.handleChange(e)} />
        <input type="text" class="form-control" name="postcode" placeholder="Postcode" value={this.postcode} onChange={(e) => this.handleChange(e)} />
        <input type="date" class="form-control" name="dob" placeholder="Date of birth" value={this.dob} onChange={(e) => this.handleChange(e)} />
        <button onClick={this.handleNewContact}>Add</button>
      </div>
    );
  }
}