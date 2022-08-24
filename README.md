https://olerinskaia.github.io/eldritch-horror-codejam

# Eldritch Horror Codejam

## Описание проекта
В рамках данного CodeJam необходимо будет создать небольшое приложение-хелпер для настольной игры "Древний Ужас"

## Ключевые навыки:
- создание сложного алгоритма замешивания колоды

## Синопсис и условия алгоритма
Многие любители настольных игр слышали про Древний ужас как одно из интереснейших настольных приключений, однако есть одна сложность: подготовка к игре для неопытных игроков занимает от 40 минут до часа времени и одно из самых сложных условий это составление колоды мифов

Для сборки колоды мифов используется три разных типа карт: синие, коричневые и зеленые (тип определяется по цвету полосы в шапке карты)
Кроме того есть разная сложность карт:
1. сложные карты имеют щупальцы вокруг название как на Синей карте в пример
2. обычные карты не умеют никаких знаков как Коричневая карта в примере
3. Легкие карты имеют изображение снежинок вокруг названия как зеленая карта в примере

Примеры карт:

![Синяя карта](https://github.com/Luffi2539/eldritch-codejam/blob/main/assets/MythicCards/blue/blue2.png?raw=true)
![Коричневая карта](https://github.com/Luffi2539/eldritch-codejam/blob/main/assets/MythicCards/brown/brown1.png?raw=true)
![Зеленая карта](https://github.com/Luffi2539/eldritch-codejam/blob/main/assets/MythicCards/green/green1.png?raw=true)

Вам будут предоставлены заранее подготовленные ассеты карт а также файлы с данными этих карт

На первом этапе игроку будет необходимо выбрать Древнего который укажет схему колоды и сколько карт какого цвета необходимо на каждом этапе игры

Пример карты Древнего:

![Древний](https://user-images.githubusercontent.com/43149261/172723651-a9c7e003-96b7-44e4-944a-54ad12755fbd.png)

Состав карт необходимый для игры считается по сумме карт разных цветов на все 3 этапа
Исходя из примера понадобится:
Зеленых карт: 5
Синих карт: 2
Коричневых карт: 9

Далее необходимо будет определить сложность игры:

Из общего набора карт необходимо будет выбрать карты согласно выбранной сложности:

# Очень легкий уровень сложности: из набора берутся все карты со снежинками, если карт не хватает то добираются обычные карты
# Легкий уровень сложности: из набора убираются карты с щупальцами
# Средний уровень сложности: набор остается нетронутым
# Высокий уровень сложности: из набора убираются карты со снежинками
# Очень высокий уровень сложности: из набора берутся все карты со щупальцами, если карт не хватает то добираются обычные карты

Исходя из примера: Мы выбрали очень легкий уровень сложности и нам необходимо 9 коричневых карт, но всего во всем наборе только 5 коричневых карт со снежинкой, значит мы берем эти пять карт и дальше случайным образом выбираем 4 карты обычной сложности

После того как необходимое количество карт набрано мы должны создать миниколоды для каждого этапа.
Для этого отобранные карты перемешиваются отдельно (должно получиться три маленькие колоды в которых будут расположены зеленые синие и коричневые карты соответственно в случайном порядке

Затем необходимо из этих колод выбрать необходимое количество карт для каждого этапа:
Исходя из примера:

Для Этапа 1 согласно схеме нам необходимы 1 зеленая, 2 коричневые и 1 синяя карта.
Мы случайным образом выбираем 1 карту из миниколоды отобранных зеленых карт, 2 карты из коричневой колоды и 1 из синей, после чего полученные 4 карты перемешиваем

Повторяем данное действие для второго и третьего этапа в результате колоды изначально перемешанные по цветам превратятся в 3 колоды каждого из этапов

Далее положенные колоды необходимо положить друг на друга, чтобы карты из первого этапа входили в игру первыми, потом шли карты второго этапа и под конец карты третьего этапа

Вырезка из правил игры о сборе колод (данная вырезка не включает в себя разделение по уровням сложности поэтому алгоритм немного отличается
![image](https://user-images.githubusercontent.com/43149261/172725219-0d0c9f22-0594-4b4b-9a2b-ce4427c682ab.png)

Демо готового проекта: [Демо](https://codejam-demo.herokuapp.com/)

## Файлы для работы
В ветке main данного репозитория можно найти 2 папки assets и data которые содержать полезные файлы и изображения для выполнения задания.
Вы можете сделать форк данного репозитория чтобы потом спокойно скопировать себе файлы

## Требования к верстке:
Так как основная задача это алгорит а не верстка, то особых требований нет, повторять верстку из демо не обязательно вы вольны сами расположить элементы любым удобным для вас способом

## Технические требования
1. На выбор предоставляется минимум одна карта древнего (максимум 4) +5-20 баллов(по 5 за каждого древнего)
2. На выбор предоставляется несколько уровней сложности (максимум 5) +5-25 баллов(по 5 за каждый уровень сложности
3. Карты замешиваются согласно правилам игры +40 баллов
4. Есть трекер текущего состояния колоды +20 баллов

Максимальный балл за задание: 100 (105 потенциальных из которых 5 как поправка на проверяющих)

## Если задание очень сложное
Как вы можете заметить максимальные баллы идут за замешивание колоды и за трекер. Если задание кажется очень сложным для вас
выберите одного любого Древнего по желанию и замешивайте карты согласно обычному уровню сложности
в этом случае вам не нужно будет делать реализацию выбора древнего, выбора сложности а нужно будет сделать один вариант замешивания для статичных условий
Выбор Древнего и сложности это уже задание со звездочкой для тех кто хочет попробовать более сложный вариант задания

## Требования к репозиторию
- задание выполняется в личном репозитории.
- создайте свой личный приватный репозитоий с названием `codejam-eldritch`

![image](https://user-images.githubusercontent.com/43149261/172828241-bb305422-e43c-4f90-876b-571874c3a7af.png)

- в денб запуска кроссчека необходимо сделать репозиторий публичным чтобы была возможность деплоя на gh-pages и чтобы дать доступ проверяющим
Для этого необходимо перейти в настройки репозитория и в основных настройках пролистать вних до настроек видимости

![image](https://user-images.githubusercontent.com/43149261/172828407-e40746e9-b32b-424d-ad7a-f14a6a72dd3b.png)

- если у вас не создаётся приватный репозиторий школы, задание можно выполнять в личном приватном репозитории
- если у вас не создаётся приватный репозиторий школы, задание можно выполнять в личном приватном репозитории
- для деплоя используйте `gh-pages`
- если не можете для деплоя использовать `gh-pages`, используйте https://app.netlify.com/drop. Название страницы дайте по схеме: имя гитхаб аккаунта - название таска

## Требования к коммитам
- История коммитов должна отображать процесс разработки приложения.
- [Названия коммитов дайте согласно гайдлайну](https://docs.rs.school/#/git-convention)

## Требования к Pull Request
- Название Pull Request дайте по названию задания
- [Описание Pull Request дайте по схеме](https://docs.rs.school/#/pull-request-review-process?id=Требования-к-pull-request-pr)  
**Мержить Pull Request из ветки разработки в ветку `main` не нужно**.

## Чтобы получить баллы за задание необходимо: 
- Выполнить задание \*
- Засабмитить задание т.е. отправить его на проверку \**  
- Если задание проверяется в ходе кросс-чека, проверить все присланные на проверку работы и засабмитить результаты проверки до дедлайна кросс-чека \***  

\* *Весь код проекта вам необходимо написать самостоятельно, только так можно чему-то научиться.  
Копирование чужого кода (`Ctrl + C`, `Ctrl + V`) на курсе запрещено.  
\** *Засабмитить задание можно только до дедлайна таска, после дедлайна сабмит недоступен*  
\*** *Сабмит результатов кросс-чек проверки доступен и после дедлайна кросс-чека, но на оценки проверяющего  и проверяемых не влияет*  

## Как сабмитить задание
После выдачи таска, но до наступления дедлайна зайдите в rs app https://app.rs.school/, выберите **Cross-Check: Submit**, в выпадающем списке выберите таск, в названии которого есть слово `codejam`, в поле **Solution URL** добавьте ссылку на задеплоенную версию созданного вами сайта, нажмите кнопку **Submit**.

## Рекомендации по сабмиту
- Засабмитить задание рекомендуется как можно раньше, как только в rs app появится такая возможность. После сабмита задание можно продолжать выполнять до самого дедлайна
- Так как проект выполняется в приватном репозитории, сабмитить ссылку на репозиторий или pull request нет смысла - проверяющий его не увидит. Приватный репозиторий школы видите только вы сами, админы курса, и увидят ваши менторы, когда они появятся 
- Убедитесь, что задеплоенная вами ссылка открывается в режиме инкогнито браузера
- Сделайте скриншот засабмиченной ссылки и сохраняйте его у себя до старта кросс-чека. Если вам не придут работы на проверку, скриншот послужит доказательством, что вы вовремя засабмитили ссылку на работу. В таком случае вашу работу проверят в ходе апелляции

## Проверка задания
- форма проверки каждой части задания - кросс-чек
- инструкция по проведению cross-check: https://docs.rs.school/#/cross-check-flow
