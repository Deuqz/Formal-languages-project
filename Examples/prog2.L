fun sum(a, b){
    a = a + b;
}

fun smth(){
    skip;
}

fun main(argv1, argv2, argv3){
    x = 0;
    y = 1;
    while(x < 10 || x > 100 || x == 50){
        read(z);
        if (x + 5 < 10 && 2 * x > 10){
            smth();
            y = sum(y + x + z, y - z);
        }
        else{
            y = sum(y, 2*y + x^2^z);
        };
        x = x + 1;
    };
}