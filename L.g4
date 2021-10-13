grammar L;
    start : funcs ;

    funcs   : FUN name=NAME args body funcs #Func
            | FUN name=NAME args body       #Func
            ;

    args  : '(' args ')'  #Args
          | NAME ',' args #Args
          | NAME          #Args
          ;

    body  : '{' body '}'  #Body
          | oper ';' body #Body
          | oper ';'      #Body
          ;

    oper  : SKIP          #opSkip
          | IF '(' expr ')' body ELSE body #opIfElse
          | IF '(' expr ')' body           #opIf
          | WHILE '(' expr ')' body        #opWhile
          | name=NAME '=' expr             #opBind
          | name=NAME args                 #opFuncCall
          ;


    expr  : name=NAME args                     #exprFuncCall
          | name=NAME                          #exprName
          | exponentiation                     #exprExponent
          | negative                           #exprNegative
          | composition                        #exprComposition
          | amount                             #exprAmount
          | expr ('=='|'/='|'<='|'<'|'>'|'>=') #exprComp
          | not                                #exprNot
          | expr '&&' expr                     #exprAnd
          | expr '||' expr                     #exprOr
          | '(' expr ')'                       #exprParen

    exponentiation : name=NAME '^' exponentiation    #expNameExp
                   | '(' expr ')' '^' exponentiation #expExprExp
                   | expr                            #expExpr

    negative : '-' NAME #negName
             | '-' '(' expr ')' #negExpr

    composition : expr ('*'|'/') NAME
                | 

    FUN   : 'fun'   { print("fun");   };
    IF    : 'if'    { print("if");    };
    ELSE  : 'else'  { print("else");  };
    WHILE : 'while' { print("while"); };
    SKIP  : 'skip;  { print("skip");  };

    NAME  : ^('fun ' | 'if ' | 'else ' | 'while ') s=('a'..'z'|'A'..'Z')('a'..'z'|'A'..'Z'|_|'0'..'9')* 
          { print(s);};

    INT   : ('0'..'9')+ ;

    WS    : [ \t\r\n]+ -> skip ;