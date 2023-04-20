const birthdayPattern = {
  value: /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.(19\d\d|20\d\d)$/,
  message: 'Enter the date in the format 01.08.1998',
}
const username = {
  required: 'You must enter your username.',
  minLength: { value: 3, message: 'Username must be more than 3 characters.' },
  maxLength: { value: 30, message: 'Username must be shorted than 30 characters.' },
}
const firstName = { required: 'You must enter your name.' }
const lastName = { required: 'You must enter your username.' }
const birthday = { required: 'You must enter your date of birthday.', pattern: birthdayPattern }
const city = { required: 'You must enter your city.' }
const aboutMe = {
  required: 'Required field',
  maxLength: { value: 200, message: 'About me must be shorted than 200 characters.' },
}

export const profileInfoValidate = { username, firstName, lastName, birthday, city, aboutMe }
