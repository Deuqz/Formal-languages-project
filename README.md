# Формальные языки: отчет по проекту
Работы велась с абстрактным синтаксисом языка L: https://github.com/kajigor/fl-2021-hse-win/blob/proj/lang/L.md
* Разработан конкретный синтаксис языка (описан ниже).
* Написан парсер языка (в папке Parser, инструкция ниже).
* Реализована поддержка языка в среде разработки VSCode (в папке lsp).

# Синтаксис языка
Язык имеет C-подобный синтаксис, представляет собой последовательность функций с одной функцией-входом *main*.

## Функции
Объявление функции выглядит следующим образом:
```
fun function_name __args__ __body__
```
Здесь ```__args__``` \- набор переменных через запятую в виде ```(a_1, a_2,...)```.  
```__body__``` \- тело функции, состоящее из последовательности операторов через запятую.
Например:
```
fun nothing(a, b){}
```
## Выражения(expressions):
Выражения могут являться следующими сущностями:
1. Литералы: 
  * Натуральные числа в десятичной записи: ```0, 10, 1234,...```
  * Натуральные числа в двоичной записи: ```0x101010101```
  * Строчки в виде: ```"string"```
2. Переменные  
   Переменные должны начинаться с латинской буквы, далее могут идти латинские буквы, цифры и знак _.  
   Например: ```a, lenStr, mySuper_important_123class```
3. Вызовы функций  
   Вызовы функций имеют вид: ```function_name __argsCall__```, 
   где ```__argsCall__``` - это наборы выражений через запятую, т.е. ```(expr1, expr2, expr3,...)```
   Например:
   ```
   nothing(a*b + 1, a - b + 3)
   ```
4. Различные комбинации вышеперечисленных сущностей с помощью операций различной арности и ассоциативности.

## Операторы(operators):
Оператором может быть какая-то из перечесленных ниже сущностей. Каждый оператор должен оканчиваться символом ```;```  
Далее ```__expr__``` - некоторое выражение в круглых скобках, например ```(x < 1)```.  
```__body__``` - последовательность операторов в фигурных скобках, например ```{x = 1;}```
1. skip  
   Данный оператор означает, что реализация соответствующей функции неопределена.
2. Условный оператор. Должен иметь следующий вид:
```
if __expr__ __body__
if __expr__ __body__ else __body__
```
3. Цикл с предусловием. Должен иметь следующий вид:
```
while __expr__ __body__
```
4. Связывание переменной. Слева от символа ```=``` находится имя переменной, справа выражение.
```
var = expr
```
5. Последовательность операторов. Каждый должен заканчиваться символом ```;```
```
operator; 
operator;
 ```
6. Вызов функции. Аналогично вызову функции в случае выражения:
```
function_name __argsCall__
```
где ```__argsCall``` это последовательность выражений ```(expr1, expr2, expr3,...)```

##Комментарии :

Комментарии оборачиваются в символы \#. Комментарием является любой текст между двумя соседними знаками \#  
Пример комментария: ```#comment#```

# Парсер
1. Чтение кода программы и построение по нему дерева
2. Вывод дерева в текстовый файл \*.txt и его отрисовка в \*.png файл
3. Обработка ошибок при парсинге
4. Написание тестов для проверки корректности работы  

Инструкция по сборке:  
Устанавливаем *antlr*: https://github.com/antlr/antlr4/blob/master/doc/getting-started.md  
Генерируем нужные файлы: ```antlr4 -Dlanguage=Python3 -visitor L.g4```  
Запускаем питоновский файл, передавая ему файл с кодом: ```python3 visitorL.py prog.L```

После парсинга кода получаем на выходе представление дерева в текстовом виде в файле ```prog.txt``` 
и в графическом виде в файле ```prog.png```. Для генерации графического файла необходима утилита Graphviz. Установка:
https://graphviz.org/

# Поддержка в среде разработки VSCode
1. Подсветка синтаксиса
2. Snippetы с умным заполнением полей
3. Диагностика на название функций в стиле не camelCase + QuickFix
4. Диагностика использования функции без определения
5. Автодополнение функциями и переменными в зависимости от положения каретки и области видимости

# Вклад каждого участника
Совместными усилиями был придуман язык
## Шестаков Денис:
1. Написана вся грамматика для языка с помощью ANTLR
2. Написан парсер на Python, который строит дерево

## Зеленцова Ирина:

1. Реализована поддержка языка в среде разработки VSCode

# Сложности возникшие в работе:

1. Разобраться с новой технологией для лексера/парсера ANTLR, найти нужные классы в документации
2. Выучить TypeScript ~~за 2 дня~~
3. Склеить из туториалов и репозиториев на GitHub работающее расширение ~~и не умереть в процессе~~
