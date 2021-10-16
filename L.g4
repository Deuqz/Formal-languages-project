grammar L;
    start : funcs ;

    funcs   : FUN name=NAME toArgs toBody funcs      #funcGlob
            | FUN name=NAME toArgs toBody            #func
            ;

    toArgs : '(' ')'             #toArgsEmpty
           | '(' args ')'        #toArgsNotEmpty
           ;

    args  : name=NAME ',' args   #argsVals
          | name=NAME            #argsVal
          ;
    
    toBody : '{' '}'             #toBodyEmpty
           | '{' body '}'        #toBodyNotEmpty
           ;

    body  : oper ';' body        #bodyCode
          | oper ';'             #bodyOper
          ;


    oper  : name=NAME '=' expr                                      #opBind
          | name='skip'                                             #opSkip
          | IF '(' expr ')' manage=toBody ELSE alternative=toBody   #opIfElse
          | IF '(' expr ')' toBody                                  #opIf
          | WHILE '(' expr ')' toBody                               #opWhile
          | name=NAME toArgsCall                                    #opFuncCall
          ;

    toArgsCall : '(' ')'                 #toArgsCallEmpty
               | '(' argsCall ')'        #toArgsCallNotEmpty
               ;

    argsCall  : val=expr ',' argsCall      #argsCallVals
              | val=expr                   #argsCallVal
              ;

    expr  : atom=INT '^'  expr                                    #exprExp1
          | atom=NAME '^' expr                                    #exprExp1
          | '(' left=expr ')' '^' right=expr                      #exprExp2
          | op='-' expr                                           #exprOpUn
          | left=expr op=('*'|'/') right=expr                     #exprOpBin
          | left=expr op=('+'|'-') right=expr                     #exprOpBin
          | left=expr op=('=='|'/='|'<='|'<'|'>='|'>') right=expr #exprOpBin
          | op='!' expr                                           #exprOpUn
          | left=expr op='&&'      right=expr                     #exprOpBin
          | left=expr op='||'      right=expr                     #exprOpBin
          | '(' expr ')'                                          #exprParen
          | atom=NAME                                             #exprAtom
          | atom=INT                                              #exprAtom
          | name=NAME toArgsCall                                  #exprFuncCall
          ;

    FUN   : 'fun'  ;
    IF    : 'if'   ;
    ELSE  : 'else' ;
    WHILE : 'while';

    NAME  : ('a'..'z'|'A'..'Z')('a'..'z'|'A'..'Z'|'_'|'0'..'9')* 
          ;

    INT   : ('0'..'9')+ ;

    WS    : [ \t\r\n]+ -> skip ;