function contar() {
    var ini = document.getElementById('inicio').value
    var fim = document.getElementById('fim').value
    var pas = document.getElementById('passo').value
    var res = document.getElementById('res')

    if (ini === "" || fim === "" || pas === "") {
       res.innerHTML = ("Preencha todos os campos!") 
       return
    }

    var iniNum = Number(ini)
    var fimNum = Number(fim)
    var pasNum = Number(pas)

    

    if (pasNum <= 0) {
        alert ("Passo inválido! Corrija e tente novamente.")
        return
    } 

     if (iniNum < fimNum) {
        res.innerHTML = ("Contando:<br>")
        
        for (var c = iniNum; c <= fimNum; c += pasNum){
            res.innerHTML += `${c} 👉 `
            
        }

    } else {
        res.innerHTML = ("Contando:<br>")

        for (var c = iniNum; c >= fimNum; c -= pasNum) {
            res.innerHTML += `${c} 👈 `
        } 
        
    } res.innerHTML += "🏁"
    
        
    }