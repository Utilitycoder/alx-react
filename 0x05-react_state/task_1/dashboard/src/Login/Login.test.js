import React from "react";
import { shallow } from "enzyme";
import Login from "./Login";

describe("Login tests", () => {
  it("renders Login component without crashing", () => {
    const wrapper = shallow(<Login />);

    expect(wrapper).toBeDefined();
  });

  it("checks that the submit button is disabled by default", () => {
    const wrapper = shallow(<Login />);
    const submitBtn = wrapper.find("input[type='submit']");

    expect(submitBtn.prop("disabled")).toEqual(true);
  });

  it("checks that after changing the value of the email input, the component state changes accordingly", () => {
    const wrapper = shallow(<Login />);
    const emailInput = wrapper.find("input[type='email']");
    const newEmail = "test@example.com";

    emailInput.simulate("change", { target: { value: newEmail } });

    expect(wrapper.state("email")).toEqual(newEmail);
  });

  it("checks that after changing the value of the password input, the component state changes accordingly", () => {
    const wrapper = shallow(<Login />);
    const passwordInput = wrapper.find("input[type='password']");
    const newPassword = "test123";

    passwordInput.simulate("change", { target: { value: newPassword } });

    expect(wrapper.state("password")).toEqual(newPassword);
  });
});
