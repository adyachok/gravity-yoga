import * as functions from 'firebase-functions';
import * as nodemailer from 'nodemailer';
import * as Mustache from 'mustache';

export const sendContactMessage = functions.database.ref('/gravity/{pushKey}').onWrite(event => {
  const snapshot = event.data;
  // Only send email for new messages.
  if (snapshot.previous.val() || !snapshot.val().name) {
    return;
  }

  const template = 'Получен заказ от {{ name }} {{ familyName }}. \n' +
    'Контактные данные: email: {{ email }} тел: {{ phone }}\n ' +
    'Выбрал/-ла тренинги:\n' +
    '{{ #trainings }} * {{ training.name }} с частотой {{ frequencySelected.description }} и продолжительностью {{ durationSelected.description }} \n{{ /trainings }}\n\n' +
    'С уважением, \n' +
    'GravitiYoga';


  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'gravitiyoga@gmail.com',
      pass: '***',
    }
  });

  const val = snapshot.val();

  const mailOptions = {
    from: '"Gravity Yoga Calculator" <orders@gravitiyoga.com>',
    to: 'gravitiyoga@gmail.com',
    subject: 'Заказ Гравити Йогa',
    text: Mustache.render(template, val)

  };

  return transporter.sendMail(mailOptions).then(() => {
    console.log('Mail sent.');
  });
});
