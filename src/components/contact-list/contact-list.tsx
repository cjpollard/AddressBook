import { Component, Event, EventEmitter, Prop } from '@stencil/core';
import { Contact } from '../../contact';

@Component({
  tag: 'contact-list',
  styleUrl: 'contact-list.scss'
})
export class ContactList {

    @Prop() contacts: Contact[];
    @Event() toggleContact: EventEmitter;

    handleToggleContact = (contact) => {
        this.toggleContact.emit(contact);
    }

    render() {
        return (
            <div class="contact-list">
                <ul>
                    {this.contacts.map(contact => <li
                        onClick={this.handleToggleContact.bind(this, contact)}>{contact.firstname + " " + contact.surname}</li>)}
                </ul>
            </div>
        );
    }
}