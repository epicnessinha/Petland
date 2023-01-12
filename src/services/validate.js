export const errorCheck = (name, value) => {

    switch(name) {
        case "username":
            return "";

            case "email":

            if (! /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value)) {
                return "Invalid email";
            }else{
                return "";
            }

            case "password":
                case "password2":

                if(value.length < 8){
                    return "Password needs at least 8 characters";
                } else {
                    //verificar o formato da password

                    if (! /[\d()+-]/g.test(value)) {
                        return "Invalid password format";
                    } else {
                        return "";
                    }
                }
                default:
            }
    };
