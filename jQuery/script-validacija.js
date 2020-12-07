$(document).ready(function(){

    function validacija(){

        let ime = $("#ime").val();
        if(ime == "" || /[^a-zA-Z]/.test(ime)){
            alert("NISTE UNELI ISPRAVNO IME!");
            return false;
        }

        let prezime = $("#prezime").val();
        if(prezime == "" || /[^a-zA-Z]/.test(prezime)){
            alert("NISTE UNELI ISPRAVNO PREZIME!");
            return false;
        }

        let telefon = $("#telefon").val();
        if(telefon == "" || /[^0-9]/.test(telefon)){
            alert("NISTE UNELI ISPRAVAN BROJ TELEFONA!(SAMO BROJEVI)");
            return false;
        }

        let email = $("#e-mail").val();
        if(!email.includes('@') || !email.includes('.') ) {
            alert("NISTE UNELI ISPRAVAN E-MAIL!");
            return false;
        }

        let cekirani = $("input[type=checkbox]:checked").length;
        if(cekirani == 0){
            alert("MOLIMO ČEKIRAJTE BAREM JEDNU USLUGU!");
            return false;
        }

        return true;

    }

    $("#posalji").click(function() {
        if(validacija() == false){
           validacija();
        }else {
            confirm("PORUKA JE USPEŠNO POSLATA!");
        }
    })
})