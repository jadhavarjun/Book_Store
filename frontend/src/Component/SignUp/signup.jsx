import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link, Redirect } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import {
    Card,
    CardContent,
    CardActions,
    Typography,
    Snackbar,
} from "@material-ui/core";

class SignUp extends React.Component {

    render() {
        return (
            <Grid container>
                <Grid item md={3} />
                <Grid item container md={6}>
                    <Card className="card">
                        <CardContent className="card-content">
                            <Grid item md={1}></Grid>
                            <Grid item md={10} xs={10}>
                                <Typography variant="h4">
                                    Sign Up
                  </Typography>
                                <Typography className="page-subtitle">
                                    Create your Bookstore Account
                  </Typography>
                                <Grid container spacing={3}>
                                    <Grid item md={6} xs={12}>
                                        <TextField
                                            id="first-name"
                                            className="sign-input"
                                            label="First Name"
                                            // onChange={this.handleFirstName}
                                            // value={this.state.firstName}
                                            size="small"
                                            variant="outlined"
                                        // error={this.state.isFirstNameInvalid}
                                        // helperText="Enter name with First Letter Capital"
                                        />
                                    </Grid>
                                    <Grid item md={6} xs={12}>
                                        <TextField
                                            id="last-name"
                                            className="sign-input"
                                            label="Last Name"
                                            // onChange={this.handleLastName}
                                            // value={this.state.lastName}
                                            size="small"
                                            variant="outlined"
                                        // error={this.state.isLastNameInvalid}
                                        // helperText="Enter name with First Letter Capital"
                                        />
                                    </Grid>
                                </Grid>
                                <TextField
                                    id="email"
                                    className="sign-input"
                                    label="Email Id"
                                    // onChange={this.handleEmail}
                                    // value={this.state.email}
                                    size="small"
                                    variant="outlined"
                                // error={this.state.isEmailInvalid}
                                // helperText="Enter proper Email Id"
                                />
                                <TextField
                                    id="password-first"
                                    // type={this.state.showFirstPassword ? "text" : "password"}
                                    className="sign-input"
                                    label="Enter Password"
                                    // onChange={this.handleFirstPassword}
                                    // value={this.state.firstPassword}
                                    size="small"
                                    variant="outlined"
                                // InputProps={{
                                //     endAdornment: (
                                //         <InputAdornment position="end">
                                //             <IconButton
                                //                 aria-label="Toggle password visibility"
                                //                 onClick={this.handleClickShowFirstPassword}
                                //             >
                                //                 {this.state.showFirstPassword ? (
                                //                     <VisibilityOff />
                                //                 ) : (
                                //                     <Visibility />
                                //                 )}
                                //             </IconButton>
                                //         </InputAdornment>
                                //     ),
                                // }}
                                // error={this.state.isFirstPasswordInvalid}
                                // helperText="Use at least 8 characters. One Uppercase One Lowercase One special character and One number atleast."
                                />
                                <TextField
                                    variant="outlined"
                                    id="password-second"
                                    size="small"
                                    // type={this.state.showPassword ? "text" : "password"}
                                    label="Re-enter Password"
                                    // onChange={this.handleSecondPassword}
                                    // value={this.state.secondPassword}
                                    className="sign-input"
                                // InputProps={{
                                //     endAdornment: (
                                //         <InputAdornment position="end">
                                //             <IconButton
                                //                 aria-label="Toggle password visibility"
                                //                 onClick={this.handleClickShowPassword}
                                //             >
                                //                 {this.state.showPassword ? (
                                //                     <VisibilityOff />
                                //                 ) : (
                                //                     <Visibility />
                                //                 )}
                                //             </IconButton>
                                //         </InputAdornment>
                                //     ),
                                // }}
                                // error={
                                //     this.state.isSecondPasswordInvalid ||
                                //     !this.state.doPasswordsMatch
                                // }
                                // helperText={
                                //     this.state.doPasswordsMatch ? "" : "Passwords should match"
                                // }
                                />
                                <CardActions className="sign-buttons">
                                    <div className="sign-links">
                                        <Link to={"/"} className="sign-link">
                                            Sign In Instead
                      </Link>
                                    </div>
                                    <Button
                                        onClick={this.handleSignUp}
                                        variant="contained"
                                        color="primary"
                                        className="sign-links-button"
                                    >
                                        Sign Up
                    </Button>
                                </CardActions>
                            </Grid>
                            <Grid item md={1}></Grid>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item md={3} />
            </Grid>
        );
    }
}

export default SignUp;