function getRandomFruit() {
    const fruits = ['🍊', '🍇', '🍒']
    let index = Math.floor(Math.random() * fruits.length)
    return fruits[index]
}

function checkSlot(fruit1, fruit2, fruit3) {
    if (fruit1 === fruit2 && fruit1 === fruit3) {
        return "You win!"
    } else {
        return "You lose!"
    }
}

class Machine extends React.Component {
    render() {

        const fruit1 = getRandomFruit()
        const fruit2 = getRandomFruit()
        const fruit3 = getRandomFruit()
        
        return(
            <div>
                  <div>{fruit1} {fruit2} {fruit3}</div>
                  <p>{checkSlot(fruit1, fruit2, fruit3)}</p>
            </div>
        )
    }
}