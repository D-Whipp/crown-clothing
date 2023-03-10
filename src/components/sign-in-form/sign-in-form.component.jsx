import { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import Button, {
    BUTTON_TYPE_CLASSES,
} from '../button/button.component';

import {
    signInWithGooglePopup,
    createUserDocumentFromAuth,
    signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils';

import {SignUpContainer} from './sign-in-form.styles.jsx';

const defaultFormFields = {
    email: '',
    password: '',
};

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const { user } = await signInAuthUserWithEmailAndPassword(
                email,
                password
            );

            resetFormFields();
        } catch (error) {
            switch (error.code) {
                case 'auth/wrong-password':
                    alert('Incorrect password');
                    break;
                case 'auth/user-not-found':
                    alert('User not found');
                    break;
                default:
                    console.log(error);
            }
            console.log(error);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value });
    };

    return (
        <SignUpContainer>
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label="Email"
                    type="email"
                    required
                    onChange={handleChange}
                    name="email"
                    value={email}
                />

                <FormInput
                    label="Password"
                    type="password"
                    required
                    onChange={handleChange}
                    name="password"
                    value={password}
                />
                <div className="buttons-container">
                    <Button
                        buttonType={BUTTON_TYPE_CLASSES.base}
                        type="submit"
                    >
                        Sign In
                    </Button>
                    <Button
                        buttonType={BUTTON_TYPE_CLASSES.google}
                        type="button"
                        onClick={signInWithGoogle}
                    >
                        Sign In With Google
                    </Button>
                </div>
            </form>
        </SignUpContainer>
    );
};

export default SignInForm;
