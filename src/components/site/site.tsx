import { Component, Listen, State } from '@stencil/core';
import { Contact } from '../../contact';
import { apiInterface } from '../../utils';

@Component({
    tag: 'address-book',
    styleUrl: 'site.scss'
})
export class Site {

    @State() contacts: Contact[] = [];

    @State() contact: Contact;
    @State() id: number;

    // Setting up site events
    @Listen('deleteContact')
    deleteContact(e) {
        const id = e.detail.id;
        apiInterface.post('/api/delete', {id: id}).then(() => {
            this.fetchContacts();
        })
    }

    // Fills in form with contact details for editing
    @Listen('editContact')
    editContact(e) {
        this.contact = e.detail;
    }

    @Listen('newContact')
    newContact(e) {
        const newContact = e.detail;
        apiInterface.post('/api/add', newContact).then(() => {
            this.contacts = [...this.contacts, newContact];
        });
    }

    // Updates edited contact
    @Listen('updateContact')
    updateContact(e) {
        const contact = e.detail;
        apiInterface.post('/api/edit', contact).then(() => {
            this.fetchContacts();
        });
    }

    componentDidLoad() {
        this.fetchContacts();
    }
    
    fetchContacts() {
        apiInterface.get('/api/get').then((data) => {
            this.contacts = data.contacts;
        });

    }

    render() {
        return (
            <div class="wrapper">
                <nav>
                    <div class="container">
                        <h2>Contacts</h2>
                    </div>
                </nav>
                <div class="container">
                    <div class="row">
                        <div class="col-md-offset-4 col-md-4 col-sm 12">
                            <contact-form contact={this.contact}></contact-form>
                            <contact-list contacts={this.contacts}></contact-list>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}