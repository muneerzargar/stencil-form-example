/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface SjsFormComponent {
    'additionalFieldMaxLength': string;
    'disableInputFieldGroup': boolean;
    'enableValidation': boolean;
    'formButtonValue': string;
    'formErrorMessage': string;
    'mainInputFieldMaxLength': string;
    'onlyNumbers': boolean;
    'signValue': string;
  }
  interface SjsInputComponent {
    'additionalFieldMaxLength': string;
    'allowOnlyNumbers': boolean;
    'disableInputFieldGroupFlag': boolean;
    'inputSignValue': string;
    'mainFieldMaxLength': string;
  }
}

declare global {


  interface HTMLSjsFormComponentElement extends Components.SjsFormComponent, HTMLStencilElement {}
  var HTMLSjsFormComponentElement: {
    prototype: HTMLSjsFormComponentElement;
    new (): HTMLSjsFormComponentElement;
  };

  interface HTMLSjsInputComponentElement extends Components.SjsInputComponent, HTMLStencilElement {}
  var HTMLSjsInputComponentElement: {
    prototype: HTMLSjsInputComponentElement;
    new (): HTMLSjsInputComponentElement;
  };
  interface HTMLElementTagNameMap {
    'sjs-form-component': HTMLSjsFormComponentElement;
    'sjs-input-component': HTMLSjsInputComponentElement;
  }
}

declare namespace LocalJSX {
  interface SjsFormComponent extends JSXBase.HTMLAttributes<HTMLSjsFormComponentElement> {
    'additionalFieldMaxLength'?: string;
    'disableInputFieldGroup'?: boolean;
    'enableValidation'?: boolean;
    'formButtonValue'?: string;
    'formErrorMessage'?: string;
    'mainInputFieldMaxLength'?: string;
    'onFormSubmitEvent'?: (event: CustomEvent<any>) => void;
    'onlyNumbers'?: boolean;
    'signValue'?: string;
  }
  interface SjsInputComponent extends JSXBase.HTMLAttributes<HTMLSjsInputComponentElement> {
    'additionalFieldMaxLength'?: string;
    'allowOnlyNumbers'?: boolean;
    'disableInputFieldGroupFlag'?: boolean;
    'inputSignValue'?: string;
    'mainFieldMaxLength'?: string;
    'onComputedInputValue'?: (event: CustomEvent<any>) => void;
  }

  interface IntrinsicElements {
    'sjs-form-component': SjsFormComponent;
    'sjs-input-component': SjsInputComponent;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


