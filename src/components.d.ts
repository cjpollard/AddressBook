/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */

import '@stencil/core';

declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLElement {
    componentOnReady?: () => Promise<this | null>;
  }

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}
}

import {
  Contact,
} from './contact';

declare global {

  namespace StencilComponents {
    interface ContactForm {
      'contact': Contact;
    }
  }

  interface HTMLContactFormElement extends StencilComponents.ContactForm, HTMLStencilElement {}

  var HTMLContactFormElement: {
    prototype: HTMLContactFormElement;
    new (): HTMLContactFormElement;
  };
  interface HTMLElementTagNameMap {
    'contact-form': HTMLContactFormElement;
  }
  interface ElementTagNameMap {
    'contact-form': HTMLContactFormElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'contact-form': JSXElements.ContactFormAttributes;
    }
  }
  namespace JSXElements {
    export interface ContactFormAttributes extends HTMLAttributes {
      'contact'?: Contact;
      'onNewContact'?: (event: CustomEvent) => void;
      'onUpdateContact'?: (event: CustomEvent) => void;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface ContactList {
      'contacts': Contact[];
    }
  }

  interface HTMLContactListElement extends StencilComponents.ContactList, HTMLStencilElement {}

  var HTMLContactListElement: {
    prototype: HTMLContactListElement;
    new (): HTMLContactListElement;
  };
  interface HTMLElementTagNameMap {
    'contact-list': HTMLContactListElement;
  }
  interface ElementTagNameMap {
    'contact-list': HTMLContactListElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'contact-list': JSXElements.ContactListAttributes;
    }
  }
  namespace JSXElements {
    export interface ContactListAttributes extends HTMLAttributes {
      'contacts'?: Contact[];
      'onDeleteContact'?: (event: CustomEvent) => void;
      'onEditContact'?: (event: CustomEvent) => void;
      'onToggleContact'?: (event: CustomEvent) => void;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface AddressBook {

    }
  }

  interface HTMLAddressBookElement extends StencilComponents.AddressBook, HTMLStencilElement {}

  var HTMLAddressBookElement: {
    prototype: HTMLAddressBookElement;
    new (): HTMLAddressBookElement;
  };
  interface HTMLElementTagNameMap {
    'address-book': HTMLAddressBookElement;
  }
  interface ElementTagNameMap {
    'address-book': HTMLAddressBookElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'address-book': JSXElements.AddressBookAttributes;
    }
  }
  namespace JSXElements {
    export interface AddressBookAttributes extends HTMLAttributes {

    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }
