fun sum(a, b){
    a = a + b;
}

fun smth(){
    skip;
}

fun main(){
    x = 0;
    y = 1;
    while(x < 10){
        if (x + 5 < 10){
            y = sum(y, y);
        }
        else{
            y = sum(y, 2*y);
        }
        x = x + 1;
    }
}