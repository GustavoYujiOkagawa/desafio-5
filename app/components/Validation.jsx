
function Validation(value) {
    let error = {};

    if (!value.fullname) {
        error.fullname = "This field is required";
    }
    if (!value.lastname) {
        error.lastname = "This field is required";
    }
    if (!value.email) {
        error.email = "Please enter a valid email address";
    } else if (!/[^\s@]+@[^\s@]+\.[^\s@]+/.test(value.email)) {
        error.email = "Email Is Invalid";
    }
    if (!value.textarea) {
        error.textarea = "This field is required";
    } else if (value.textarea.length < 15) {
        error.textarea = "Message Is Too Short";
    }

    return error;
}

export default Validation;
