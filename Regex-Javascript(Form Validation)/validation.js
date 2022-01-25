// validation script here

const inputs = document.querySelectorAll('input');

const pattern = {
    telephone: /^\d{11}$/,
    username: /^[a-z\d]{5,12}$/i,
    password: /^[\w@_]{8,20}$/,
    slug: /^[a-z\d_]{8,20}$/,
    email: /^([a-z\d\._]+)@([a-z\d_]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
};

// validation function
function validate(field,regex ){
    if(regex.test(field.value)) {
        field.className = 'valid';
    }else{
        field.className = 'invalid';
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup',(e) => {
        console.log(e.target.attributes.name.value);
        validate(e.target,pattern[e.target.attributes.name.value]);
    });
});



