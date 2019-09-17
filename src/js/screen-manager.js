// Счётчик
var click = 1;
// Для часов
var intervalID;
// Для циклического дрейфа
var RegimeLanguage;

// Управление UI ------------------------------------------------------------------------

$( document ).ready(function(){

// Изначально все элементы интерфейса скрыты (display: none, opacity: 0). 
// Управление осуществляется переключением классов .active и, через задержку, .visible.

// Экран выбора языка / Экран приветствия -----------------------------------------------

	$( '.lang__en' ).on('click', function(){ 
		RegimeLanguage = 1;
		// Скрываем экран выбора языка
		$('.lang').addClass('hidden'); setTimeout(function () { $('.lang').addClass('disactive'); }, 500);
		// Показываем блоки на выбранном языке, навсегда выключая противоположный
		$('.ru').addClass('checked');
		// Даём возможность скроллить
		$('body').removeClass('overflow-hidden');
		// Показываем экран приветствия
		$('.annotation-screen').addClass('active'); setTimeout(function () { $('.annotation-screen').addClass('visible'); }, 500);
	})

	$( '.lang__ru' ).on('click', function(){ 
		RegimeLanguage = 0;
		// Скрываем экран выбора языка
		$('.lang').addClass('hidden'); setTimeout(function () { $('.lang').addClass('disactive'); }, 500);
		// Показываем блоки на выбранном языке, навсегда выключая противоположный
		$('.en').addClass('checked'); 
		// Даём возможность скроллить
		$('body').removeClass('overflow-hidden');
		// Показываем экран приветствия
		$('.annotation-screen').addClass('active'); setTimeout(function () { $('.annotation-screen').addClass('visible'); }, 500);
	})

// Экран приветствия / Экран меню -------------------------------------------------------

	$('.annotation-screen__action-button').on('click', function(){
		// Скрываем экран приветствия
		$('.annotation-screen').removeClass('visible'); setTimeout(function () { $('.annotation-screen').removeClass('active'); }, 500);
		// Показываем меню
		$('.menu').addClass('active'); 
		setTimeout(function () { 
			$('.menu').addClass('visible');
			// Убираем скролл
			$('body').addClass('overflow-hidden');
			$('html').scrollTop(0);
		}, 500);
	})

// Управление иконкой-гамбургером -------------------------------------------------------

	$('.hamburger').on('click', function(){
		// Запускаем анимацию
		$(this).toggleClass('hamburger_active');
		// Скрываем скролл
		$('body').toggleClass('overflow-hidden');
		// Переключаем меню
		$('.container').toggleClass('hidden'); 
		if (click) {
			$('.menu').toggleClass('active'); setTimeout(function () { $('.menu').toggleClass('visible'); }, 300);
			click = 0;
		}
		else {
			$('.menu').toggleClass('visible'); setTimeout(function () { $('.menu').toggleClass('active'); }, 1000);
			click = 1;	
		}
		
	})

// Экран "Простой дрейф" ----------------------------------------------------------------

	$('.item__simple-derive-button').on('click', function(){
		Reset();
		click = 1;
		// Скрываем меню
		$('.menu').removeClass('visible'); 
		// Показываем гамбургер
		$('.hamburger').removeClass('disactive').toggleClass('hamburger_active');
		//Показываем экран "Генератор времени"
		$('.container').removeClass('hidden');
		$('.simple-derive-screen').addClass('active-grid');

		// Задержки
		setTimeout(function () { 
			$('.menu').removeClass('active'); 
			$('.simple-derive-screen').addClass('visible');
			$('.hamburger').removeClass('hidden');
			// Вызываем функцию
			SimpleDeriveScreenFunction();
		}, 500);	
	})

	// По нажатию на action-кнопку запустить функцию
	$('.simple-derive-screen__action-button').on('click', function(){
		SimpleDeriveScreenFunction();
	})
	
// Экран "Циклический дрейф" ------------------------------------------------------------

	$('.item__cyclic-derive-button').on('click', function(){
		Reset();
		click = 1;
		// Скрываем меню
		$('.menu').removeClass('visible'); 
		// Показываем гамбургер
		$('.hamburger').removeClass('disactive').toggleClass('hamburger_active');
		//Показываем экран "Генератор времени"
		$('.container').removeClass('hidden');
		$('.cyclic-derive-screen').addClass('active');

		// Задержки
		setTimeout(function () { 
			$('.menu').removeClass('active'); 
			$('.cyclic-derive-screen').addClass('visible');
			$('.hamburger').removeClass('hidden');
			// Вызываем функцию
			CyclicDeriveScreenFunction();
		}, 500);	
	})

	// По нажатию на action-кнопку запустить функцию
	$('.cyclic-derive-screen__action-button').on('click', function(){
		CyclicDeriveScreenFunction();
	})

// Экран "Углублённый дрейф" ------------------------------------------------------------

	$('.item__deep-derive-button').on('click', function(){
		Reset();
		click = 1;
		// Скрываем меню
		$('.menu').removeClass('visible'); 
		// Показываем гамбургер
		$('.hamburger').removeClass('disactive').toggleClass('hamburger_active');
		//Показываем экран "Генератор времени"
		$('.container').removeClass('hidden');
		$('.deep-derive-screen').addClass('active-grid');

		// Задержки
		setTimeout(function () { 
			$('.menu').removeClass('active'); 
			$('.deep-derive-screen').addClass('visible');
			$('.hamburger').removeClass('hidden');
			// Вызываем функцию
			DeepDeriveScreenFunction();
		}, 500);	
	})

	// По нажатию на action-кнопку запустить функцию
	$('.deep-derive-screen__action-button').on('click', function(){
		Methods()
	});	

// Экран "Генератор времени" ------------------------------------------------------------

	$('.item__generator-button').on('click', function(){
		Reset();
		click = 1;
		// Скрываем меню
		$('.menu').removeClass('visible'); 
		// Показываем гамбургер
		$('.hamburger').removeClass('disactive').toggleClass('hamburger_active');
		//Показываем экран "Генератор времени"
		$('.container').removeClass('hidden');
		$('.generator-screen').addClass('active');

		// Задержки
		setTimeout(function () { 
			$('.menu').removeClass('active'); 
			$('.generator-screen').addClass('visible');
			$('.hamburger').removeClass('hidden');
			// Вызываем функцию
			GeneratorScreenFunction();
		}, 500);	
	})

// Экран "Справка" ----------------------------------------------------------------------

	$('.item__manual-button').on('click', function(){
		Reset();
		click = 1;
		// Даём возможность скроллить
		$('body').removeClass('overflow-hidden');
		// Скрываем меню
		$('.menu').removeClass('visible'); 
		// Показываем гамбургер
		$('.hamburger').removeClass('disactive').toggleClass('hamburger_active');
		//Показываем экран "Справка"
		$('.container').removeClass('hidden');
		$('.manual-screen').addClass('active'); 

		// Задержки
		setTimeout(function () { 
			$('.menu').removeClass('active'); 
			$('.manual-screen').addClass('visible');
			$('.hamburger').removeClass('hidden');
		}, 500);	
	})
})



// Функции ------------------------------------------------------------------------------

// Сброс всех открытых ранее экранов

	function Reset() {
		$('.simple-derive-screen, .cyclic-derive-screen, .deep-derive-screen, .generator-screen, .manual-screen').removeClass('active visible active-grid'); 
	}

// Управление экраном "Простой дрейф"---------------------------------------------------

	// Переменные для вычисления рандома
	var max = 3;
	var min = 0;

	function SimpleDeriveScreenFunction() {                                        

		// Очищаем на всякий случай таймер из Углублённого дрейфа
		clearInterval(intervalID);  

		// Генерим номер команды
		var r;
		r = Math.floor(Math.random() * (max - min)) + min;

		// Всё убираем
		$('.forward, .left, .right').removeClass('visible');

		// Описание функции выбора варианта
		function NextCommand() {
			switch (r) {
				case (0):
					$('.forward').addClass('visible');
					break;

				case (1):
					$('.left').addClass('visible');
					break;

				case (2):
					$('.right').addClass('visible');
					break;
			}
		}
		// Вызываем её с задержкой
		setTimeout(NextCommand, 1000);
	}

// Управление экраном "Циклический дрейф"------------------------------------------------

	function CyclicDeriveScreenFunction() {
		
		// Очищаем на всякий случай таймер из Углублённого дрейфа
		clearInterval(intervalID);                                                         
																													
		var action_value; // Количество команд в цикле                                 
		var max_value = 8;
		var min_value = 2;
		var action;  // Переменная для хранения номера case 
		var i;

		// Генерим случайное число для количества команд
		action_value = Math.floor(Math.random() * (max_value - min_value)) + min_value;                
		if (RegimeLanguage) {
			for (i = 0; i < action_value; i++) {
				action = Math.floor(Math.random() * (max - min)) + min;               
				switch (action) {

					case (0):
						$('.en-cycle-command' + i).html('LEFT').removeClass('disactive hidden');
						break;

					case (1):
						$('.en-cycle-command' + i).html('RIGHT').removeClass('disactive hidden');
						break;

					case (2):
						$('.en-cycle-command' + i).html('FORWARD').removeClass('disactive hidden');
						break;

				}
			}
		}

		else {
			for (i = 0; i < action_value; i++) {
				action = Math.floor(Math.random() * (max - min)) + min;               
				switch (action) {

					case (0):
						$('.ru-cycle-command' + i).html('ВЛЕВО').removeClass('disactive hidden');
						break;

					case (1):
						$('.ru-cycle-command' + i).html('ВПРАВО').removeClass('disactive hidden');
						break;

					case (2):
						$('.ru-cycle-command' + i).html('ПРЯМО').removeClass('disactive hidden');
						break;

				}
			}
		}
	}

// Управление экраном "Углублённый дрейф"------------------------------------------------

	// Количество команд варьируется от 15 до 29
	var value_of_methods;
	var MaxMethodValue = 30;
	var MinMethodValue = 15;
	var CurrentMethodValue;

	// При нажатии на кнопку меню выполняем
	function DeepDeriveScreenFunction() {
												
		// Очищаем таймер
		clearInterval(intervalID);                       

		// Текущий номер команды
		CurrentMethodValue = 0;
		// Количество команд в этом дрейфе
		value_of_methods = Math.floor(Math.random() * (MaxMethodValue - MinMethodValue)) + MinMethodValue;

		Methods();
	}

	//Генератор команд

	// Переменные для номера команды (11 методов)
	var method;
	var MaxMethodNumber = 10;
	var MinMethodNumber = 0;
	// Сколько кварталов идти
	var value_of_acts;
	var MaxValue = 5;
	var MinValue = 2;

	//По клику на action-кнопку выполнить
	function Methods() {

		//Скрываем все команды
		$('.forward, .left, .right, .stop, .transport, .north, .south, .west, .east, .street, .home').removeClass('visible');
		$('.deep-derive-screen__action-button').removeClass('disactive hidden down');

		//Вычисляем новые рандомы
		method = Math.floor(Math.random() * (MaxMethodNumber - MinMethodNumber)) + MinMethodNumber;
		console.log(method);
		value_of_acts = Math.floor(Math.random() * (MaxValue - MinValue)) + MinValue;

		//Показываем следующую команду
		setTimeout(ShowMethod, 1000);
		function ShowMethod() {
			//В зависимости от выбранного языка
			//На английском
			if (RegimeLanguage) {			

				//По каждому нажатию на ДАЛЬШЕ прибавляем 1 и проверяем, не закончился ли дрейф
				CurrentMethodValue++;
				if (CurrentMethodValue == value_of_methods) {
					// 0 скрыть все команды и кнопку
					$('.forward, .left, .right, .stop, .transport, .north, .south, .west, .east, .street, .home').removeClass('visible');
					$('.deep-derive-screen__action-button').addClass('hidden down'); 
					// 1 выдать команду "домой"
					$('.home').html('THE DRIFT IS OVER. GO HOME.').addClass('visible');
				}
				// Если дрейф не кончился, то показываем следующую команду
				else {
					switch (method) {

						// Метод "прямо"
						case (0):
							$('.forward').html(CurrentMethodValue + ' / ' + value_of_methods + '<br><br>FORWARD').addClass('visible');
							break;

						// Метод "влево"
						case (1):
							$('.left').html(CurrentMethodValue + ' / ' + value_of_methods + '<br><br>LEFT').addClass('visible');
							break;

						// Метод "вправо"
						case (2):
							$('.right').html(CurrentMethodValue + ' / ' + value_of_methods + '<br><br>RIGHT').addClass('visible');
							break;

						// Метод "стоп"
						case (3):
							// Количество секунд паузы
							var timer = 60;
							// Запускаем функцию отсчёта секунд
							TimerFunction();
							// Показываем команду
							$('.stop').html(CurrentMethodValue + ' / ' + value_of_methods + '<br><br>STOP<br>' + timer).addClass('visible');

							function TimerFunction() {

								// Каждую секунду делаем:
								intervalID = setInterval(function () {

									// Обновляем строку с новым значением времени
									$('.stop').html(CurrentMethodValue + ' / ' + value_of_methods + '<br><br>STOP<br>' + timer);

									// Скрываем action-кнопку
									$('.deep-derive-screen__action-button').addClass('hidden down');

									// Если таймер подошёл к концу, обнуляем интервал и воспроизводим звук
									if (timer == 0) {
										clearInterval(intervalID);
										SoundOfEnd();
										function SoundOfEnd() {
											var audio = new Audio();
											audio.src = '../sound_of_end.mp3';
											audio.play();
											// Показываем кнопку
											$('.deep-derive-screen__action-button').removeClass('hidden down');
										}
										// Переходим к следующему методу
										Methods();
									}

									// Делаем на секунду меньше
									timer = timer - 1;

								}, 1000);
							}
							break;

						// Метод "транспорт"
						case (4):

							// Получаем текущее время
							var date = new Date();
							var hours = date.getHours();
							// Если ночь, то транспорт не ходит, значит переходим к следующему методу
							if (hours >= 22 || hours <= 8) {
								Methods();
								break;
							}

							// Номер маршрута
							var transport_number;
							var transport_number_min = 0;
							var transport_number_max = 10;
							// Количество остановок
							var transport_stop_value;
							var transport_stop_value_min = 5;
							var transport_stop_value_max = 11;

							// Вычисляем рандомы
							transport_number = Math.floor(Math.random() * (transport_number_max - transport_number_min)) + transport_number_min;
							transport_stop_value = Math.floor(Math.random() * (transport_stop_value_max - transport_stop_value_min)) + transport_stop_value_min;

							$('.transport').html(CurrentMethodValue + ' / ' + value_of_methods + '<br><br>GET ON A PUBLIC TRANSPORT THAT CONTAINS A NUMBER OF ROUTE ' + transport_number + ' AND GO ' + transport_stop_value + ' STOPS').addClass('visible');
							break;

						// Метод "на север"
						case (5):
							$('.north').html(CurrentMethodValue + ' / ' + value_of_methods + '<br><br>GO TO THE NORTH ' + value_of_acts + ' QUARTALS').addClass('visible');
							break;

						// Метод "на юг"
						case (6):
							$('.south').html(CurrentMethodValue + ' / ' + value_of_methods + '<br><br>GO TO THE SOUTH ' + value_of_acts + ' QUARTALS').addClass('visible');
							break;

						// Метод "на запад"
						case (7):
							$('.west').html(CurrentMethodValue + ' / ' + value_of_methods + '<br><br>GO TO THE WEST ' + value_of_acts + ' QUARTALS').addClass('visible');
							break;

						// Метод "на восток"
						case (8):
							$('.east').html(CurrentMethodValue + ' / ' + value_of_methods + '<br><br>GO TO THE EAST ' + value_of_acts + ' QUARTALS').addClass('visible');
							break;

						// Метод "найди улицу"
						case (9):
							var alphabet_eng = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W"];
							var max_letter_eng = 23;
							var min_letter = 0;
							var letter_number_eng;

							letter_number_eng = Math.floor(Math.random() * (max_letter_eng - min_letter)) + min_letter;
							letter_eng = alphabet_eng[letter_number_eng];

							$('.street').html(CurrentMethodValue + ' / ' + value_of_methods + '<br><br>FIND THE NEAREST STREET THAT NAME BEGINS WITH A LETTER ' + '"' + letter_eng + '"').addClass('visible');
							break;

					}
				}
			}

			//На русском
			else {

				//По каждому нажатию на ДАЛЬШЕ прибавляем 1 и проверяем
				CurrentMethodValue++;
				if (CurrentMethodValue == value_of_methods) {
					// 0 скрыть все команды
					$('.forward, .left, .right, .stop, .transport, .north, .south, .west, .east, .street, .home').removeClass('visible');
					$('.deep-derive-screen__action-button').addClass('hidden down');
					// 1 выдать команду "домой"
					$('.home').html('ДРЕЙФ ОКОНЧЕН. ИДИ ДОМОЙ.').addClass('visible');
				}

				else {
					switch (method) {

						case (0):
							$('.forward').html(CurrentMethodValue + ' / ' + value_of_methods + '<br><br>ПРЯМО').addClass('visible');
							break;

						case (1):
							$('.left').html(CurrentMethodValue + ' / ' + value_of_methods + '<br><br>ВЛЕВО').addClass('visible');
							break;

						case (2):
							$('.right').html(CurrentMethodValue + ' / ' + value_of_methods + '<br><br>ВПРАВО').addClass('visible');
							break;

						case (3):
							timer = 60;
							TimerFunction();

							$('.stop').html(CurrentMethodValue + ' / ' + value_of_methods + '<br><br>СТОП<br>' + timer).addClass('visible');

							function TimerFunction() {

								intervalID = setInterval(function () {

									$('.stop').html(CurrentMethodValue + ' / ' + value_of_methods + '<br><br>СТОП<br>' + timer);

									$('.deep-derive-screen__action-button').addClass('hidden down');

									//По окончанию работы таймера
									if (timer == 0) {
										//Перестать считать
										clearInterval(intervalID);
										//Воспроизвести звук
										SoundOfEnd();
										function SoundOfEnd() {
											var audio = new Audio();
											audio.src = '../sound_of_end.mp3';
											audio.play();
											$('.deep-derive-screen__action-button').removeClass('hidden down');
										}
										//Запустить следующую команду
										Methods();
									}
									timer = timer - 1;

								}, 1000);
							}
							break;

						case (4):

							var date = new Date();
							var hours = date.getHours();
							if (hours >= 22 || hours <= 8) {
								Methods();
								break;
							}

							var transport_number;
							var transport_number_min = 0;
							var transport_number_max = 10;
							var transport_stop_value;
							var transport_stop_value_min = 5;
							var transport_stop_value_max = 11;

							transport_number = Math.floor(Math.random() * (transport_number_max - transport_number_min)) + transport_number_min;
							transport_stop_value = Math.floor(Math.random() * (transport_stop_value_max - transport_stop_value_min)) + transport_stop_value_min;

							$('.transport').html(CurrentMethodValue + ' / ' + value_of_methods + '<br><br>СЯДЬ НА ОБЩЕСТВЕННЫЙ ТРАНСПОРТ, НОМЕР КОТОРОГО СОДЕРЖИТ ЦИФРУ ' + transport_number + ' И ПРОЕДЬ ' + transport_stop_value + ' ОСТАНОВОК').addClass('visible');
							break;

						case (5):
							$('.north').html(CurrentMethodValue + ' / ' + value_of_methods + '<br><br>ИДИ НА СЕВЕР ' + value_of_acts + ' КВАРТАЛА').addClass('visible');
							break;

						case (6):
							$('.south').html(CurrentMethodValue + ' / ' + value_of_methods + '<br><br>ИДИ НА ЮГ ' + value_of_acts + ' КВАРТАЛА').addClass('visible');
							break;

						case (7):
							$('.west').html(CurrentMethodValue + ' / ' + value_of_methods + '<br><br>ИДИ НА ЗАПАД ' + value_of_acts + ' КВАРТАЛА').addClass('visible');
							break;

						case (8):
							$('.east').html(CurrentMethodValue + ' / ' + value_of_methods + '<br><br>ИДИ НА ВОСТОК ' + value_of_acts + ' КВАРТАЛА').addClass('visible');
							break;

						case (9):
							var alphabet = ["А", "Б", "В", "Г", "Д", "Е", "И", "К", "Л", "М", "П", "Р", "С", "Т", "Ф", "Ш", "Я"];
							var max_letter = 17;
							var min_letter = 0;
							var letter_number;
							letter_number = Math.floor(Math.random() * (max_letter - min_letter)) + min_letter;
							letter = alphabet[letter_number];
							$('.street').html(CurrentMethodValue + ' / ' + value_of_methods + '<br><br>НАЙДИ БЛИЖАЙШУЮ УЛИЦУ, НАЗВАНИЕ КОТОРОЙ НАЧИНАЕТСЯ НА БУКВУ ' + '"' + letter + '"').addClass('visible');
							break;
					}
				}
			}
		}
	}

// Управление экраном "Генератор времени"------------------------------------------------

	max_generator_hour = 24;
	min_generator_hour = 0;
	max_generator_minute = 60;
	min_generator_minute = 0;

	function GeneratorScreenFunction() {

		// Очищаем на всякий случай таймер из Углублённого дрейфа 
		clearInterval(intervalID);                    

		// Из этого будем складывать строку
		var hour;
		var minute;
		var points = ' : ';
		var zero = '0';

		// Генерим часы и минуты
		hour = Math.floor(Math.random() * (max_generator_hour - min_generator_hour)) + min_generator_hour;
		minute = Math.floor(Math.random() * (max_generator_minute - min_generator_minute)) + min_generator_minute;

		// Если меньше 10 минут, то вставляем спереди ноль
		if (minute < 10) {
			$('.generator-screen__command_time').html(hour + points + zero + minute);
		}
		else {
			$('.generator-screen__command_time').html(hour + points + minute);
		}

	}