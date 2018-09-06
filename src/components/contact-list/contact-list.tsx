import { Component, Event, EventEmitter, Prop } from '@stencil/core';
import { Contact } from '../../contact';

@Component({
  tag: 'contact-list',
  styleUrl: 'contact-list.scss'
})
export class ContactList {

    @Prop() contacts: Contact[];
    @Event() toggleContact: EventEmitter;
    @Event() deleteContact: EventEmitter;
    @Event() editContact: EventEmitter;

    handleDelete = (contact) => {
        this.deleteContact.emit(contact);
    }

    handleEdit = (contact) => {
        this.editContact.emit(contact);
    }

    handleToggleContact = (contact) => {
        this.toggleContact.emit(contact);
    }

    render() {
        return (
            <div class="contact-list">
                <ul>
                    {this.contacts.map(contact =>
                        <li>
                            <span onClick={this.handleToggleContact.bind(this, contact)}>{contact.firstname + " " + contact.surname}</span>
                            <ion-icon name='create' onClick={this.handleEdit.bind(this, contact)}></ion-icon>
                            <ion-icon name='trash' onClick={this.handleDelete.bind(this, contact)}></ion-icon>
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}