import * as yup from "yup";

export const signUpSchema = yup.object().shape({
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    email: yup.string().email("Email format is not valid").required("Email is required"),
    password: yup.string().min(6).max(10).required("Password is required"),
    phoneNumber: yup.number().required("Phone number is required"),
    companyName: yup.string().required("Company name is required"),
    skypeHandle: yup.string().required("Skype handle is required"),
    address: yup.string().required("Address is required"),
    city: yup.string().required("City is required"),
    state: yup.string().required("State is required"),
    zipCode: yup.string(),
    country: yup.string().required("Country is required"),
    checkBox: yup.array().min(1).of(yup.string().required()).required("Tick atleast 1 checkbox")
})

export const signInSchema = yup.object().shape({
    email: yup.string().email("Email format is not valid").required("Email is required"),
    password: yup.string().min(4).max(10).required()
})