import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from "@material-ui/core/TextField";
import './Signup.scss';

import UserService from '../../Service/userService'

var userService = new UserService();

export default function SignUp(props) {

    const [name, setName] = useState();
    const [nameFlag, setNameFlag] = useState();
    const [nameError, setNameError] = useState("");
    const [email, setEmail] = useState();
    const [emailFlag, setEmailFlag] = useState(false);
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState();
    const [passwordFlag, setPasswordFlag] = useState(false);
    const [passwordError, setPasswordError] = useState("");
    const [mobile, setMobile] = useState();
    const [mobileFlag, setMobileFlag] = useState(false);
    const [mobileError, setMobileError] = useState("");


    const initialState = () => {
        setNameFlag(false);
        setNameError("");
        setEmailFlag(false);
        setEmailError("");
        setMobileFlag(false);
        setMobileError("");
        setPasswordFlag(false);
        setPasswordError("");
    };

    const validation = () => {
        initialState();
        const namePattern = /^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$/;
        const emailPattern = /[a-zA-Z0-9._]+[@]{1}[a-zA-Z120-9]*[.]{1}[a-zA-Z]*$/;
        const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).*$/;
        const mobilePattern = /^[6-9]{1}[0-9]{9}$/;

        let isError = false;
        if (!namePattern.test(name)) {
            setNameFlag(true);
            setNameError("Name is Not valid");
            isError = true;
        }
        if (!mobilePattern.test(mobile)) {
            setMobileFlag(true);
            setMobileError("Mobile Number is not valid");
            isError = true;
        }
        if (!emailPattern.test(email)) {
            setEmailFlag(true);
            setEmailError("Email is Not valid");
            isError = true;
        }
        if (!passwordPattern.test(password)) {
            setPasswordFlag(true);
            setPasswordError("Please Enter Valid Password");
            isError = true;
        }
        return isError;
    };

    const handleSignupSubmit = () => {
        if (validation()) {
            console.log("Error Occured");
        } else {
            console.log("Success");
            const data = {
                fullName: name,
                email: email,
                password: password,
                mobile: mobile,
            };
            console.log("hhhhhhhhh", data);
            userService.registration(data)
                .then((result) => {
                    console.log(result)
                }).catch((err) => {
                    console.log(err);
                });
        }
    };

    return (
        <div className="signup_container">
            <div className="signup">

                <div className="input_signup_field">
                    <TextField id="outlined"
                        size="small"
                        name="Full Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        error={nameFlag}
                        helperText={nameError}
                        label="Full Name"
                        variant="outlined"
                        fullWidth />
                </div>

                <div className="input_signup_field">
                    <TextField id="outlined"
                        size="small"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        error={emailFlag}
                        helperText={emailError}
                        label="Email"
                        variant="outlined"
                        fullWidth />
                </div>

                <div className="input_signup_field">
                    <TextField id="outlined"
                        size="small"
                        label="Password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        error={passwordFlag}
                        helperText={passwordError}
                        type="password"
                        variant="outlined"
                        fullWidth />
                </div>

                <div className="input_signup_field">
                    <TextField id="outlined"
                        size="small"
                        label="Mobile Number"
                        name="mobile"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        error={mobileFlag}
                        helperText={mobileError}
                        type="number"
                        variant="outlined"
                        fullWidth />
                </div>

                <div className="button_signup">
                    <Button text="test" fullWidth="true" onClick={handleSignupSubmit}>
                        SIGNUP </Button>
                </div>
            </div>
        </div>
    )



}