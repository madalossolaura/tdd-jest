export default number => {
    let factorial = 1

    for (let i = number; i>= 1; i--) {
        factorial = factorial * i
    }

    return factorial
}