const validator = new JustValidate("#login");

validator
    .addField("#user_email", [
        {
            rule: "required"
        },
        {
            rule: "email"
        },
    ])
    .addField("#password", [
        {
            rule: "required"
        },
        {
            rule: "password"
        }
    ])
    .onSuccess((event) => {
        document.getElementById("login").submit();
    });