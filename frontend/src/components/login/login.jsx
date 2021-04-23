import React, { useState } from 'react';
import './login.scss'
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button"

import UserService from '../../Service/userService';
var userService = new UserService();


export default function Login(props) {

    const [email, setemail] = useState();
    const [emailFlag, setemailFlag] = useState(false);
    const [emailError, setemailError] = useState("");
    const [password, setpassword] = useState();
    const [passwordFlag, setpasswordFlag] = useState(false);
    const [passwordError, setpasswordError] = useState("");


    const initialState = () => {
        setemailFlag(false);
        setemailError("");
        setpasswordFlag(false);
        setpasswordError("");
    };

    const validationCheck = () => {
        initialState();
        const emailPattern = /[a-zA-Z0-9._]+[@]{1}[a-zA-Z120-9]*[.]{1}[a-zA-Z]*$/;
        const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).*$/;
        let isError = false;

        if (!emailPattern.test(email)) {
            setemailFlag(true);
            setemailError("Enter valid email");
            isError = true;
        }
        if (!passwordPattern.test(password)) {
            setpasswordFlag(true);
            setpasswordError("Enter valid password");
            isError = true;
        }
        return isError;
    };

    const handleLoginSubmit = () => {
        if (validationCheck()) {
            console.log("Error Occured");
        } else {
            console.log("Success");
            const data = {
                email: email,
                password: password,
            };
            console.log("KKKKKK",data);
            userService.login(data)
            .then((result) => {
                console.log(result);
            }).catch((err) => {
                console.log(err);
            });
        }
    };

    return (
            <div>
                <div className="input">
                    <div className="input_field">
                        <TextField id="outlined"
                            size="small"
                            name="email"
                            value={email}
                            onChange={(e)=>setemail(e.target.value)}
                            error={emailFlag}
                            helperText={emailError}
                            label="Email"
                            variant="outlined"
                            fullWidth />
                    </div>
                    <div className="input_field">
                        <TextField id="outlined"
                            size="small"
                            label="Password"
                            name="password"
                            value={password}
                            onChange={(e)=>setpassword(e.target.value)}
                            error={passwordFlag}
                            helperText={passwordError}
                            type="password"
                            variant="outlined"
                            fullWidth />
                    </div>
                </div>

                <div className="button">
                    <Button text="test" fullWidth="true" onClick={handleLoginSubmit} className="lbtn">
                        LOGIN </Button>
                </div>
               <br></br>
                <div className="footer_field">
                    <div className="Or">
                        <b><p>OR</p></b>
                    </div>
                    <div className="footer">
                        <Button variant="contained" color="primary">
                                Facebook
                        </Button>
                        <Button variant="contained"><b>Google</b></Button>
                    </div>
                </div>
            </div>
        
    )
}

