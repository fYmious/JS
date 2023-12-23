function alphanumeric(string)
{
    if (!string){
        return false
    }

    for (const letter of string) {
        if ("0123456789qwertyuiopasdfghjklzxcvbnm".indexOf(letter.toLowerCase()) === -1){
            return false
        }
    }

    return true
}

console.log(alphanumeric("     "))