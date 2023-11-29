function generatePassword() {
  const length = document.getElementById("length").value;
  const uppercase = document.getElementById("uppercase").checked;
  const numbers = document.getElementById("numbers").checked;
  const special = document.getElementById("special").checked;

  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChars = "0123456789";
  const specialChars = "!@#$%^&*()_-+=<>?";

  let validChars = lowercaseChars;

  if (uppercase) validChars += uppercaseChars;
  if (numbers) validChars += numberChars;
  if (special) validChars += specialChars;

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * validChars.length);
    password += validChars.charAt(randomIndex);
  }

  document.getElementById("password").value = password;
}
