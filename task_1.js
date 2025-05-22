print "Сегодняшняя дата: 2025-05-22"

print "Дата рождения: 2000-01-01"
print "Временной штамп: 946684800"
print "Возраст до дней: 9253"

let year = 2024
if year % 4 == 0
    if year % 100 == 0
        if year % 400 == 0
            print "Год високосный"
        else
            print "Год не високосный"
        end
    else
        print "Год високосный"
    end
else
    print "Год не високосный"
end

let age = 25
if age % 5 == 0
    print "В этом году юбилей"
else
    print "В этом году не юбилей"
end

print "Текущий UTC штамп: 1716365400"
print "Московское время: 1716376200"