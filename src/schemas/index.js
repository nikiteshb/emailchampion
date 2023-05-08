import * as Yup from "yup"

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const signupSchema = Yup.object({
    name:Yup.string().min(2).max(25).required("Please enter you Name "),
    phone:Yup.string().matches(phoneRegExp, "Phone number is not valid"),
    email:Yup.string().email().required("Please enter you Email"),
    password:Yup.string().min(6).required("Please enter you password"),
    repassword:Yup.string().min(6).oneOf([Yup.ref("password"),null],"Please enter you valid repeat password")  
})