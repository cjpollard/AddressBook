import { Component, Event, EventEmitter, State, Prop } from '@stencil/core';
import { Contact } from '../../contact';

@Component({
  tag: 'contact-form',
  styleUrl: 'contact-form.scss'
})
export class ContactForm {

  @Prop() contact: Contact;

  @Event() newContact: EventEmitter;
  @Event() updateContact: EventEmitter;

  @State() id: number;
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
  @State() editing: boolean;


  componentDidUpdate() {
    // If we're editing a contact, fill in the values
    if(this.contact && this.contact.email !== this.email) {
      this.editing = true;
      this.id = this.contact.id;
      this.firstname = this.contact.firstname;
      this.surname = this.contact.surname;
      this.email = this.contact.email;
      this.mobile = this.contact.mobile === null ? '' : this.contact.mobile;
      this.address1 = this.contact.address1 === null ? '' : this.contact.address1;
      this.address2 = this.contact.address2 === null ? '' : this.contact.address2;
      this.town = this.contact.town === null ? '' : this.contact.town;
      this.county = this.contact.county === null ? '' : this.contact.county;
      this.country = this.contact.country === null ? '' : this.contact.country;
      this.postcode = this.contact.postcode === null ? '' : this.contact.postcode;
      this.phone = this.contact.phone === null ? '' : this.contact.phone;
      this.dob = this.contact.dob === null ? '' : this.contact.dob;
    }
  }

  handleChange = (e) => {
    this[e.target.name] = e.target.value;
  }

  // Emits to updateContact event handler in site.tsx
  handleEditContact = () => {
    this.updateContact.emit({
      id: this.id,
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
    this.resetForm();
  }

  // Emits to newContact event handler in site.tsx
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
    this.resetForm();
  }

  resetForm() {
    this.id = 0;
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
        {!this.editing && <p>Add new contact</p>}
        {this.editing && <p>Edit contact</p>}
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
        {!this.editing && <button onClick={this.handleNewContact}>Add</button>}
        {this.editing && <button onClick={this.handleEditContact}>Update</button>}
      </div>
    );
  }
}