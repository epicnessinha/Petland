export const errorValidate = (name, value) => {
  switch (name) {
    case "name":
      if ("") {
        return "Invalid name format"
      } else {
        return ""
      }

    case "email":
      if (
        !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
          value
        )
      ) {
        return "Invalid e-mail format"
      } else {
        return ""
      }

    case "phone":
      if (!/(?=.*?[0-9])/.test(value)) {
        return "Phone number incorrect"
      } else {
        return ""
      }

    case "password":
    case "password2":
      if (value.length < 6) {
        return "Write at least 6 characters"
      } else {
        if (!/[\d()+-]/g.test(value)) {
          return "Invalid password format"
        } else {
          return ""
        }
      }

    default:
      console.log("Check that all the answers are correct")
  }
}
