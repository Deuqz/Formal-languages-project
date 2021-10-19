fun main(a, b){
    #x = 2 ^ "abc";           # # Ok #
    #x = 1 + 2 + 3;           # # Left-associative  #
    #x = 1 ^ 2 ^ 3;           # # Right-associative #
    #x = 1 < 2 || a == 3;     # # Ok #
    #x = 1 && 2 + 2 && 3;     # # n && m && k #
    #x = 1 || 2 || 3 * 2 - 1; # # n || m || k #
    
    x = 1 && 2 + 3 + 4 || 1 + 2 || 10 && 2 ^ 3 ^ 4;
}
