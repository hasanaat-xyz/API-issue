import { Resend } from "resend";

let apiKey = 'apikey';

const resend = new Resend(apiKey);

async function sendEmail(emailData){
    const {data, error} = await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: emailData.to,
        subject: emailData.subject,
        html: emailData.body,
      });


      if (error) {
        return console.log({error});
    }

    console.log({data});

}

// sendEmail();

export default sendEmail;