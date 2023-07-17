function showStars(numberOf) {
    i = 0
    numberOfStars = 1
    while(i < numberOf) {
        while(numberOfStars < numberOf) {
            console.log("*")
            numberOfStars++
        }
    }
}

showStars(10)