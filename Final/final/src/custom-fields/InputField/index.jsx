import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Label, Input, FormFeedback } from 'reactstrap'
import { ErrorMessage } from 'formik';
InputField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    type: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    disable: PropTypes.bool,
};
InputField.defaultProps = {
    type: 'text',
    label: '',
    placeholder: '',
    disabled: false,
}
function InputField(props) {
    // có 2 trường là field và props
    const { field, form, type, label, placeholder, disabled } = props;
    const { name } = field;
    const { errors, touched } = form;
    const showError = errors[name] && touched[name]
    return (
        <FormGroup>
            {label && <Label for={name}>{label}</Label>}
            <Input
                id={name}
                {...field}

                type={type}
                disabled={disabled}
                placeholder={placeholder}
                invalid={showError}
            >
            </Input>
            {/* {showError && <FormFeedback className='error-field'>{errors[name]}</FormFeedback>} */}
            <ErrorMessage name={name} component={FormFeedback}></ErrorMessage>
        </FormGroup>
    );
}

export default InputField;