// Счётчик
var click = 1;
// Для часов
var intervalID;

// Управление UI

$( document ).ready(function(){

// Изначально все элементы интерфейса скрыты (display: none, opacity: 0). 
// Управление осуществляется переключением классов .active и, через задержку, .visible.

// Экран выбора языка / Экран приветствия -----------------------------------------------

	$( '.lang__en' ).on('click', function(){ 
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
		$('.simple-derive-screen').addClass('active-for-derive-screen');

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
		$('.cyclic-derive-screen').addClass('active-for-derive-screen');

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
		$('.deep-derive-screen').addClass('active-for-derive-screen');

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
		DeepDeriveScreenFunction();
	})

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
	$('.simple-derive-screen, .cyclic-derive-screen, .deep-derive-screen, .generator-screen, .manual-screen').removeClass('active visible active-for-derive-screen'); 
}

// Управление экраном "Простой дрейф"

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
		$('.forward').removeClass('visible');
		$('.left').removeClass('visible');
		$('.right').removeClass('visible');
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

// Управление экраном "Циклический дрейф"

	function CyclicDeriveScreenFunction() {
		
		// Очищаем на всякий случай таймер из Углублённого дрейфа
		clearInterval(intervalID);                     

		$('.SimpleDeriveScreenName').removeClass('open_title').transition({ opacity: 0 });                                   
		$('div#SimpleDeriveScreen').addClass('close').removeClass('table').transition({ opacity: 0 });                                  
		$('.DeepDeriveScreenName').removeClass('open_title').transition({ opacity: 0 });                                   
		$('div#DeepDeriveScreen').addClass('close').removeClass('table').transition({ opacity: 0 });                                 
		$('.GeneratorScreenName').removeClass('open_title').transition({ opacity: 0 });                              
		$('div#GeneratorScreen').addClass('close').removeClass('table').transition({ opacity: 0 });                             
		$('.ManualScreenName').removeClass('open_title').transition({ opacity: 0 });                         
		$('div#ManualScreen').addClass('close');                        

		$('.CycleDeriveScreenName').addClass('open_title').transition({ opacity: 1 }, 500, 'cubic-bezier(0.6, 0.04, 0.98, 0.335)');                                       
		$('div#CycleDeriveScreen').removeClass('close').addClass('table').transition({ opacity: 1 }, 500, 'cubic-bezier(0.6, 0.04, 0.98, 0.335)');                                      
																															
		$('div#cycle1').addClass('close').transition({ opacity: 0 });
		$('div#cycle2').addClass('close').transition({ opacity: 0 });
		$('div#cycle3').addClass('close').transition({ opacity: 0 });
		$('div#cycle4').addClass('close').transition({ opacity: 0 });
		$('div#cycle5').addClass('close').transition({ opacity: 0 });
		$('div#cycle6').addClass('close').transition({ opacity: 0 });

		var action_value;                    
		var action;                    
		var max_value = 8;
		var min_value = 2;
		var i;

		// Генерим случайное число
		action_value = Math.floor(Math.random() * (max_value - min_value)) + min_value;                
		if (RegimeLanguage) {
			for (i = 0; i < action_value; i++) {
				action = Math.floor(Math.random() * (max - min)) + min;               
				switch (action) {

					case (0):
						$('#en_cycle' + i).html('LEFT').removeClass('close').transition({ opacity: 1 }, 500, 'cubic-bezier(0.6, 0.04, 0.98, 0.335)');
						$('#en_' + i).removeClass('close');
						break;

					case (1):
						$('#en_cycle' + i).html('RIGHT').removeClass('close').transition({ opacity: 1 }, 500, 'cubic-bezier(0.6, 0.04, 0.98, 0.335)');
						$('#en_' + i).removeClass('close');
						break;

					case (2):
						$('#en_cycle' + i).html('FORWARD').removeClass('close').transition({ opacity: 1 }, 500, 'cubic-bezier(0.6, 0.04, 0.98, 0.335)');
						$('#en_' + i).removeClass('close');
						break;

				}
			}
		}

		else {
			for (i = 0; i < action_value; i++) {
				action = Math.floor(Math.random() * (max - min)) + min;               
				switch (action) {

					case (0):
						$('#ru_cycle' + i).html('ВЛЕВО').removeClass('close').transition({ opacity: 1 }, 500, 'cubic-bezier(0.6, 0.04, 0.98, 0.335)');
						$('#ru_' + i).removeClass('close');
						break;

					case (1):
						$('#ru_cycle' + i).html('ВПРАВО').removeClass('close').transition({ opacity: 1 }, 500, 'cubic-bezier(0.6, 0.04, 0.98, 0.335)');
						$('#ru_' + i).removeClass('close');
						break;

					case (2):
						$('#ru_cycle' + i).html('ПРЯМО').removeClass('close').transition({ opacity: 1 }, 500, 'cubic-bezier(0.6, 0.04, 0.98, 0.335)');
						$('#ru_' + i).removeClass('close');
						break;

				}
			}
		}
	}

// Управление экраном "Углублённый дрейф"
// function DeepDeriveScreenFunction() {
	                   
// Очищаем таймер
clearInterval(intervalID); 
                   

// 	$('.SimpleDeriveScreenName').removeClass('open_title').transition({ opacity: 0 });                                   
// 	$('div#SimpleDeriveScreen').addClass('close').removeClass('table').transition({ opacity: 0 });                                  
// 	$('button#SimpleDeriveButtonFooter').addClass('close').transition({ opacity: 0 });              
// 	$('.CycleDeriveScreenName').removeClass('open_title').transition({ opacity: 0 });                                       
// 	$('div#CycleDeriveScreen').addClass('close').removeClass('table').transition({ opacity: 0 });                                      
// 	$('.GeneratorScreenName').removeClass('open_title').transition({ opacity: 0 });                              
// 	$('div#GeneratorScreen').addClass('close').removeClass('table');                             
// 	$('.ManualScreenName').removeClass('open_title').transition({ opacity: 0 });                         
// 	$('div#ManualScreen').addClass('close');                        
            
// 	$('div#forward').transition({ opacity: 0 }, 1000, 'cubic-bezier(0.175, 0.885, 0.32, 1.275)');
// 	$('div#left').transition({ opacity: 0 }, 1000, 'cubic-bezier(0.175, 0.885, 0.32, 1.275)');
// 	$('div#right').transition({ opacity: 0 }, 1000, 'cubic-bezier(0.175, 0.885, 0.32, 1.275)');
// 	$('div#stop').transition({ opacity: 0 }, 1000, 'cubic-bezier(0.175, 0.885, 0.32, 1.275)');
// 	$('div#transport').transition({ opacity: 0 }, 1000, 'cubic-bezier(0.175, 0.885, 0.32, 1.275)');
// 	$('div#north').transition({ opacity: 0 }, 1000, 'cubic-bezier(0.175, 0.885, 0.32, 1.275)');
// 	$('div#south').transition({ opacity: 0 }, 1000, 'cubic-bezier(0.175, 0.885, 0.32, 1.275)');
// 	$('div#west').transition({ opacity: 0 }, 1000, 'cubic-bezier(0.175, 0.885, 0.32, 1.275)');
// 	$('div#east').transition({ opacity: 0 }, 1000, 'cubic-bezier(0.175, 0.885, 0.32, 1.275)');
// 	$('div#street').transition({ opacity: 0 }, 1000, 'cubic-bezier(0.175, 0.885, 0.32, 1.275)');

// 	if (RegimeDeepDeriveScreen == 0) {
// 		ShowDeepDeriveScreen();
// 	}

// 	function ShowDeepDeriveScreen() {
// 		$('.DeepDeriveScreenName').addClass('open_title').transition({ opacity: 1 }, 500, 'cubic-bezier(0.6, 0.04, 0.98, 0.335)');                             
// 		$('div#DeepDeriveScreen').removeClass('close').addClass('table').transition({ opacity: 1 }, 500, 'cubic-bezier(0.6, 0.04, 0.98, 0.335)');                             
// 		$('button#DeepDeriveButtonFooter').removeClass('close').transition({ opacity: 1 }, 500, 'cubic-bezier(0.6, 0.04, 0.98, 0.335)');                
// 		RegimeDeepDeriveScreen = 1;
// 	}

// 	var method;             
// 	var MaxMethodValue = 10;
// 	var MinMethodValue = 0;
// 	method = Math.floor(Math.random() * (MaxMethodValue - MinMethodValue)) + MinMethodValue;

// 	var value_of_acts;                                      
// 	var MaxValue = 5;
// 	var MinValue = 2;
// 	value_of_acts = Math.floor(Math.random() * (MaxValue - MinValue)) + MinValue;

// 	setTimeout(Methods, 1000);                                                    

// 	function Methods() {

// 		if (RegimeLanguage) {
// 			switch (method) {

// 				case (0):
// 					$('div#forward').html('FORWARD').removeClass('close').addClass('open_title').transition({ opacity: 1 }, 1000, 'cubic-bezier(0.645, 0.045, 0.355, 1)');
// 					$('div#left').removeClass('open_title').addClass('close');
// 					$('div#right').removeClass('open_title').addClass('close');
// 					$('#stop').removeClass('open_title').addClass('close');
// 					$('#transport').removeClass('open_title').addClass('close');
// 					$('#north').removeClass('open_title').addClass('close');
// 					$('#south').removeClass('open_title').addClass('close');
// 					$('#west').removeClass('open_title').addClass('close');
// 					$('#east').removeClass('open_title').addClass('close');
// 					$('#street').removeClass('open_title').addClass('close');
// 					break;

// 				case (1):
// 					$('div#forward').removeClass('open_title').addClass('close');
// 					$('div#left').html('LEFT').removeClass('close').addClass('open_title').transition({ opacity: 1 }, 1000, 'cubic-bezier(0.645, 0.045, 0.355, 1)');
// 					$('div#right').removeClass('open_title').addClass('close');
// 					$('#stop').removeClass('open_title').addClass('close');
// 					$('#transport').removeClass('open_title').addClass('close');
// 					$('#north').removeClass('open_title').addClass('close');
// 					$('#south').removeClass('open_title').addClass('close');
// 					$('#west').removeClass('open_title').addClass('close');
// 					$('#east').removeClass('open_title').addClass('close');
// 					$('#street').removeClass('open_title').addClass('close');
// 					break;

// 				case (2):
// 					$('div#forward').removeClass('open_title').addClass('close');
// 					$('div#left').removeClass('open_title').addClass('close');
// 					$('div#right').html('RIGHT').removeClass('close').addClass('open_title').transition({ opacity: 1 }, 1000, 'cubic-bezier(0.645, 0.045, 0.355, 1)');
// 					$('#stop').removeClass('open_title').addClass('close');
// 					$('#transport').removeClass('open_title').addClass('close');
// 					$('#north').removeClass('open_title').addClass('close');
// 					$('#south').removeClass('open_title').addClass('close');
// 					$('#west').removeClass('open_title').addClass('close');
// 					$('#east').removeClass('open_title').addClass('close');
// 					$('#street').removeClass('open_title').addClass('close');
// 					break;

// 				case (3):
// 					timer = 60;                                              
// 					TimerFunction();                 

// 					$('div#forward').removeClass('open_title').addClass('close');
// 					$('div#left').removeClass('open_title').addClass('close');
// 					$('div#right').removeClass('open_title').addClass('close');
// 					$('#stop').html('STOP<br>' + timer).removeClass('close').addClass('open_title').transition({ opacity: 1 }, 1000, 'cubic-bezier(0.645, 0.045, 0.355, 1)');
// 					$('#transport').removeClass('open_title').addClass('close');
// 					$('#north').removeClass('open_title').addClass('close');
// 					$('#south').removeClass('open_title').addClass('close');
// 					$('#west').removeClass('open_title').addClass('close');
// 					$('#east').removeClass('open_title').addClass('close');
// 					$('#street').removeClass('open_title').addClass('close');

// 					function TimerFunction() {

// 						intervalID = setInterval(function () {

// 							$('#stop').html('STOP<br>' + timer);
// 							$('button#DeepDeriveButtonFooter').transition({ opacity: 0 }, 1000, 'cubic-bezier(0.645, 0.045, 0.355, 1)');              
// 							setTimeout(function () { 
// 								$('button#DeepDeriveButtonFooter').addClass('close') }, 1000);
// 							if (timer == 0) {
// 								clearInterval(intervalID);                    
// 								SoundOfEnd();
// 								function SoundOfEnd() {
// 									var audio = new Audio();                
// 									audio.src = 'sound_of_end.mp3';                         
// 									audio.play();                          
// 									$('button#DeepDeriveButtonFooter').transition({ opacity: 1 }, 1000, 'cubic-bezier(0.645, 0.045, 0.355, 1)');                
// 									setTimeout(function () { $('button#DeepDeriveButtonFooter').removeClass('close') }, 1000);
// 								}
// 								DeepDeriveScreenFunction();
// 							}
// 							timer = timer - 1;

// 						}, 1000);
// 					}
// 					break;

// 				case (4):
                           
// 					var date = new Date();              
// 					var hours = date.getHours();               
// 					if (hours >= 22 || hours <= 8) {
// 						DeepDeriveScreenFunction();
// 						break;
// 					}

// 					var transport_number;                          
// 					var transport_number_min = 0;
// 					var transport_number_max = 10;
// 					var transport_stop_value;                              
// 					var transport_stop_value_min = 5;
// 					var transport_stop_value_max = 11;

// 					transport_number = Math.floor(Math.random() * (transport_number_max - transport_number_min)) + transport_number_min;
// 					transport_stop_value = Math.floor(Math.random() * (transport_stop_value_max - transport_stop_value_min)) + transport_stop_value_min;

// 					$('div#forward').removeClass('open_title').addClass('close');
// 					$('div#left').removeClass('open_title').addClass('close');
// 					$('div#right').removeClass('open_title').addClass('close');
// 					$('#stop').removeClass('open_title').addClass('close');
// 					$('#transport').html('GET ON A PUBLIC TRANSPORT THAT CONTAINS A NUMBER OF ROUTE ' + transport_number + ' AND GO ' + transport_stop_value + ' STOPS').removeClass('close').addClass('open_title').transition({ opacity: 1 }, 1000, 'cubic-bezier(0.645, 0.045, 0.355, 1)');
// 					$('#north').removeClass('open_title').addClass('close');
// 					$('#south').removeClass('open_title').addClass('close');
// 					$('#west').removeClass('open_title').addClass('close');
// 					$('#east').removeClass('open_title').addClass('close');
// 					$('#street').removeClass('open_title').addClass('close');
// 					break;

// 				case (5):
// 					$('div#forward').removeClass('open_title').addClass('close');
// 					$('div#left').removeClass('open_title').addClass('close');
// 					$('div#right').removeClass('open_title').addClass('close');
// 					$('#stop').removeClass('open_title').addClass('close');
// 					$('#transport').removeClass('open_title').addClass('close');
// 					$('#north').html('GO TO THE NORTH ' + value_of_acts + ' QUARTALS').addClass('open_title').transition({ opacity: 1 }, 1000, 'cubic-bezier(0.645, 0.045, 0.355, 1)');
// 					$('#south').removeClass('open_title').addClass('close');
// 					$('#west').removeClass('open_title').addClass('close');
// 					$('#east').removeClass('open_title').addClass('close');
// 					$('#street').removeClass('open_title').addClass('close');
// 					break;

// 				case (6):
// 					$('div#forward').removeClass('open_title').addClass('close');
// 					$('div#left').removeClass('open_title').addClass('close');
// 					$('div#right').removeClass('open_title').addClass('close');
// 					$('#stop').removeClass('open_title').addClass('close');
// 					$('#transport').removeClass('open_title').addClass('close');
// 					$('#north').removeClass('open_title').addClass('close');
// 					$('#south').html('GO TO THE SOUTH ' + value_of_acts + ' QUARTALS').removeClass('close').addClass('open_title').transition({ opacity: 1 }, 1000, 'cubic-bezier(0.645, 0.045, 0.355, 1)');
// 					$('#west').removeClass('open_title').addClass('close');
// 					$('#east').removeClass('open_title').addClass('close');
// 					$('#street').removeClass('open_title').addClass('close');
// 					break;

// 				case (7):
// 					$('div#forward').removeClass('open_title').addClass('close');
// 					$('div#left').removeClass('open_title').addClass('close');
// 					$('div#right').removeClass('open_title').addClass('close');
// 					$('#stop').removeClass('open_title').addClass('close');
// 					$('#transport').removeClass('open_title').addClass('close');
// 					$('#north').removeClass('open_title').addClass('close');
// 					$('#south').removeClass('open_title').addClass('close');
// 					$('#west').html('GO TO THE WEST ' + value_of_acts + ' QUARTALS').removeClass('close').addClass('open_title').transition({ opacity: 1 }, 1000, 'cubic-bezier(0.645, 0.045, 0.355, 1)');
// 					$('#east').removeClass('open_title').addClass('close');
// 					$('#street').removeClass('open_title').addClass('close');
// 					break;

// 				case (8):
// 					$('div#forward').removeClass('open_title').addClass('close');
// 					$('div#left').removeClass('open_title').addClass('close');
// 					$('div#right').removeClass('open_title').addClass('close');
// 					$('#stop').removeClass('open_title').addClass('close');
// 					$('#transport').removeClass('open_title').addClass('close');
// 					$('#north').removeClass('open_title').addClass('close');
// 					$('#south').removeClass('open_title').addClass('close');
// 					$('#west').removeClass('open_title').addClass('close');
// 					$('#east').html('GO TO THE EAST ' + value_of_acts + ' QUARTALS').removeClass('close').addClass('open_title').transition({ opacity: 1 }, 1000, 'cubic-bezier(0.645, 0.045, 0.355, 1)');
// 					$('#street').removeClass('open_title').addClass('close');
// 					break;

// 				case (9):
// 					var alphabet_eng = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W"];
// 					var max_letter_eng = 23;                           
// 					var min_letter = 0;
// 					var letter_number_eng;
// 					letter_number_eng = Math.floor(Math.random() * (max_letter_eng - min_letter)) + min_letter;
// 					letter_eng = alphabet_eng[letter_number_eng];

// 					$('div#forward').removeClass('open_title').addClass('close');
// 					$('div#left').removeClass('open_title').addClass('close');
// 					$('div#right').removeClass('open_title').addClass('close');
// 					$('#stop').removeClass('open_title').addClass('close');
// 					$('#transport').removeClass('open_title').addClass('close');
// 					$('#north').removeClass('open_title').addClass('close');
// 					$('#south').removeClass('open_title').addClass('close');
// 					$('#west').removeClass('open_title').addClass('close');
// 					$('#east').removeClass('open_title').addClass('close');
// 					$('#street').html('FIND THE NEAREST STREET THAT NAME BEGINS WITH A LETTER ' + '"' + letter_eng + '"').removeClass('close').addClass('open_title').transition({ opacity: 1 }, 1000, 'cubic-bezier(0.645, 0.045, 0.355, 1)');
// 					break;

// 			}
// 		}

// 		else {
// 			switch (method) {

// 				case (0):
// 					$('div#forward').html('ПРЯМО').removeClass('close').addClass('open_title').transition({ opacity: 1 }, 1000, 'cubic-bezier(0.645, 0.045, 0.355, 1)');
// 					$('div#left').removeClass('open_title').addClass('close');
// 					$('div#right').removeClass('open_title').addClass('close');
// 					$('#stop').removeClass('open_title').addClass('close');
// 					$('#transport').removeClass('open_title').addClass('close');
// 					$('#north').removeClass('open_title').addClass('close');
// 					$('#south').removeClass('open_title').addClass('close');
// 					$('#west').removeClass('open_title').addClass('close');
// 					$('#east').removeClass('open_title').addClass('close');
// 					$('#street').removeClass('open_title').addClass('close');
// 					break;

// 				case (1):
// 					$('div#forward').removeClass('open_title').addClass('close');
// 					$('div#left').html('ВЛЕВО').removeClass('close').addClass('open_title').transition({ opacity: 1 }, 1000, 'cubic-bezier(0.645, 0.045, 0.355, 1)');
// 					$('div#right').removeClass('open_title').addClass('close');
// 					$('#stop').removeClass('open_title').addClass('close');
// 					$('#transport').removeClass('open_title').addClass('close');
// 					$('#north').removeClass('open_title').addClass('close');
// 					$('#south').removeClass('open_title').addClass('close');
// 					$('#west').removeClass('open_title').addClass('close');
// 					$('#east').removeClass('open_title').addClass('close');
// 					$('#street').removeClass('open_title').addClass('close');
// 					break;

// 				case (2):
// 					$('div#forward').removeClass('open_title').addClass('close');
// 					$('div#left').removeClass('open_title').addClass('close');
// 					$('div#right').html('ВПРАВО').removeClass('close').addClass('open_title').transition({ opacity: 1 }, 1000, 'cubic-bezier(0.645, 0.045, 0.355, 1)');
// 					$('#stop').removeClass('open_title').addClass('close');
// 					$('#transport').removeClass('open_title').addClass('close');
// 					$('#north').removeClass('open_title').addClass('close');
// 					$('#south').removeClass('open_title').addClass('close');
// 					$('#west').removeClass('open_title').addClass('close');
// 					$('#east').removeClass('open_title').addClass('close');
// 					$('#street').removeClass('open_title').addClass('close');
// 					break;

// 				case (3):
// 					timer = 60;                                              
// 					TimerFunction();                 

// 					$('div#forward').removeClass('open_title').addClass('close');
// 					$('div#left').removeClass('open_title').addClass('close');
// 					$('div#right').removeClass('open_title').addClass('close');
// 					$('#stop').html('СТОП<br>' + timer).removeClass('close').addClass('open_title').transition({ opacity: 1 }, 1000, 'cubic-bezier(0.645, 0.045, 0.355, 1)');
// 					$('#transport').removeClass('open_title').addClass('close');
// 					$('#north').removeClass('open_title').addClass('close');
// 					$('#south').removeClass('open_title').addClass('close');
// 					$('#west').removeClass('open_title').addClass('close');
// 					$('#east').removeClass('open_title').addClass('close');
// 					$('#street').removeClass('open_title').addClass('close');

// 					function TimerFunction() {

// 						intervalID = setInterval(function () {

// 							$('#stop').html('СТОП<br>' + timer);
// 							$('button#DeepDeriveButtonFooter').transition({ opacity: 0 }, 1000, 'cubic-bezier(0.645, 0.045, 0.355, 1)');              
// 							setTimeout(function () { $('button#DeepDeriveButtonFooter').addClass('close') }, 1000);
// 							if (timer == 0) {
// 								clearInterval(intervalID);                    
// 								SoundOfEnd();
// 								function SoundOfEnd() {
// 									var audio = new Audio();             
// 									audio.src = 'sound_of_end.mp3';                         
// 									audio.play();                          
// 									$('button#DeepDeriveButtonFooter').transition({ opacity: 1 }, 1000, 'cubic-bezier(0.645, 0.045, 0.355, 1)');                
// 									setTimeout(function () { $('button#DeepDeriveButtonFooter').removeClass('close') }, 1000);
// 								}
// 								DeepDeriveScreenFunction();
// 							}
// 							timer = timer - 1;

// 						}, 1000);
// 					}
// 					break;

// 				case (4):
                
// 					var date = new Date();              
// 					var hours = date.getHours();               
// 					if (hours >= 22 || hours <= 8) {
// 						DeepDeriveScreenFunction();
// 						break;
// 					}

// 					var transport_number;                          
// 					var transport_number_min = 0;
// 					var transport_number_max = 10;
// 					var transport_stop_value;                              
// 					var transport_stop_value_min = 5;
// 					var transport_stop_value_max = 11;

// 					transport_number = Math.floor(Math.random() * (transport_number_max - transport_number_min)) + transport_number_min;
// 					transport_stop_value = Math.floor(Math.random() * (transport_stop_value_max - transport_stop_value_min)) + transport_stop_value_min;

// 					$('div#forward').removeClass('open_title').addClass('close');
// 					$('div#left').removeClass('open_title').addClass('close');
// 					$('div#right').removeClass('open_title').addClass('close');
// 					$('#stop').removeClass('open_title').addClass('close');
// 					$('#transport').html('СЯДЬ НА ОБЩЕСТВЕННЫЙ ТРАНСПОРТ, НОМЕР КОТОРОГО СОДЕРЖИТ ЦИФРУ ' + transport_number + ' И ПРОЕДЬ ' + transport_stop_value + ' ОСТАНОВОК').removeClass('close').addClass('open_title').transition({ opacity: 1 }, 1000, 'cubic-bezier(0.645, 0.045, 0.355, 1)');
// 					$('#north').removeClass('open_title').addClass('close');
// 					$('#south').removeClass('open_title').addClass('close');
// 					$('#west').removeClass('open_title').addClass('close');
// 					$('#east').removeClass('open_title').addClass('close');
// 					$('#street').removeClass('open_title').addClass('close');
// 					break;

// 				case (5):
// 					$('div#forward').removeClass('open_title').addClass('close');
// 					$('div#left').removeClass('open_title').addClass('close');
// 					$('div#right').removeClass('open_title').addClass('close');
// 					$('#stop').removeClass('open_title').addClass('close');
// 					$('#transport').removeClass('open_title').addClass('close');
// 					$('#north').html('ИДИ НА СЕВЕР ' + value_of_acts + ' КВАРТАЛА').addClass('open_title').transition({ opacity: 1 }, 1000, 'cubic-bezier(0.645, 0.045, 0.355, 1)');
// 					$('#south').removeClass('open_title').addClass('close');
// 					$('#west').removeClass('open_title').addClass('close');
// 					$('#east').removeClass('open_title').addClass('close');
// 					$('#street').removeClass('open_title').addClass('close');
// 					break;

// 				case (6):
// 					$('div#forward').removeClass('open_title').addClass('close');
// 					$('div#left').removeClass('open_title').addClass('close');
// 					$('div#right').removeClass('open_title').addClass('close');
// 					$('#stop').removeClass('open_title').addClass('close');
// 					$('#transport').removeClass('open_title').addClass('close');
// 					$('#north').removeClass('open_title').addClass('close');
// 					$('#south').html('ИДИ НА ЮГ ' + value_of_acts + ' КВАРТАЛА').removeClass('close').addClass('open_title').transition({ opacity: 1 }, 1000, 'cubic-bezier(0.645, 0.045, 0.355, 1)');
// 					$('#west').removeClass('open_title').addClass('close');
// 					$('#east').removeClass('open_title').addClass('close');
// 					$('#street').removeClass('open_title').addClass('close');
// 					break;

// 				case (7):
// 					$('div#forward').removeClass('open_title').addClass('close');
// 					$('div#left').removeClass('open_title').addClass('close');
// 					$('div#right').removeClass('open_title').addClass('close');
// 					$('#stop').removeClass('open_title').addClass('close');
// 					$('#transport').removeClass('open_title').addClass('close');
// 					$('#north').removeClass('open_title').addClass('close');
// 					$('#south').removeClass('open_title').addClass('close');
// 					$('#west').html('ИДИ НА ЗАПАД ' + value_of_acts + ' КВАРТАЛА').removeClass('close').addClass('open_title').transition({ opacity: 1 }, 1000, 'cubic-bezier(0.645, 0.045, 0.355, 1)');
// 					$('#east').removeClass('open_title').addClass('close');
// 					$('#street').removeClass('open_title').addClass('close');
// 					break;

// 				case (8):
// 					$('div#forward').removeClass('open_title').addClass('close');
// 					$('div#left').removeClass('open_title').addClass('close');
// 					$('div#right').removeClass('open_title').addClass('close');
// 					$('#stop').removeClass('open_title').addClass('close');
// 					$('#transport').removeClass('open_title').addClass('close');
// 					$('#north').removeClass('open_title').addClass('close');
// 					$('#south').removeClass('open_title').addClass('close');
// 					$('#west').removeClass('open_title').addClass('close');
// 					$('#east').html('ИДИ НА ВОСТОК ' + value_of_acts + ' КВАРТАЛА').removeClass('close').addClass('open_title').transition({ opacity: 1 }, 1000, 'cubic-bezier(0.645, 0.045, 0.355, 1)');
// 					$('#street').removeClass('open_title').addClass('close');
// 					break;

// 				case (9):
// 					var alphabet = ["А", "Б", "В", "Г", "Д", "Е", "И", "К", "Л", "М", "П", "Р", "С", "Т", "Ф", "Ш", "Я"];            
// 					var max_letter = 17;                           
// 					var min_letter = 0;
// 					var letter_number;                      
// 					letter_number = Math.floor(Math.random() * (max_letter - min_letter)) + min_letter;
// 					letter = alphabet[letter_number];

// 					$('div#forward').removeClass('open_title').addClass('close');
// 					$('div#left').removeClass('open_title').addClass('close');
// 					$('div#right').removeClass('open_title').addClass('close');
// 					$('#stop').removeClass('open_title').addClass('close');
// 					$('#transport').removeClass('open_title').addClass('close');
// 					$('#north').removeClass('open_title').addClass('close');
// 					$('#south').removeClass('open_title').addClass('close');
// 					$('#west').removeClass('open_title').addClass('close');
// 					$('#east').removeClass('open_title').addClass('close');
// 					$('#street').html('НАЙДИ БЛИЖАЙШУЮ УЛИЦУ, НАЗВАНИЕ КОТОРОЙ НАЧИНАЕТСЯ НА БУКВУ ' + '"' + letter + '"').removeClass('close').addClass('open_title').transition({ opacity: 1 }, 1000, 'cubic-bezier(0.645, 0.045, 0.355, 1)');
// 					break;

// 			}
// 		}
// 	}
// }

// Управление экраном "Генератор времени"

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