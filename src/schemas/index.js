import * as Yup from "yup"

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const passRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
const signupSchema = Yup.object({
    name:Yup.string().min(2).max(25).required("Please enter your Name "),
    phone:Yup.string().matches(phoneRegExp, "Phone number is not valid").required("Please enter your Contact"),
    email:Yup.string().email().required("Please enter your Email"),
    // password:Yup.string().min(8).matches(passRegExp, "Please enter valid password. One uppercase, One lowercase, One Number, One special character").required("Please enter password"),
    password:Yup.string().min(8).required("Please enter password"),
    repassword:Yup.string().min(6).oneOf([Yup.ref("password"),null],"Please enter valid password. One uppercase, One lowercase, One Number, One special character").required("Please enter Repeat password")
})

const loginSchema = Yup.object({ 
    email:Yup.string().email().required("Please enter your Email"),
    password:Yup.string().required("Please enter your password")
})

const ContactSchema = Yup.object({     
      firstName: Yup.string().min(2).max(30).required("Please enter First Name"),
      lastName: Yup.string().min(2).max(30).required("Please enter Last Name"),
      email: Yup.string().email().required("Please enter Email"),
      gender: Yup.string().required("Please Select Gender"),
      city: Yup.string().min(2).max(30).required("Please Select City"),
})

export {signupSchema,loginSchema,ContactSchema} 