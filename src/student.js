export default class Student {
    constructor(name, firstLastName, secondLastName, birthDate, email) {
        this.name = name;
        this.firstLastName = firstLastName;
        this.secondLastName = secondLastName;
        this.birthDate = birthDate;
        this.email = email; 
    }
    
    getFullName(){
        let Name =
        this.name + " " + this.firstLastName + " " + this.secondLastName;

        return Name;
    }

    getInitials(){
        let initials =
        this.name[0] + this.firstLastName[0] + this.secondLastName[0];

        return initials.toUpperCase();
    }

    getFullNameCapitalized(){
       let n = this.getCapitalized(this.name);
       let fln = this.getCapitalized(this.firstLastName);
       let sln = this.getCapitalized(this.secondLastName);

       
        return n + " " + fln + " " + sln;

    }

    getCapitalized(word){
        let capitalized = word[0].toUpperCase();

        for(let i = 1; i < word.length; i++) {
            capitalized = capitalized + word[i].toLowerCase();
        }

        return capitalized;
    }

    getAge(){
        let today = new Date();
        let dateDif = today - this.birthDate;
        let dateRef = new Date(dateDif);
        let age = dateRef.getFullYear() - 1970;

        return age;
    }

    getDayOfBirth(){
        switch (this.birthDate.getDay()) {
            case 0: return "Domingo";
            case 1: return "Lunes";
            case 2: return "Martes";
            case 3: return "Miercoles"; 
            case 4: return "Jueves";
            case 5: return "Viernes";
            case 6: return "Sábado";
            default: return "Error";
        }
    }

    getMonthOfBirth(){
        switch (this.birthDate.getMonth()) {
            case 0: return "Enero";
            case 1: return "Febrero";
            case 2: return "Marzo";
            case 3: return "Abril";
            case 4: return "Mayo";
            case 5: return "Junio";
            case 6: return "Julio";
            case 7: return "Agosto";
            case 8: return "Septiembre";
            case 9: return "Octubre";
            case 10: return "Noviembre";
            case 11: return "Diciembre";
            default: return "Error";
        }
    }

    getBirthDateFormatted(){

        let fullDate = this.getDayOfBirth() + " " + this.birthDate.getDate() + " de " + this.getMonthOfBirth() + " de " + this.birthDate.getFullYear();
        return fullDate;

    }

    isValidEmail(){
        
        let pos = this.email.indexOf("@");
        if(pos === -1) {
            return false;
        }

        if(pos === 0){
            return false;
        }

        if(!this.email.endsWith("ucol.mx")){
            return false;
        } 

        return true;

    }
}