
// function sendEmail() {
//     console.log("send email");
//     var params = {
//         name: document.getElementById("name").value,
//         from_email: document.getElementById("email").value,
//         subject: document.getElementById("subject").value,
//         message: document.getElementById("message").value
//     };
//     // const serviceID = "contact_service";
//     // const templateID = "contact_form";
//     // emailjs.send(serviceID, templateID, params).then();
//     // emailjs.send('service_id' , 'template_asj8l7x')
//     emailjs.send('service_1ykoqvg' , 'template_asj8l7x' , params).then((response) => {
//         console.log('SUCCESS!', response.status, response.text);
//     })
// }
function sendEmail() {
    var params = {
        name: document.getElementById("name").value,
        from_email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    };

    const serviceID = "service_1ykoqvg";
    const templateID = "template_asj8l7x";

    emailjs.send(serviceID, templateID, params)
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
        })
        .catch((error) => {
            console.log('FAILED...', error);
        });

        // emailjs.send("service_23jg93m","template_m7bel9j",{
        //     from_name: "ali ",
        //     from_email: "ayfghfh@gmail.com",
        //     message: "test ",
        //     });
}
