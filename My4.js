var quotes = ["Be the change you wish to see.", "Social progress can be measured by the social position of the female sex.", "I like the religion that teaches liberty, equality and fraternity.", "If you tremble with indignation at every injustice then you are a comrade of mine.", "Teaching is a very noble profession that shapes the character, caliber, and future of an individual. If the people remember me as a good teacher, that will be the biggest honour for me."];


var colors = ["red", "pink", "yellow", "green", "white", "darkcyan", "silver", "BlanchedAlmond", "chocolate", "darkorchid"];




var i = 0;

var authors = ["Mahatma Gandhi", "Karl Marx", "B. R. Ambedkar", "Ernesto Che Guevara", "Abdul Kalam"];

function change() { "use strict";
        i += 1;
        if (i === quotes.length) {
        i = 0;
    }
                        
                        
    document.getElementById("one").innerHTML = quotes[Math.floor(Math.random() * 5)];
    document.getElementById("two").innerHTML = authors[Math.floor(Math.random() * 5)];
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    document.getElementById("container1").style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

      }