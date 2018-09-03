import { Component, Listen, State } from '@stencil/core';
import { Contact } from '../../contact';

@Component({
    tag: 'address-book',
    styleUrl: 'site.scss'
})
export class Site {

    @State() contacts: Contact[] = [{
        firstname: 'Arthur',
        surname: 'Ashe',
        email: 'arthur@ashe.com',
        mobile: '07712345678',
    }];

    @Listen('newContact')
    newContact(e) {
        const newContact = e.detail;
        this.contacts = [...this.contacts, newContact];
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
                            <contact-form></contact-form>
                            <contact-list contacts={this.contacts}></contact-list>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}