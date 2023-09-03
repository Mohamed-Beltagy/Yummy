export class Contact {
    
    constructor() {
        this.inName = false;
        this.inEmail = false;
        this.inPhone = false;
        this.inAge = false;
        this.inPassword = false;
        this.inRePassword = false;
    }

    showContacts() {
        demo.innerHTML = `<div class="contact min-vh-100 d-flex justify-content-center align-items-center">
        <div class="container w-75 text-center">
            <div class="row g-4">
                <div class="col-md-6">
                    <input id="nameInput"  type="text" class="form-control" placeholder="Enter Your Name">
                    <div id="nameAlert" class="alert alert-danger w-100 mt-2 d-none">
                        Special characters and numbers not allowed
                    </div>
                </div>
                <div class="col-md-6">
                    <input id="emailInput"  type="email" class="form-control " placeholder="Enter Your Email">
                    <div id="emailAlert" class="alert alert-danger w-100 mt-2 d-none">
                        Email not valid *exemple@yyy.zzz
                    </div>
                </div>
                <div class="col-md-6">
                    <input id="phoneInput"  type="text" class="form-control " placeholder="Enter Your Phone">
                    <div id="phoneAlert" class="alert alert-danger w-100 mt-2 d-none">
                        Enter valid Phone Number
                    </div>
                </div>
                <div class="col-md-6">
                    <input id="ageInput"  type="number" class="form-control " placeholder="Enter Your Age">
                    <div id="ageAlert" class="alert alert-danger w-100 mt-2 d-none">
                        Enter valid age
                    </div>
                </div>
                <div class="col-md-6">
                    <input  id="passwordInput"  type="password" class="form-control " placeholder="Enter Your Password">
                    <div id="passwordAlert" class="alert alert-danger w-100 mt-2 d-none">
                        Enter valid password *Minimum eight characters, at least one letter and one number:*
                    </div>
                </div>
                <div class="col-md-6">
                    <input  id="repasswordInput" type="password" class="form-control " placeholder="Repassword">
                    <div id="repasswordAlert" class="alert alert-danger w-100 mt-2 d-none">
                        Enter valid repassword 
                    </div>
                </div>
            </div>
            <button id="submitBtn" disabled class="btn btn-outline-danger px-2 mt-3">Submit</button>
        </div>
    </div> `
        let submitBtn = document.getElementById("submitBtn");
        submitBtn.addEventListener("click", () => {
            demo.innerHTML = `<div class="contact min-vh-100 d-flex justify-content-center align-items-center">
            <div class="container w-75 text-center">
    <h1 class="text-danger">End Of Proj</h1>
            </div>
            </div>
            `
        })

        $("#nameInput").keyup(() => {
            this.inName = true;
            this.validationInputs();
        })

        $("#emailInput").keyup(() => {
            this.inEmail = true;
            this.validationInputs();
        })

        $("#phoneInput").keyup(() => {
            this.inPhone = true;
            this.validationInputs();
        })

        $("#ageInput").keyup(() => {
            this.inAge = true;
            this.validationInputs();
        })

        $("#passwordInput").keyup(() => {
            this.inPassword = true;
            this.validationInputs();
        })

        $("#repasswordInput").keyup(() => {
            this.inRePassword = true;
            this.validationInputs();
        })
    }

    validationInputs() {
        if (this.inName) {
            if (this.nameValidation()) {
                document.getElementById("nameAlert").classList.replace("d-block", "d-none")
            } else {
                document.getElementById("nameAlert").classList.replace("d-none", "d-block")
            }
        }

        if (this.inEmail) {
            if (this.emailValidation()) {
                document.getElementById("emailAlert").classList.replace("d-block", "d-none")
            } else {
                document.getElementById("emailAlert").classList.replace("d-none", "d-block")
            }
        }

        if (this.inPhone) {
            if (this.phoneValidation()) {
                document.getElementById("phoneAlert").classList.replace("d-block", "d-none")
            } else {
                document.getElementById("phoneAlert").classList.replace("d-none", "d-block")
            }
        }

        if (this.inAge) {
            if (this.ageValidation()) {
                document.getElementById("ageAlert").classList.replace("d-block", "d-none")
            } else {
                document.getElementById("ageAlert").classList.replace("d-none", "d-block")
            }
        }

        if (this.inPassword) {
            if (this.passwordValidation()) {
                document.getElementById("passwordAlert").classList.replace("d-block", "d-none")
            } else {
                document.getElementById("passwordAlert").classList.replace("d-none", "d-block")
            }
        }

        if (this.inRePassword) {
            if (this.repasswordValidation()) {
                document.getElementById("repasswordAlert").classList.replace("d-block", "d-none")
            } else {
                document.getElementById("repasswordAlert").classList.replace("d-none", "d-block")
            }
        }

        if (this.nameValidation() && this.emailValidation() && this.phoneValidation() && this.ageValidation()
            && this.passwordValidation() && this.repasswordValidation()) {
            submitBtn.removeAttribute("disabled")
        } else {
            submitBtn.setAttribute("disabled", true)
        }
    }

    nameValidation() {
        let regex = /^[a-zA-Z ]+$/
        return (regex.test(document.getElementById("nameInput").value) == true)
    }

    emailValidation() {
        let regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return (regex.test(document.getElementById("emailInput").value) == true)
    }

    phoneValidation() {
        let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
        return (regex.test(document.getElementById("phoneInput").value) == true)
    }

    ageValidation() {
        let regex = /^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/
        return (regex.test(document.getElementById("ageInput").value) == true)
    }

    passwordValidation() {
        let regex = /^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/
        return (regex.test(document.getElementById("passwordInput").value) == true)
    }

    repasswordValidation() {
        return document.getElementById("repasswordInput").value == document.getElementById("passwordInput").value
    }
}