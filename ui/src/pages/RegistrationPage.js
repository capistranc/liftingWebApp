import React, {Component} from 'react';
import { RegistrationForm } from 'react-stormpath';
class RegistrationPage extends Component {
    onFormSubmit(e, next) {
        // e.data will contain the data mapped from your form.
        console.log("Form submitted", e.data);

        next();
    }

    render() {
        return <RegistrationForm onSubmit={this.onFormSubmit.bind(this)} />;
    }
}

export default RegistrationPage