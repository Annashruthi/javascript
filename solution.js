
let n = 20;


for (let i = 1; i <= n; i++) {

    
    if (i % 2 === 0) {
        let square = i * i; 

        
        console.log("Number:", i, "| Square:", square);

        
        if (square > 50) {
            console.log("Square is greater than 50");
        }
    }
}
