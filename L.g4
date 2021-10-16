grammar L;
    start : funcs ;

    funcs   : FUN name=NAME args body funcs #funcGlob
            | FUN name=NAME args body            #func
            ;

    args  : '(' ')'                 #argsEmpty
          | '(' args ')'            #argsParen
          | name=NAME ',' args      #argsVal
          | name=NAME               #argsName
          ;

    body  : '{' '}'               #bodyEmpty
          | '{' body '}'          #bodyParen
          | oper ';' body         #bodyCode
          | oper ';'              #bodyOper
          ;

    oper  : name='skip'          #opSkip
          ;

    FUN   : 'fun'  ;
    IF    : 'if'   ;
    ELSE  : 'else' ;
    WHILE : 'while';

    NAME  : ('a'..'z'|'A'..'Z')('a'..'z'|'A'..'Z'|'_'|'0'..'9')* 
          ;

    INT   : ('0'..'9')+ ;

    WS    : [ \t\r\n]+ -> skip ;