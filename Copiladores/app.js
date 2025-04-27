class User {
  constructor({ email }) {
    this.email = email;
  }

  sedMessege() {
    console.log("Mensagem eviado para: ", this.email)
  }
}

let user = new User({email: "gleidsonfagno@gmail.com"})
user.sedMessege()