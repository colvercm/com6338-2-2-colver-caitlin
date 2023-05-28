// Your code here

function greet(name) {
    var name = prompt('What is your name?');

    if (name && name.trim) {
        var trimmedName = name.trim()
        alert('Hello, ' + trimmedName);
    } else {
        alert('Hello')
    }
    
    var age = prompt('How old are you?');
        console.log(parseInt(age));

    var ageResponse = confirm('Have you had your birthday this year?');

    if (ageResponse === true) {
        alert('You were born in ' + (2023 - age))
    
        } else { 
        alert('You were born ' + ((2023 - 1) - age))
    }

    const today = new Date('May 28, 23');
    console.log (today.getFullYear());
    
}






    





