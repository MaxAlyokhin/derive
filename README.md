# Дрейф

## Веб-приложение для психогеографических исследований

Инструменты: HTML5, CSS3 (Flexbox / Grid), Sass, JS (jQuery), Gulp, VS Code, npm

## Что такое психогеография?

Под психогеографией понимают изучение влияния территориального окружения, чаще всего урбанистического, на поведение, эмоции и чувства человека, а также изучение незнакомых территорий в рамках городского пространства.

Человек, выходя из дома на улицу, всегда имеет конкретный мотив, который его
 направляет. Если нет мотива, то человек может так и не побывать в различных частях города за
 ненадобностью. В рамках современного восприятия, свобода практикуется как замкнутый круг, в котором кружит
 человек: каждый день, одним и тем
 же путём, человек движется от дома на работу (учёбу), а потом возвращается
 домой. Он, как правило, не осознаёт, что он может выйти из дома и пойти
 в любом направлении. Таким образом, куда бы человек не пошёл, улица представляется туннелем между двумя
 помещениями, который желательно поскорее преодолеть.

Основной техникой изучения является дрейф — немотивированное перемещение по городу, при котором человек
 воспринимает знакомую и надоевшую местность заново.
 Дрейф может быть алгоритмическим и неалгоритмическим. То есть, дрейф может
 производиться по заранее заданному алгоритму, который представляет собой
 совокупность действий (заданий), которые надо выполнить или повторять, а может направляться сугубо с точки зрения
 своих чувственных ощущений, определяющих направление движения (городское фланирование). В рамках этой программы
 реализуется, можно сказать, алгоритмический дрейф,
 только алгоритм задаётся не человеком по его усмотрению, а программой, являющейся, по отношению к нему, внешней
 независимой силой. То есть, реализуется передача своей субъектности программе.
 
 ## Как работает приложение?

Ядром приложения является файл screen-manager.js, использующий библиотеку jQuery. Этот код управляет единственным HTML-файлом, в котором описаны "экраны" (страницы), которые скрываются и показываются при необходимости. 

Приложение выдаёт пользователю команды, направляя его по городу. Эти команды, как правило, завязаны на методе Math.random(), генерящем псевдослучайные числа, которые затем используются для формирования соответствующих команд.

Оценить приложение можно по ссылке:
http://derive.stranno.su

 # Derive

 ## Web-application for psychogeographic research.
 
 Instruments: HTML5, CSS3 (Flexbox / Grid), Sass, JS (jQuery), Gulp, VS Code, npm
 
 ## What is psychogeography?
 
 Psychogeography refers to the study of the influence of the territorial environment, often urban, on a person's
 behaviour, emotions and feelings, and also the study of unfamiliar areas within urban space.
 
 A person, when leaving home on the street, always has a specific motive, which he directs. If there is no motive, a person may never  visit different parts of the city for
 useless. Within the framework of modern perception, freedom is practiced as a vicious circle in which a person
 turns around: every day, by one and the same theme
 in the same way, a person moves from home to work (school), and then comes back
 home. He doesn't usually realize that he can go out of the house
 in any direction. Thus, wherever a person goes, the street appears to be a tunnel between two rooms, which is
 desirable to overcome as soon as possible.

The main technique of study is dérive ("drift") — unmotivated movement around the city, in which a person
 is perceiving the familiar and tired terrain anew.
 The drift can be algorithmic and non-algorithmic. That is, drift can
 to be performed according to a predetermined algorithm, which is
 a set of actions (tasks) that need to be performed or repeated, or may be directed solely in terms of
 their sensual sensations that determine the direction of movement (urban planning). Within the limits of this
 program, it is possible to tell, the algorithmic drift is realised, it is possible to tell,
 only the algorithm is defined not by a person at his discretion, but by a program which is an external independent
 force in relation to him. That is, the transfer of one's own subjectivity to the program is realized.
 
 ## How does the application work?

The kernel of the application is the screen-manager.js file that uses the jQuery library. This code manages the only HTML file that describes the "screens" (pages) that are hidden and displayed if necessary. 

The application gives commands to the user by directing him/her through the city. These commands are usually based on the Math.random() method, which generates pseudo-random numbers, which are then used to form the corresponding commands.

You can check the application by clicking here:
http://derive.stranno.su
