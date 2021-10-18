# Формальные языки: отчет по проекту
Шестаков Денис, Зеленцова Ирина

# Синтаксис языка

## Объявления

1. Функции
fun function_name(arguments){operator}
## Выражения(expressions):
1. Литералы
2. Переменные
3. Вызовы функций
4. Их комбинации через унарные и бинарные операторы
## Операторы(operators):
1. skip
2. Условный оператор:
operator -> if (expression){operator}
operator -> if (expression){operator} else {operator}
3. Цикл с предусловием
operator -> while(expression){operator}
4. Связывание переменной
operator -> variable = expression
5. Последовательность операторов
 operator -> operator; operator
6. Вызов функции
operator -> function_name(arguments)


# Парсер
[to be continued...]

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

1. Разобраться с новой технологией для лексера/парсера ANTLR
2. Выучить TypeScript ~~за 2 дня~~
3. Склеить из туториалов и репозиториев на GitHub работающее расширение ~~и не умереть в процессе~~
