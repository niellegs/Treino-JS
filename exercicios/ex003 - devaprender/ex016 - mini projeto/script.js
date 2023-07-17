function plus(x) {
    var total = 0;
    for(i = 0; i <= x; i++) {
        if(i % 3 == 0 || i % 5 == 0) {
            total += i
        }
    }
    return console.log(total)
}

plus(10)