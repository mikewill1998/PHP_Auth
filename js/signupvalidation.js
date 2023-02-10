const validation = new JustValidate("#signup");

validation
    .addField("#user_name", [
        {
            rule: "required"
        }
    ])
    .addField("#user_email", [
        {
            rule: "required"
        },
        {
            rule: "email"
        }
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
        document.getElementById("signup").submit();
    });

