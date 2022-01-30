const seatPankti = [
    [Ankit, Parul, Purnima],
    [Rohit, Aakash, Anupam],
    [Siddharth, Ajay, Sandeep],
    [Altaap, Shreshtha, Shalini]
]
for (let i = 0; i < seatPankti.length; i++;) {
    const row = seatPankti[i];
    console.log(`ROW #${i + 1}`)
    for (let j = 0; j < row.length; j++;) {
        console.log(row(j))
    }
}