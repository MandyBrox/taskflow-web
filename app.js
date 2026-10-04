function cadena_mas_larga(cadena1, cadena2){
    if (cadena1.length > cadena2.length) {
        console.log(cadena1 + " es más larga que " + cadena2);
        
    }else if (cadena1.length < cadena2.length) {
        console.log(cadena2 + " es más larga que " + cadena1);

    } else if (typeof cadena1 !== "string" || typeof cadena2 !== "string"){
        console.log("No hay dos cadenas de texto para comparar");
    function login(usuario, contraseña) {
    if (usuario === "admin" && contraseña === "1234") {
        return "Inicio de sesión correcto";
    }
    return "Usuario o contraseña incorrectos";
}  
    }


}

cadena_mas_larga("Hola", "Caracola");
cadena_mas_larga("Yo gano por ser la más larga", "Yo gano");
cadena_mas_larga("Soy una cadena", 33);


