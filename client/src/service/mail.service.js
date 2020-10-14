

const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

function sendEmail(toAddress, content) {
    // console.log('content is:', content)
    const newContent = JSON.stringify(content)
    console.log(newContent.split(","))
    const msg = {
        to: `${toAddress}`, // Change to your recipient
        from: 'insureit2020@gmail.com', // Change to your verified sender
        subject: 'ביטול פוליסה',
        text: `${newContent.split(",")}`,
        // html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    }
    // console.log('this is msg:', msg)
    return sgMail.send(msg)
        .then(() => {
            console.log('Email sent')
        })
        .catch((error) => {
            console.error(error)
        })
}


export { sendEmail }