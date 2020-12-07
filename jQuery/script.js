 
    function pokreniVreme() {
        let datum = new Date();
        let godina = datum.getFullYear();
        let mesec = datum.getMonth();
        let dan = datum.getDate();  
        let sat = datum.getHours();
        let min = datum.getMinutes();
        let sek = datum.getSeconds();
        document.getElementById("vreme").innerHTML = "Trenutni datum i vreme: " + dan + "/" + mesec + "/" + godina + "    " +
        sat+":"+min+":"+sek;
        setTimeout(pokreniVreme,1000);
    
    }


    function ponuda() {
        location.replace("sale.html");
    }

    function povratakNaVrh() {
        document.body.scrollTop = 0; 
        document.documentElement.scrollTop = 0; 
    }

