function towns(){

    var county = document.getElementById("county").value;

    if(county === "Nairobi"){

        var arr = ["Eastlands", "Westlands"];
    }

    else if(county === "Kisumu"){

        var arr = ["Kisumu", "Ahero"];
    }

    else if(county === "Mombasa"){

        var arr = ["Mombasa", "Kisauni"];
    }

    else if(county === "Nakuru"){

        var arr = ["Nakuru", "Gilgil"];
    }

    else if(county === "Eldoret"){

        var arr = ["Eldoret", "Kitale"];
    }

    else if(county === "Kiambu"){

        var arr = ["Juja", "Thika"];
    };

    for(i = 0; i< arr.length; i++){

        string = string + <option> +arr[i]+ </option>
    };

    document.getElementById("city").innerHTML=string;
}


/*function resources(county, city){

    this.county = county;
    this.city = city;

};


$(document).ready(function(){

    var newCounty = document.getElementById("county").value;

    newCounty.options[0] = new Option("--select--", ");
    newCounty.options[1] = new Option("Nairobi","Nairobi");
    newCounty.options[2] = new Option("Mombasa","Mombasa");
    newCounty.options[3] = new Option("Kisumu","Kisumu");
    newCounty.options[4] = new Option("Kiambu","Kiambu");
    newCounty.options[5] = new Option("Eldoret","Eldoret");
    newCounty.options[6] = new Option("Nakuru","Nakuru");

});
function determineArea(){

    //declare variables
    var newCounty = document.getElementById("county").value;
    var newCity = document.getElementById("city").value;

    var newCountySelectedValue = newCounty.options[newCounty.selectedIndex].value;

    if(newCountySelectedValue == "Nairobi"){
        newCity.options.length = 0;
        newCity.options[0] = new Option("--select--", ");
        newCity.options[1] = new Option("Westlands","westlands ");
        newCity.options[2] = new Option("Eastlands", "westlands");
    }
    else if(newCountySelectedValue == "Kiambu"){
        newCity.options.length = 0;
        newCity.options[0] = new Option("--select--",");
        newCity.options[1] = new Option("Juja","Juja");
        newCity.options[2] = new Option("Thika","Thika");
    }
    else if(newCountySelectedValue == "Mombasa"){
        newCity.options.length = 0;
        newCity.options[0] = new Option("--select--", ");
        newCity.options[1] = new Option("Mombasa", "Mombasa");
        newCity.options[2] = new Option("Kisauni","Kisauni");
    }
    else if(newCountySelectedValue == "Kisumu"){
        newCity.options.length = 0;
        newCity.options[0] = new Option("--select--");
        newCity.options[1] = new Option("Kisumu","Kisumu");
        newCity.options[2] = new Option("Ahero","Ahero");
    }
    else if(newCountySelectedValue == "Nakuru"){
        newCity.options.length = 0;
        newCity.options[0] = new Option("--select--");
        newCity.options[1] = new Option("Nakuru","Nakuru");
        newCity.options[2] = new Option("Gilgil", "Gilgil");
    }
    else if(newCountySelectedValue == "Eldoret"){
        newCity.options.length = 0;
        newCity.options[0] = new Option("--select--");
        newCity.options[1] = new Option("Eldoret", "Eldoret");
        newCity.options[2] = new Option("Kitale", "Kitale");
    };
};*/
