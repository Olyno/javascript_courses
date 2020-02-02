// Lorsque les élements de ma page ont été chargés
document.addEventListener('DOMContentLoaded', function () {

    // On définit les variables
    var amount = document.getElementById('amount')
    var people = document.getElementById('people')
    var result = document.getElementById('result')
    var calculator = document.getElementById('calculator')

    // Lorsque l'on clique sur le "calculator"
    calculator.addEventListener('click', function () {

        // On calcule le total
        var total = Number(amount.value) / Number(people.value)

        // Puis on l'affiche à l'emplacement adéquate
        result.innerText = total

    })

})