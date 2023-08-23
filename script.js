//Class e Objects.

class User {
    constructor(name, email, birthdate, address, phone, cpf) {
        this.name = name;
        this.email = email;
        this.birthdate = birthdate;
        this.address = address;
        this.phone = phone;
        this.cpf = cpf;
        this.age = this.calculateAge();
        this.zodiacSign = this.getZodiacSign();
        this.possibleClient = this.isPossibleClient();
        console.log("Passou pelo constructor da class User");
    }

    calculateAge() {
        let today = new Date();
        let birthdate = new Date(this.birthdate);
        let age = today.getFullYear() - birthdate.getFullYear();
        let month = today.getMonth() - birthdate.getMonth();

        if (month < 0 || (month === 0 && today.getDate() < birthdate.getDate())) {
            age--;
        }
        console.log("Passou pelo calculateAge() da class User");
        return age;
        
    }
    getZodiacSign() {
        let birthdate = new Date(this.birthdate);
        let day = birthdate.getDate();
        let month = birthdate.getMonth() + 1;
        console.log("Passou pelo getSigno() da class User");

        if ((month == 1 && day <= 20) || (month == 12 && day >= 22)) {
            return "Capricórnio ♑";
        } else if ((month == 1 && day >= 21) || (month == 2 && day <= 18)) {
            return "Aquário ♒";
        } else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
            return "Peixes ♓";
        } else if ((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
            return "Áries ♈";
        } else if ((month == 4 && day >= 21) || (month == 5 && day <= 20)) {
            return "Touro ♉";
        } else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
            return "Gêmeos ♊";
        } else if ((month == 6 && day >= 22) || (month == 7 && day <= 22)) {
            return "Câncer ♋";
        } else if ((month == 7 && day >= 23) || (month == 8 && day <= 23)) {
            return "Leão ♌";
        } else if ((month == 8 && day >= 24) || (month == 9 && day <= 23)) {
            return "Virgem ♍";
        } else if ((month == 9 && day >= 24) || (month == 10 && day <= 23)) {
            return "Libra ♎";
        } else if ((month == 10 && day >= 24) || (month == 11 && day <= 22)) {
            return "Escorpião ♏";
        } else if ((month == 11 && day >= 23) || (month == 12 && day <= 21)) {
            return "Sagitário ♐";
        }
    }
    isPossibleClient() {
        const age = this.age;
        console.log("Passou pelo isPossibleClient? da class User");
        if (age >= 18 && age <= 26) {
            return "Sim ✅";
        }
        return "Não ❌";
    }

}

class AllUsers {
    constructor() {
        this.users = [];
        console.log("Passou pelo constructor da class AllUsers");

    }

    add(user) {
        console.log("Passou pelo add() da class AllUsers");

        if (isAnyInputEmpty()) {
            sendErrorMsg("Preencha todos os campos");
        } else if (!valida_cpf(user.cpf)) {
            sendErrorMsg("CPF inválido");
        } else if (isAlreadyRegistered(user.cpf)) {
            sendErrorMsg("CPF já cadastrado");
        } else {
            this.users.push(user);
            successMsg("Parabéns, você entrou na lista de espera!");
            clearInputs();
        }
    }

    getAll() {
        console.log("Passou pelo getAll() da class AllUsers");

        return this.users;
    }

    countNumber() {
        console.log("Passou pelo countNumber() da class AllUsers");

        return this.users.length;
    }

}

// Instances
const allUsers = new AllUsers();
console.log("Instanciou a class AllUsers");


// Actions functions.

function createUser() {
    console.log("Passou pela funcao createUser()");

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let birthdate = document.getElementById("birthdate").value;
    let address = document.getElementById("address").value;
    let phone = document.getElementById("phone").value;
    let cpf = document.getElementById("cpf").value;

    let user = new User(name, email, birthdate, address, phone, cpf);
    allUsers.add(user);

}

function clearInputs() {
    console.log("Passou pela funcao clearInputs()");
    
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("birthdate").value = "";
    document.getElementById("address").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("cpf").value = "";
    
}

function showRegister() {
    document.getElementById("sub-div").classList.add("hidden");
    document.getElementById("title-page").classList.remove("hidden");
    document.getElementById("main-div").classList.remove("hidden");
    console.log("Passou pela funcao showRegister()");

}

function dateinPTBR(date) {
    console.log("Passou pela funcao dateinPTBR()");

    let dateArray = date.split("-");
    let datePTBR = dateArray[2] + "/" + dateArray[1] + "/" + dateArray[0];
    return datePTBR;
}

function formatedCPF(cpf) {
    console.log("Passou pela funcao formatedCPF()");

    let cpfArray = cpf.split("");
    let cpfFormated = cpfArray[0] + cpfArray[1] + cpfArray[2]
        + "." + cpfArray[3] + cpfArray[4] + cpfArray[5] + "."
        + cpfArray[6] + cpfArray[7] + cpfArray[8] + "-" + cpfArray[9] + cpfArray[10];
    return cpfFormated;
}

function formatedCellphone(cellphone) {
    console.log("Passou pela funcao formatedCellphone()");

    let cellphoneArray = cellphone.split("");
    let cellphoneFormated = "(" + cellphoneArray[0] + cellphoneArray[1] + ")"
        + " " + cellphoneArray[2] + cellphoneArray[3] + cellphoneArray[4]
        + cellphoneArray[5] + cellphoneArray[6] + "-"
        + cellphoneArray[7] + cellphoneArray[8]
        + cellphoneArray[9] + cellphoneArray[10];
    return cellphoneFormated;
}

function valida_cpf(cpf) {
    console.log("Passou pela funcao valida_cpf()");

    var numeros, digitos, soma, i, resultado, digitos_iguais;
    digitos_iguais = 1;
    if (cpf.length < 11)
        return false;
    for (i = 0; i < cpf.length - 1; i++)
        if (cpf.charAt(i) != cpf.charAt(i + 1)) {
            digitos_iguais = 0;
            break;
        }
    if (!digitos_iguais) {
        numeros = cpf.substring(0, 9);
        digitos = cpf.substring(9);
        soma = 0;
        for (i = 10; i > 1; i--)
            soma += numeros.charAt(10 - i) * i;
        resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado != digitos.charAt(0))
            return false;
        numeros = cpf.substring(0, 10);
        soma = 0;
        for (i = 11; i > 1; i--)
            soma += numeros.charAt(11 - i) * i;
        resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado != digitos.charAt(1))
            return false;
        return true;
    }
    else
        return false;
}

function isAlreadyRegistered(cpf) {
    console.log("Passou pela funcao isAlreadyRegistered()");

    let users = allUsers.getAll();
    let isRegistered = false;
    users.forEach((user) => {
        if (user.cpf == cpf) {
            isRegistered = true;
        }
    });
    return isRegistered;
}

function showUsers() {
    console.log("Passou pela funcao showUsers()");

    if (allUsers.getAll().length == 0) {
        sendErrorMsg("Não há usuários cadastrados");
        return;
    } else {
        document.getElementById("sub-div").classList.remove("hidden");
        document.getElementById("title-page").classList.add("hidden");
        document.getElementById("main-div").classList.add("hidden");

        console.log(allUsers.getAll());

        const users = allUsers.getAll();

        let html = "";
        users.forEach((user) => {
            html += `
            <div class="list-eachUser">
                <p><strong>Nome:</strong> ${user.name}</p>
                <p><strong>Idade:</strong> ${user.age}</p>
                <p><strong>Signo:</strong> ${user.zodiacSign}</p>
                <p><strong>Email:</strong> ${user.email}</p>
                <p><strong>Data de nascimento:</strong> ${dateinPTBR(user.birthdate)}</p>
                <p><strong>Cidade:</strong> ${user.address}</p>
                <p><strong>Telefone:</strong> ${formatedCellphone(user.phone)}</p>
                <p><strong>CPF:</strong> ${formatedCPF(user.cpf)}</p>
                <p><strong>Possivel cliente?</strong> ${user.possibleClient}</p>
            </div>
           `;
        });
        document.getElementById("user-list").innerHTML = html;
    }
    const contador = allUsers.countNumber()
    document.getElementById("contador").innerHTML = `Total: ${contador}`;
}

function isAnyInputEmpty() {
    console.log("Passou pela funcao isAnyInputEmpty()");

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let birthdate = document.getElementById("birthdate").value;
    let address = document.getElementById("address").value;
    let phone = document.getElementById("phone").value;
    let cpf = document.getElementById("cpf").value;

    if (name == "" || email == "" || birthdate == "" || address == "" || phone == "" || cpf == "") {
        return true;
    } else {
        return false;
    }
}

function sendErrorMsg(msg) {
    console.log("Passou pela funcao sendErrorMsg()");

    document.getElementById("error-msg").innerHTML = msg;
    document.getElementById("error-msg").classList.remove("hidden");
    setTimeout(function () {
        document.getElementById("error-msg").classList.add("hidden");
    }, 4000);
}

function successMsg(msg) {
    console.log("Passou pela funcao successMsg()");
    document.getElementById("success-msg").innerHTML = msg;
    document.getElementById("success-msg").classList.remove("hidden");
    setTimeout(function () {
        document.getElementById("success-msg").classList.add("hidden");
    }, 4000);
}

function clearInputs(){
    console.log("Passou pela funcao clearInputs()");

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("birthdate").value = "";
    document.getElementById("address").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("cpf").value = "";
}

// how many functions are there? 12
// how many classes are there? 2