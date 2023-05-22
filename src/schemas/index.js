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

// const CampaignSchema = Yup.object({
//     name: Yup.string().min(2).max(30).required("Please enter Name"),
//     subject: Yup.string().min(2).max(30).required("Please enter Subject"),
//     template: Yup.object().when('template',{
//         is:'energy',
//         then: Yup.object({
//             corporationName:Yup.string().min(2).max(30).required("Please enter Name"),
//             billAmount:Yup.number().required("Please enter Bill amount"),
//             month:Yup.string().min(2).max(20).required("Please enter month"),
//             year:Yup.number().min(2).max(20).required("Please enter year"),
//         }),
//         is:'certificate',
//         then:Yup.object({
//             issuer:Yup.string().min(2).max(30).required("Please enter Issuer"),
//             hours:Yup.number().required("Please enter hours"),
//             courseName:Yup.string().min(2).max(30).required("Please enter course name"),
//         }),
//         is:'music',
//         then:Yup.object({
//             bandName:Yup.string().min(2).max(30).required("Please enter band name"),
//             venue:Yup.string().min(2).max(30).required("Please enter venue"),
//             eventDate:Yup.date().min(new Date(), "Cannot be in the past Date"),
//             eventTime:Yup.string().required("Please enter Time"),
//         })
//     }),
//     contacts:Yup.array().required("At least one checkbox is required"),
// })

export {signupSchema,loginSchema,ContactSchema} 