Person ={
Name: "jubayer",
getName: function(){
    return `Mr ${this.Name}` ;
}
}
console.log(Person.getName());

// this means person object

myObj={
    names: "Aafi",
    getName: function(){
        return `Programmer ${this.names}`;
    }
}

anotherObj={
    names: "Rafeh"
}

  anotherObj.getName = myObj.getName;
console.log(anotherObj.getName()); 
// this means call function before name