let number = 10
function primo(n) {
    if (n > 1){
        if ((n / n == 1 && n / 1 == n)) {
            for(let i = 2; i <= n;i++) {
                if(n % i == 0) {
                    return false
                } else {
                    return true
                }
            }
        } else {
            return false
        }
    } else {
        return false
    }
}

if(primo(number)){
    console.log("é primo")
}
else{
    console.log("Não é primo")
}

primo(number)