for(var a = 1; a < 10; a++){
    for(var b = 1; b < 10; b++){
        if(a == b){
            document.write(" * ")
        } else {
            document.write(" - ")
        } 
        
        if(a + b == 10){
            document.write(" * ")
        } else {
            document.write(" - ")
        }

        if(a && b == 5){
            document.write(' * ')
        } else {
            document.write(' - ')
        }

        if(b && a == 5){
            document.write(' * ')
        } else {4
            document.write(' - ')
        }
    }

    document.write("<br>")
}