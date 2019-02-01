import React, { Component } from "react";
// import styled from "styled-components";
import { ContactMe, Envelope, Form } from "../components/styles";

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            className: "contact shown",
            showForm: "form hidden"
        };
        this.showForm = this.showForm.bind(this);
    }
    showForm = e => {
        this.state.className === "contact shown"
            ? this.setState({
                  className: "contact hidden",
                  showForm: "form shown"
              })
            : this.setState({
                  className: "contact shown",
                  showForm: "form hidden"
              });
    };
    render() {
        return (
            <ContactMe>
                <Envelope
                    visibility={this.state.className}
                    onClick={this.showForm}
                >
                    <i className="fas fa-envelope" onClick={this.showForm} />
                </Envelope>
                <Form visibility={this.state.className}>
                    <form
                        action="https://docs.google.com/forms/d/e/1FAIpQLSfvjwpOSyvgrLlCYy6bDw4rXGlq-4nffOKLRCP3_3fv6n1okQ/formResponse"
                        target="_self"
                        method="POST"
                        id="mG61Hd"
                    >
                        <p className="email-box">
                            <label htmlFor="entry.1056946373">Email</label>
                            <input
                                type="text"
                                name="entry.1056946373"
                                placeholder="Your Email"
                            />
                        </p>
                        <p className="message-box">
                            <label htmlFor="entry.923648969">Message</label>
                            <textarea
                                height="24"
                                type="text"
                                name="entry.923648969"
                            />
                        </p>
                        <input
                            className="subbed"
                            onClick={this.showForm}
                            type="submit"
                            value="Contact Me"
                        />
                    </form>
                </Form>
            </ContactMe>
        );
    }
}

export default Contact;
