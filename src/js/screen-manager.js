 
		RegimeManualScreen=0;//������ �������� ManualScreen
		RegimeGeneratorScreen=0;//������ �������� GeneratorScreen
		RegimeCycleDeriveScreen=0;//������ �������� CycleDeriveScreen
		RegimeSimpleDeriveScreen=0;//������ �������� SimpleDeriveScreen
		RegimeDeepDeriveScreen=0;//������ �������� DeepDeriveScreen
		click = 0;//�������������
		var intervalID;//����� �������� �ר���� ��� �������� �� ������ �����
        
        
//Language

        function en()
        {
            RegimeLanguage=1;
            $('.ru').addClass('close_lang').removeClass('table');
            $('#language_select').transition({opacity: 0}, 400, 'cubic-bezier(0.175, 0.885, 0.32, 1.275)');
            setTimeout(function()
            {
                $('#language_select').addClass('close');
            }, 400);
        }

        function ru()
        {
            RegimeLanguage=0;
            $('.en').addClass('close_lang').removeClass('table');
            $('#language_select').transition({opacity: 0}, 400, 'cubic-bezier(0.175, 0.885, 0.32, 1.275)');
            setTimeout(function()
            {
                $('#language_select').addClass('close');
            }, 400);
        }

//�� ����� �� Hamburger ���������:

        function MobileMenu()
        {
           
		   $('button#HamburgerButton').removeClass('close').transition({opacity: 1 }, 500, 'cubic-bezier(0.6, 0.04, 0.98, 0.335)');//�������� ������ ����
           if(click)//������� ����
             {
				 
			   $('button#HamburgerButton').addClass('is-active');//���������� � �����
			   $('header, nav').addClass('height100');//���������� ������������� ���� �� ���� �����
               $('div#menu-hider').transition({opacity: 1}, 400, 'cubic-bezier(0.175, 0.885, 0.32, 1.275)');//������ �������� ���
               $('footer').transition({opacity: 0}, 400, 'cubic-bezier(0.455, 0.03, 0.515, 0.955)'); //�������� ��������� ������			   
               $('ul#mobile').removeClass('close').addClass('open');//������������ ������ ���� � ul, li
			   $('li#mobile').addClass('open');//������������ ������ ���� � ul, li  
/* 			   $('SimpleDeriveButtonFooter').transition({opacity: 0}, 400, 'cubic-bezier(0.455, 0.03, 0.515, 0.955)');
			   $('DeepDeriveButtonFooter').transition({opacity: 0}, 400, 'cubic-bezier(0.455, 0.03, 0.515, 0.955)'); */
			   setTimeout(function(){
				                     $('ul#mobile').transition({scale: 1, opacity: 1 }, 1000, 'cubic-bezier(0.075, 0.82, 0.165, 1)');
									 $('footer').addClass('close'); //�������� ��������� ������		
/* 			                         $('SimpleDeriveButtonFooter').removeClass('open').addClass('close');
			                         $('DeepDeriveButtonFooter').removeClass('open').addClass('close'); */
									}, 400);//������ ���������� ������ ���� � �������������� ���������
               click = 0;
			   
             }
			 
           else//������� ����
             {
			   $('button#HamburgerButton').removeClass('is-active');//����������� ����� 
			   $('ul#mobile').transition({scale: 0.9, opacity: 0 }, 700, 'cubic-bezier(0.6, -0.28, 0.735, 0.045)');//������� ������ ����
			   
			   setTimeout(close, 700);//�����, ���� �Ѩ �� ����ͨ��� �� �����
			   
	           function close()
			     {
                   
				   $('div#menu-hider').transition({opacity: 0}, 500, 'cubic-bezier(0.6, -0.28, 0.735, 0.045)');//���������� ������������ ����
				   setTimeout(function(){//��������, ���� ���� ���������� ����������
				                           $('button#HamburgerButton').removeClass('is-active');//����������� �����
				                           click = 1;
					                       $('header, nav').removeClass('height100');//����������� ����
                                           $('ul#mobile').removeClass('open').addClass('close');//����������� ������ ����
			                               $('li#mobile').removeClass('open');//����������� ������ ����

										   if (RegimeManualScreen||RegimeGeneratorScreen||RegimeCycleDeriveScreen)
										     {$('footer').addClass('close').transition({opacity: 0 }, 500, '0.455, 0.03, 0.515, 0.955)');}//�������� ��������� ������
								  		   else
											 {
											  $('footer').removeClass('close').transition({opacity: 1 }, 500, '0.455, 0.03, 0.515, 0.955)');//���������� ��������� ������
										      $('SimpleDeriveButtonFooter').removeClass('close').addClass('open');
											  $('DeepDeriveButtonFooter').removeClass('open').addClass('close');
											 }
				                        }, 500);
				   
				 }
             }   
		 }
		
         function AnnotationScreenFunction()
		 {
			$('div#AnnotationScreen').transition({opacity: 0 }, 500, 'cubic-bezier(0.175, 0.885, 0.32, 1.275)');//��������� ������
			
			setTimeout(function()//��������, ���� ����������
			  {  
				$('div#AnnotationScreen').addClass('close');
                $('#AnnotationButton.en').addClass('close');//������ ������	
                $('#AnnotationButton.ru').addClass('close');
			  }, 500);
			  
		    $('header, nav').addClass('height100');//���������� ������������� ���� �� ���� �����
            $('div#menu-hider').transition({opacity: 1}, 400, 'cubic-bezier(0.175, 0.885, 0.32, 1.275)');//������ �������� ���
            $('footer').transition({opacity: 0}, 400, 'cubic-bezier(0.455, 0.03, 0.515, 0.955)'); //�������� ��������� ������			   
            $('ul#mobile').removeClass('close').addClass('open');//������������ ������ ���� � ul, li
	        $('li#mobile').addClass('open');//������������ ������ ���� � ul, li  
		    $('ul#mobile').transition({ scale: 0.9, opacity: 0 });
		    setTimeout(function(){$('ul#mobile').transition({ scale: 1, opacity: 1 }, 1000, 'cubic-bezier(0.075, 0.82, 0.165, 1)')}, 400);//������ ���������� ������ ���� � �������������� ���������
		 }
		
//������� �� ����� ������� �����	
 
     	max=3;
		min=0;

        function SimpleDeriveScreenFunction()
        {
			//�������� �������, ����� �������� ������
			RegimeManualScreen=0;//������ �������� ManualScreen
		    RegimeGeneratorScreen=0;//������ �������� GeneratorScreen
			RegimeCycleDeriveScreen=0;//������ �������� CycleDeriveScreen
			RegimeDeepDeriveScreen=0;//������ �������� DeepDeriveScreen
			
			clearInterval(intervalID);//��������� ���������
			click = 0;
			MobileMenu();
				   
		    ////////////////����, ������� �������� �Ѩ ������///////////////////////////////////////////////////
			
			$('p#CycleDeriveScreenName').removeClass('open_title').transition({opacity: 0 });//�������� ��������� ������������ ������
			$('div#CycleDeriveScreen').addClass('close').removeClass('table').transition({opacity: 0 });//�������� �������� ������������ ������
			$('p#DeepDeriveScreenName').removeClass('open_title').transition({opacity: 0 });//�������� ��������� �����ͨ����� ������
		    $('div#DeepDeriveScreen').addClass('close').removeClass('table').transition({opacity: 0 });//�������� �������� �����ͨ����� ������
			$('button#DeepDeriveButtonFooter').addClass('close').transition({opacity: 0 });
			$('p#GeneratorScreenName').removeClass('open_title').transition({opacity: 0 });//������ ��������� ����������
		    $('div#GeneratorScreen').addClass('close').removeClass('table').transition({opacity: 0 });//������ �������� ����������
			$('p#ManualScreenName').removeClass('open_title').transition({opacity: 0 });//������ ��������� �������
		    $('div#ManualScreen').addClass('close').transition({opacity: 0 });//������ �������� �������
			$('p#forward').transition({opacity: 0 }, 1000, 'cubic-bezier(0.175, 0.885, 0.32, 1.275)');
			$('p#left').transition({opacity: 0 }, 1000, 'cubic-bezier(0.175, 0.885, 0.32, 1.275)');
			$('p#right').transition({opacity: 0 }, 1000, 'cubic-bezier(0.175, 0.885, 0.32, 1.275)');
			
			///////////////������///////////////////////////////////////////////////////////////////////////////
			
			////////////////����, ������� ���������� �Ѩ ������/////////////////////////////////////////////////

			if (RegimeSimpleDeriveScreen==0)
			{
				ShowSimpleDeriveScreen();
			}
			
			function ShowSimpleDeriveScreen()
			{
                
                
            $('p#SimpleDeriveScreenName').addClass('open_title').transition({opacity: 1 }, 500, 'cubic-bezier(0.6, 0.04, 0.98, 0.335)');//�������� �������� ���� ������
			$('div#SimpleDeriveScreen').removeClass('close').addClass('table').transition({opacity: 1 }, 500, 'cubic-bezier(0.6, 0.04, 0.98, 0.335)');//�������� SimpleDeriveScreen
            $('button#SimpleDeriveButtonFooter').removeClass('close').transition({opacity: 1 }, 500, 'cubic-bezier(0.6, 0.04, 0.98, 0.335)');//������ ��������
			RegimeSimpleDeriveScreen=1;
			}
            ///////////////��������/////////////////////////////////////////////////////////////////////////////

            var r;
			r=Math.floor(Math.random() * (max - min)) + min;			
			
				   setTimeout(NextCommand, 1000);
				   
				   function NextCommand()       
			       {
                     switch(r)
                      {			
				
				       case(0):
				       $('p#forward').removeClass('close').addClass('open_title').transition({opacity: 1 }, 1000, 'cubic-bezier(0.645, 0.045, 0.355, 1)');
				       $('p#left').removeClass('open_title').addClass('close');
				       $('p#right').removeClass('open_title').addClass('close');
				       break;
				
				       case(1):
				       $('p#left').removeClass('close').addClass('open_title').transition({opacity: 1 }, 1000, 'cubic-bezier(0.645, 0.045, 0.355, 1)');
				       $('p#forward').removeClass('open_title').addClass('close');
				       $('p#right').removeClass('open_title').addClass('close');
				       break;
				
				       case(2):
				       $('p#right').removeClass('close').addClass('open_title').transition({opacity: 1 }, 1000, 'cubic-bezier(0.645, 0.045, 0.355, 1)');
				       $('p#left').removeClass('open_title').addClass('close');
				       $('p#forward').removeClass('open_title').addClass('close');
				       break;
			
				      }
				   }
			}		
		
//������� �� ����� ����������� �����
		
		function CycleDeriveScreenFunction()
		{
			RegimeManualScreen=0;//������ �������� ManualScreen
		    RegimeGeneratorScreen=0;//������ �������� GeneratorScreen
		    RegimeSimpleDeriveScreen=0;//������ �������� SimpleDeriveScreen
		    RegimeDeepDeriveScreen=0;//������ �������� DeepDeriveScreen
			RegimeCycleDeriveScreen=1;
			click = 0;
			MobileMenu();
			clearInterval(intervalID);//��������� ���������
			
			////////////////����, ������� �������� �Ѩ ������///////////////////////////////////////////////////
			
			$('p#SimpleDeriveScreenName').removeClass('open_title').transition({opacity: 0 });//�������� ��������� �������� ������
			$('div#SimpleDeriveScreen').addClass('close').removeClass('table').transition({opacity: 0 });//�������� �������� �������� ������
			$('p#DeepDeriveScreenName').removeClass('open_title').transition({opacity: 0 });//�������� ��������� �����ͨ����� ������
			$('div#DeepDeriveScreen').addClass('close').removeClass('table').transition({opacity: 0 });//�������� �������� �����ͨ����� ������
			$('p#GeneratorScreenName').removeClass('open_title').transition({opacity: 0 });//�������� ��������� ����������
			$('div#GeneratorScreen').addClass('close').removeClass('table').transition({opacity: 0 });//�������� �������� ����������
			$('p#ManualScreenName').removeClass('open_title').transition({opacity: 0 });//������ ��������� �������
		    $('div#ManualScreen').addClass('close');//������ �������� �������
			
			///////////////������///////////////////////////////////////////////////////////////////////////////
			
			////////////////����, ������� ���������� �Ѩ ������/////////////////////////////////////////////////
			
			$('p#CycleDeriveScreenName').addClass('open_title').transition({opacity: 1 }, 500, 'cubic-bezier(0.6, 0.04, 0.98, 0.335)');//�������� ��������� ������������ ������
		    $('div#CycleDeriveScreen').removeClass('close').addClass('table').transition({opacity: 1 }, 500, 'cubic-bezier(0.6, 0.04, 0.98, 0.335)');//�������� �������� ������������ ������
			
			///////////////��������/////////////////////////////////////////////////////////////////////////////
			
			//��� ����������� ���� ������� ������� ���������� ���������
			$('div#cycle1').addClass('close').transition({opacity: 0 });
			$('div#cycle2').addClass('close').transition({opacity: 0 });
			$('div#cycle3').addClass('close').transition({opacity: 0 });
			$('div#cycle4').addClass('close').transition({opacity: 0 });
			$('div#cycle5').addClass('close').transition({opacity: 0 });
			$('div#cycle6').addClass('close').transition({opacity: 0 });
			
			var action_value;//���������� ��������
			var action;//���������� ��������
			var max_value=8;
			var min_value=2;
			var i; 
			
			action_value=Math.floor(Math.random() * (max_value - min_value)) + min_value;//���������� �������� (�� 2 �� 7)
            
            if (RegimeLanguage)
            {
                for (i = 0; i < action_value; i++) 
                {
                    action=Math.floor(Math.random() * (max - min)) + min;//����� ��������
                    switch(action)
                        {			
                    
                           case(0):
                           $('#en_cycle'+i).html('LEFT').removeClass('close').transition({opacity: 1 }, 500, 'cubic-bezier(0.6, 0.04, 0.98, 0.335)');
                           $('#en_'+i).removeClass('close');
                           break;
                    
                           case(1):
                           $('#en_cycle'+i).html('RIGHT').removeClass('close').transition({opacity: 1 }, 500, 'cubic-bezier(0.6, 0.04, 0.98, 0.335)');
                           $('#en_'+i).removeClass('close');
                           break;
                    
                           case(2):
                           $('#en_cycle'+i).html('FORWARD').removeClass('close').transition({opacity: 1 }, 500, 'cubic-bezier(0.6, 0.04, 0.98, 0.335)');
                           $('#en_'+i).removeClass('close');
                           break;
                
                        }    
                }
            }
			
            else
            {
                for (i = 0; i < action_value; i++) 
                {
                    action=Math.floor(Math.random() * (max - min)) + min;//����� ��������
                    switch(action)
                        {			
                    
                           case(0):
                           $('#ru_cycle'+i).html('ВЛЕВО').removeClass('close').transition({opacity: 1 }, 500, 'cubic-bezier(0.6, 0.04, 0.98, 0.335)');
                           $('#ru_'+i).removeClass('close');
                           break;
                    
                           case(1):
                           $('#ru_cycle'+i).html('ВПРАВО').removeClass('close').transition({opacity: 1 }, 500, 'cubic-bezier(0.6, 0.04, 0.98, 0.335)');
                           $('#ru_'+i).removeClass('close');
                           break;
                    
                           case(2):
                           $('#ru_cycle'+i).html('ПРЯМО').removeClass('close').transition({opacity: 1 }, 500, 'cubic-bezier(0.6, 0.04, 0.98, 0.335)');
                           $('#ru_'+i).removeClass('close');
                           break;
                
                        }    
                }
            }
            
			
		}

//������� �� ����� �����ͨ���� �����
		
		function DeepDeriveScreenFunction()
		{
			//�������� �������, ����� �������� ������
			RegimeManualScreen=0;//������ �������� ManualScreen
		    RegimeGeneratorScreen=0;//������ �������� GeneratorScreen
			RegimeCycleDeriveScreen=0;//������ �������� CycleDeriveScreen
			RegimeSimpleDeriveScreen=0;//������ �������� SimleDeriveScreen
			click = 0;
			MobileMenu();
			clearInterval(intervalID);//��������� ���������
			
			////////////////����, ������� �������� �Ѩ ������///////////////////////////////////////////////////
			
			$('p#SimpleDeriveScreenName').removeClass('open_title').transition({opacity: 0 });//�������� ��������� �������� ������
			$('div#SimpleDeriveScreen').addClass('close').removeClass('table').transition({opacity: 0 });//�������� �������� �������� ������
			$('button#SimpleDeriveButtonFooter').addClass('close').transition({opacity: 0 });//������ ������
			$('p#CycleDeriveScreenName').removeClass('open_title').transition({opacity: 0 });//�������� ��������� ������������ ������
			$('div#CycleDeriveScreen').addClass('close').removeClass('table').transition({opacity: 0 });//�������� �������� ������������ ������
			$('p#GeneratorScreenName').removeClass('open_title').transition({opacity: 0 });//�������� ��������� ����������
			$('div#GeneratorScreen').addClass('close').removeClass('table');//�������� �������� ����������
			$('p#ManualScreenName').removeClass('open_title').transition({opacity: 0 });//������ ��������� �������
		    $('div#ManualScreen').addClass('close');//������ �������� �������
			
			//�������� ���������� �������, ���� ��� ����
			$('div#forward').transition({opacity: 0 }, 1000, 'cubic-bezier(0.175, 0.885, 0.32, 1.275)');
			$('div#left').transition({opacity: 0 }, 1000, 'cubic-bezier(0.175, 0.885, 0.32, 1.275)');
			$('div#right').transition({opacity: 0 }, 1000, 'cubic-bezier(0.175, 0.885, 0.32, 1.275)');
			$('div#stop').transition({opacity: 0 }, 1000, 'cubic-bezier(0.175, 0.885, 0.32, 1.275)');
			$('div#transport').transition({opacity: 0 }, 1000, 'cubic-bezier(0.175, 0.885, 0.32, 1.275)');
			$('div#north').transition({opacity: 0 }, 1000, 'cubic-bezier(0.175, 0.885, 0.32, 1.275)');
			$('div#south').transition({opacity: 0 }, 1000, 'cubic-bezier(0.175, 0.885, 0.32, 1.275)');
			$('div#west').transition({opacity: 0 }, 1000, 'cubic-bezier(0.175, 0.885, 0.32, 1.275)');
			$('div#east').transition({opacity: 0 }, 1000, 'cubic-bezier(0.175, 0.885, 0.32, 1.275)');
			$('div#street').transition({opacity: 0 }, 1000, 'cubic-bezier(0.175, 0.885, 0.32, 1.275)');
			
			///////////////������///////////////////////////////////////////////////////////////////////////////
			
			////////////////����, ������� ���������� �Ѩ ������/////////////////////////////////////////////////
			
			if (RegimeDeepDeriveScreen==0)
			{
				ShowDeepDeriveScreen();
			}
			
			function ShowDeepDeriveScreen()
			{
			$('p#DeepDeriveScreenName').addClass('open_title').transition({opacity: 1 }, 500, 'cubic-bezier(0.6, 0.04, 0.98, 0.335)');//�������� ��������� �����ͨ����� ������
		    $('div#DeepDeriveScreen').removeClass('close').addClass('table').transition({opacity: 1 }, 500, 'cubic-bezier(0.6, 0.04, 0.98, 0.335)');//�������� �������� �����ͨ����� ������
            $('button#DeepDeriveButtonFooter').removeClass('close').transition({opacity: 1 }, 500, 'cubic-bezier(0.6, 0.04, 0.98, 0.335)');//������ ��������
			RegimeDeepDeriveScreen=1;
			}
			
			///////////////��������/////////////////////////////////////////////////////////////////////////////
			
			var method;//����� ������
			var MaxMethodValue=10;
			var MinMethodValue=0;
			method=Math.floor(Math.random() * (MaxMethodValue - MinMethodValue)) + MinMethodValue;
			
			var value_of_acts;//���������� ���������, ���� ������� CASE, ��� ��� ���������� �����
			var MaxValue=5;
			var MinValue=2;
			value_of_acts=Math.floor(Math.random() * (MaxValue - MinValue)) + MinValue;
			
			setTimeout(Methods, 1000);//��������� ����� �������� ������� ���������� �������
				   
		    function Methods()       
			{
            
                if (RegimeLanguage)	
                {
                    switch(method)
                    {			
				
				       case(0):
				       $('div#forward').html('FORWARD').removeClass('close').addClass('open_title').transition({opacity: 1 }, 1000, 'cubic-bezier(0.645, 0.045, 0.355, 1)');
				          $('div#left').removeClass('open_title').addClass('close');
				         $('div#right').removeClass('open_title').addClass('close');
					         $('#stop').removeClass('open_title').addClass('close');
				        $('#transport').removeClass('open_title').addClass('close');
					        $('#north').removeClass('open_title').addClass('close');
				            $('#south').removeClass('open_title').addClass('close');
					         $('#west').removeClass('open_title').addClass('close');
				             $('#east').removeClass('open_title').addClass('close');
					       $('#street').removeClass('open_title').addClass('close');
				       break;
				
				       case(1):
				       $('div#forward').removeClass('open_title').addClass('close');
				          $('div#left').html('LEFT').removeClass('close').addClass('open_title').transition({opacity: 1 }, 1000, 'cubic-bezier(0.645, 0.045, 0.355, 1)');
				         $('div#right').removeClass('open_title').addClass('close');
					         $('#stop').removeClass('open_title').addClass('close');
				        $('#transport').removeClass('open_title').addClass('close');
					        $('#north').removeClass('open_title').addClass('close');
				            $('#south').removeClass('open_title').addClass('close');
					         $('#west').removeClass('open_title').addClass('close');
				             $('#east').removeClass('open_title').addClass('close');
					       $('#street').removeClass('open_title').addClass('close');
				       break;
				
				       case(2):
				       $('div#forward').removeClass('open_title').addClass('close');
				          $('div#left').removeClass('open_title').addClass('close');
				         $('div#right').html('RIGHT').removeClass('close').addClass('open_title').transition({opacity: 1 }, 1000, 'cubic-bezier(0.645, 0.045, 0.355, 1)');
					         $('#stop').removeClass('open_title').addClass('close');
				        $('#transport').removeClass('open_title').addClass('close');
					        $('#north').removeClass('open_title').addClass('close');
				            $('#south').removeClass('open_title').addClass('close');
					         $('#west').removeClass('open_title').addClass('close');
				             $('#east').removeClass('open_title').addClass('close');
					       $('#street').removeClass('open_title').addClass('close');
				       break;
					   
					   case(3):
					   timer = 60;//������� ���������� ��������� �������� �������
					   TimerFunction();//�������� �������
					   
				       $('div#forward').removeClass('open_title').addClass('close');
				          $('div#left').removeClass('open_title').addClass('close');
				         $('div#right').removeClass('open_title').addClass('close');
					         $('#stop').html('STOP<br>'+timer).removeClass('close').addClass('open_title').transition({opacity: 1 }, 1000, 'cubic-bezier(0.645, 0.045, 0.355, 1)');
				        $('#transport').removeClass('open_title').addClass('close');
					        $('#north').removeClass('open_title').addClass('close');
				            $('#south').removeClass('open_title').addClass('close');
					         $('#west').removeClass('open_title').addClass('close');
				             $('#east').removeClass('open_title').addClass('close');
					       $('#street').removeClass('open_title').addClass('close');
						   
						   function TimerFunction() 
						   {
                              							  
                              intervalID = setInterval(function() //������ 1000 �� ��������� �������
							  {
                                
                                $('#stop').html('STOP<br>'+timer);
								$('button#DeepDeriveButtonFooter').transition({opacity: 0 }, 1000, 'cubic-bezier(0.645, 0.045, 0.355, 1)');//������ ������
								setTimeout(function(){$('button#DeepDeriveButtonFooter').addClass('close')}, 1000);
                                if (timer == 0)//����� ��������� �� ����, �����Ĩ� �� ��������� �����, �������� ������ DeepDeriveScreenFunction()
								{
                                  clearInterval(intervalID);//��������� ���������
								  SoundOfEnd();
								  function SoundOfEnd() 
								  {
                                    var audio = new Audio(); // ������ ����� ������� Audio
                                    audio.src = 'sound_of_end.mp3'; // ��������� ���� � �����
                                    audio.play(); // ������������� ���������
									$('button#DeepDeriveButtonFooter').transition({opacity: 1 }, 1000, 'cubic-bezier(0.645, 0.045, 0.355, 1)');//������ ��������
								    setTimeout(function(){$('button#DeepDeriveButtonFooter').removeClass('close')}, 1000);
                                  }
                                  DeepDeriveScreenFunction();
                                } 
                                timer = timer - 1;
								
                              }, 1000);
                           }
				       break;
					   
					   case(4):
					   
					   //���������, ������� �����, ����� ����� �� ������ ���������
					   var date = new Date();//�������� ����
					   var hours = date.getHours();//��������� ����
				       if (hours>=22||hours<=8)//���� ����, �� ������������� �������
					   {
						   DeepDeriveScreenFunction();
						   break;
					   }
					   
					   var transport_number;//�������� ����� ����������
					   var transport_number_min=0;
					   var transport_number_max=10;
					   var transport_stop_value;//�������� ���������� ���������
					   var transport_stop_value_min=5;
					   var transport_stop_value_max=11;
					   
					   transport_number=Math.floor(Math.random() * (transport_number_max - transport_number_min)) + transport_number_min;
					   transport_stop_value=Math.floor(Math.random() * (transport_stop_value_max - transport_stop_value_min)) + transport_stop_value_min;
					   
				       $('div#forward').removeClass('open_title').addClass('close');
				          $('div#left').removeClass('open_title').addClass('close');
				         $('div#right').removeClass('open_title').addClass('close');
					         $('#stop').removeClass('open_title').addClass('close');
				        $('#transport').html('GET ON A PUBLIC TRANSPORT THAT CONTAINS A NUMBER OF ROUTE '+transport_number+' AND GO '+transport_stop_value+' STOPS').removeClass('close').addClass('open_title').transition({opacity: 1 }, 1000, 'cubic-bezier(0.645, 0.045, 0.355, 1)');
					        $('#north').removeClass('open_title').addClass('close');
				            $('#south').removeClass('open_title').addClass('close');
					         $('#west').removeClass('open_title').addClass('close');
				             $('#east').removeClass('open_title').addClass('close');
					       $('#street').removeClass('open_title').addClass('close');
				       break;
					   
					   case(5):
				       $('div#forward').removeClass('open_title').addClass('close');
				          $('div#left').removeClass('open_title').addClass('close');
				         $('div#right').removeClass('open_title').addClass('close');
					         $('#stop').removeClass('open_title').addClass('close');
				        $('#transport').removeClass('open_title').addClass('close');
					        $('#north').html('GO TO THE NORTH '+value_of_acts+' QUARTALS').addClass('open_title').transition({opacity: 1 }, 1000, 'cubic-bezier(0.645, 0.045, 0.355, 1)');
				            $('#south').removeClass('open_title').addClass('close');
					         $('#west').removeClass('open_title').addClass('close');
				             $('#east').removeClass('open_title').addClass('close');
					       $('#street').removeClass('open_title').addClass('close');
				       break;
					   
					   case(6):
				       $('div#forward').removeClass('open_title').addClass('close');
				          $('div#left').removeClass('open_title').addClass('close');
				         $('div#right').removeClass('open_title').addClass('close');
					         $('#stop').removeClass('open_title').addClass('close');
				        $('#transport').removeClass('open_title').addClass('close');
					        $('#north').removeClass('open_title').addClass('close');
				            $('#south').html('GO TO THE SOUTH '+value_of_acts+' QUARTALS').removeClass('close').addClass('open_title').transition({opacity: 1 }, 1000, 'cubic-bezier(0.645, 0.045, 0.355, 1)');
					         $('#west').removeClass('open_title').addClass('close');
				             $('#east').removeClass('open_title').addClass('close');
					       $('#street').removeClass('open_title').addClass('close');
				       break;
					   
					   case(7):
				       $('div#forward').removeClass('open_title').addClass('close');
				          $('div#left').removeClass('open_title').addClass('close');
				         $('div#right').removeClass('open_title').addClass('close');
					         $('#stop').removeClass('open_title').addClass('close');
				        $('#transport').removeClass('open_title').addClass('close');
					        $('#north').removeClass('open_title').addClass('close');
				            $('#south').removeClass('open_title').addClass('close');
					         $('#west').html('GO TO THE WEST '+value_of_acts+' QUARTALS').removeClass('close').addClass('open_title').transition({opacity: 1 }, 1000, 'cubic-bezier(0.645, 0.045, 0.355, 1)');
				             $('#east').removeClass('open_title').addClass('close');
					       $('#street').removeClass('open_title').addClass('close');
				       break;
					   
					   case(8):
				       $('div#forward').removeClass('open_title').addClass('close');
				          $('div#left').removeClass('open_title').addClass('close');
				         $('div#right').removeClass('open_title').addClass('close');
					         $('#stop').removeClass('open_title').addClass('close');
				        $('#transport').removeClass('open_title').addClass('close');
					        $('#north').removeClass('open_title').addClass('close');
				            $('#south').removeClass('open_title').addClass('close');
					         $('#west').removeClass('open_title').addClass('close');
				             $('#east').html('GO TO THE EAST '+value_of_acts+' QUARTALS').removeClass('close').addClass('open_title').transition({opacity: 1 }, 1000, 'cubic-bezier(0.645, 0.045, 0.355, 1)');
					       $('#street').removeClass('open_title').addClass('close');
				       break;
					   
					   case(9):
                       var alphabet_eng = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W"];
                       var max_letter_eng=23;//���������� ���� � ��������
					   var min_letter=0;
                       var letter_number_eng;
                       letter_number_eng=Math.floor(Math.random() * (max_letter_eng - min_letter)) + min_letter;
                       letter_eng=alphabet_eng[letter_number_eng];
	
				       $('div#forward').removeClass('open_title').addClass('close');
				          $('div#left').removeClass('open_title').addClass('close');
				         $('div#right').removeClass('open_title').addClass('close');
					         $('#stop').removeClass('open_title').addClass('close');
				        $('#transport').removeClass('open_title').addClass('close');
					        $('#north').removeClass('open_title').addClass('close');
				            $('#south').removeClass('open_title').addClass('close');
					         $('#west').removeClass('open_title').addClass('close');
				             $('#east').removeClass('open_title').addClass('close');
					       $('#street').html('FIND THE NEAREST STREET THAT NAME BEGINS WITH A LETTER '+'"'+letter_eng+'"').removeClass('close').addClass('open_title').transition({opacity: 1 }, 1000, 'cubic-bezier(0.645, 0.045, 0.355, 1)');
				       break;
			
				    }
                }

                else
                {
                    switch(method)
                    {			
				
				       case(0):
				       $('div#forward').html('ПРЯМО').removeClass('close').addClass('open_title').transition({opacity: 1 }, 1000, 'cubic-bezier(0.645, 0.045, 0.355, 1)');
				          $('div#left').removeClass('open_title').addClass('close');
				         $('div#right').removeClass('open_title').addClass('close');
					         $('#stop').removeClass('open_title').addClass('close');
				        $('#transport').removeClass('open_title').addClass('close');
					        $('#north').removeClass('open_title').addClass('close');
				            $('#south').removeClass('open_title').addClass('close');
					         $('#west').removeClass('open_title').addClass('close');
				             $('#east').removeClass('open_title').addClass('close');
					       $('#street').removeClass('open_title').addClass('close');
				       break;
				
				       case(1):
				       $('div#forward').removeClass('open_title').addClass('close');
				          $('div#left').html('ВЛЕВО').removeClass('close').addClass('open_title').transition({opacity: 1 }, 1000, 'cubic-bezier(0.645, 0.045, 0.355, 1)');
				         $('div#right').removeClass('open_title').addClass('close');
					         $('#stop').removeClass('open_title').addClass('close');
				        $('#transport').removeClass('open_title').addClass('close');
					        $('#north').removeClass('open_title').addClass('close');
				            $('#south').removeClass('open_title').addClass('close');
					         $('#west').removeClass('open_title').addClass('close');
				             $('#east').removeClass('open_title').addClass('close');
					       $('#street').removeClass('open_title').addClass('close');
				       break;
				
				       case(2):
				       $('div#forward').removeClass('open_title').addClass('close');
				          $('div#left').removeClass('open_title').addClass('close');
				         $('div#right').html('ВПРАВО').removeClass('close').addClass('open_title').transition({opacity: 1 }, 1000, 'cubic-bezier(0.645, 0.045, 0.355, 1)');
					         $('#stop').removeClass('open_title').addClass('close');
				        $('#transport').removeClass('open_title').addClass('close');
					        $('#north').removeClass('open_title').addClass('close');
				            $('#south').removeClass('open_title').addClass('close');
					         $('#west').removeClass('open_title').addClass('close');
				             $('#east').removeClass('open_title').addClass('close');
					       $('#street').removeClass('open_title').addClass('close');
				       break;
					   
					   case(3):
					   timer = 60;//������� ���������� ��������� �������� �������
					   TimerFunction();//�������� �������
					   
				       $('div#forward').removeClass('open_title').addClass('close');
				          $('div#left').removeClass('open_title').addClass('close');
				         $('div#right').removeClass('open_title').addClass('close');
					         $('#stop').html('СТОП<br>'+timer).removeClass('close').addClass('open_title').transition({opacity: 1 }, 1000, 'cubic-bezier(0.645, 0.045, 0.355, 1)');
				        $('#transport').removeClass('open_title').addClass('close');
					        $('#north').removeClass('open_title').addClass('close');
				            $('#south').removeClass('open_title').addClass('close');
					         $('#west').removeClass('open_title').addClass('close');
				             $('#east').removeClass('open_title').addClass('close');
					       $('#street').removeClass('open_title').addClass('close');
						   
						   function TimerFunction() 
						   {
                              							  
                              intervalID = setInterval(function() //������ 1000 �� ��������� �������
							  {
                                
                                $('#stop').html('СТОП<br>'+timer);
								$('button#DeepDeriveButtonFooter').transition({opacity: 0 }, 1000, 'cubic-bezier(0.645, 0.045, 0.355, 1)');//������ ������
								setTimeout(function(){$('button#DeepDeriveButtonFooter').addClass('close')}, 1000);
                                if (timer == 0)//����� ��������� �� ����, �����Ĩ� �� ��������� �����, �������� ������ DeepDeriveScreenFunction()
								{
                                  clearInterval(intervalID);//��������� ���������
								  SoundOfEnd();
								  function SoundOfEnd() 
								  {
                                    var audio = new Audio(); // ������ ����� ������� Audio
                                    audio.src = 'sound_of_end.mp3'; // ��������� ���� � �����
                                    audio.play(); // ������������� ���������
									$('button#DeepDeriveButtonFooter').transition({opacity: 1 }, 1000, 'cubic-bezier(0.645, 0.045, 0.355, 1)');//������ ��������
								    setTimeout(function(){$('button#DeepDeriveButtonFooter').removeClass('close')}, 1000);
                                  }
                                  DeepDeriveScreenFunction();
                                } 
                                timer = timer - 1;
								
                              }, 1000);
                           }
				       break;
					   
					   case(4):
					   
					   //���������, ������� �����, ����� ����� �� ������ ���������
					   var date = new Date();//�������� ����
					   var hours = date.getHours();//��������� ����
				       if (hours>=22||hours<=8)//���� ����, �� ������������� �������
					   {
						   DeepDeriveScreenFunction();
						   break;
					   }
					   
					   var transport_number;//�������� ����� ����������
					   var transport_number_min=0;
					   var transport_number_max=10;
					   var transport_stop_value;//�������� ���������� ���������
					   var transport_stop_value_min=5;
					   var transport_stop_value_max=11;
					   
					   transport_number=Math.floor(Math.random() * (transport_number_max - transport_number_min)) + transport_number_min;
					   transport_stop_value=Math.floor(Math.random() * (transport_stop_value_max - transport_stop_value_min)) + transport_stop_value_min;
					   
				       $('div#forward').removeClass('open_title').addClass('close');
				          $('div#left').removeClass('open_title').addClass('close');
				         $('div#right').removeClass('open_title').addClass('close');
					         $('#stop').removeClass('open_title').addClass('close');
				        $('#transport').html('СЯДЬ НА ОБЩЕСТВЕННЫЙ ТРАНСПОРТ, НОМЕР КОТОРОГО СОДЕРЖИТ ЦИФРУ '+transport_number+' И ПРОЕДЬ '+transport_stop_value+' ОСТАНОВОК').removeClass('close').addClass('open_title').transition({opacity: 1 }, 1000, 'cubic-bezier(0.645, 0.045, 0.355, 1)');
					        $('#north').removeClass('open_title').addClass('close');
				            $('#south').removeClass('open_title').addClass('close');
					         $('#west').removeClass('open_title').addClass('close');
				             $('#east').removeClass('open_title').addClass('close');
					       $('#street').removeClass('open_title').addClass('close');
				       break;
					   
					   case(5):
				       $('div#forward').removeClass('open_title').addClass('close');
				          $('div#left').removeClass('open_title').addClass('close');
				         $('div#right').removeClass('open_title').addClass('close');
					         $('#stop').removeClass('open_title').addClass('close');
				        $('#transport').removeClass('open_title').addClass('close');
					        $('#north').html('ИДИ НА СЕВЕР '+value_of_acts+' КВАРТАЛА').addClass('open_title').transition({opacity: 1 }, 1000, 'cubic-bezier(0.645, 0.045, 0.355, 1)');
				            $('#south').removeClass('open_title').addClass('close');
					         $('#west').removeClass('open_title').addClass('close');
				             $('#east').removeClass('open_title').addClass('close');
					       $('#street').removeClass('open_title').addClass('close');
				       break;
					   
					   case(6):
				       $('div#forward').removeClass('open_title').addClass('close');
				          $('div#left').removeClass('open_title').addClass('close');
				         $('div#right').removeClass('open_title').addClass('close');
					         $('#stop').removeClass('open_title').addClass('close');
				        $('#transport').removeClass('open_title').addClass('close');
					        $('#north').removeClass('open_title').addClass('close');
				            $('#south').html('ИДИ НА ЮГ '+value_of_acts+' КВАРТАЛА').removeClass('close').addClass('open_title').transition({opacity: 1 }, 1000, 'cubic-bezier(0.645, 0.045, 0.355, 1)');
					         $('#west').removeClass('open_title').addClass('close');
				             $('#east').removeClass('open_title').addClass('close');
					       $('#street').removeClass('open_title').addClass('close');
				       break;
					   
					   case(7):
				       $('div#forward').removeClass('open_title').addClass('close');
				          $('div#left').removeClass('open_title').addClass('close');
				         $('div#right').removeClass('open_title').addClass('close');
					         $('#stop').removeClass('open_title').addClass('close');
				        $('#transport').removeClass('open_title').addClass('close');
					        $('#north').removeClass('open_title').addClass('close');
				            $('#south').removeClass('open_title').addClass('close');
					         $('#west').html('ИДИ НА ЗАПАД '+value_of_acts+' КВАРТАЛА').removeClass('close').addClass('open_title').transition({opacity: 1 }, 1000, 'cubic-bezier(0.645, 0.045, 0.355, 1)');
				             $('#east').removeClass('open_title').addClass('close');
					       $('#street').removeClass('open_title').addClass('close');
				       break;
					   
					   case(8):
				       $('div#forward').removeClass('open_title').addClass('close');
				          $('div#left').removeClass('open_title').addClass('close');
				         $('div#right').removeClass('open_title').addClass('close');
					         $('#stop').removeClass('open_title').addClass('close');
				        $('#transport').removeClass('open_title').addClass('close');
					        $('#north').removeClass('open_title').addClass('close');
				            $('#south').removeClass('open_title').addClass('close');
					         $('#west').removeClass('open_title').addClass('close');
				             $('#east').html('ИДИ НА ВОСТОК '+value_of_acts+' КВАРТАЛА').removeClass('close').addClass('open_title').transition({opacity: 1 }, 1000, 'cubic-bezier(0.645, 0.045, 0.355, 1)');
					       $('#street').removeClass('open_title').addClass('close');
				       break;
					   
					   case(9):
					   var alphabet = ["А", "Б", "В", "Г", "Д", "Е", "И", "К", "Л", "М", "П", "Р", "С", "Т", "Ф", "Ш", "Я"];//������ ����
					   var max_letter=17;//���������� ���� � ��������
					   var min_letter=0;
					   var letter_number;//����� ����� � �������
					   letter_number=Math.floor(Math.random() * (max_letter - min_letter)) + min_letter;
					   letter=alphabet[letter_number];
	
				       $('div#forward').removeClass('open_title').addClass('close');
				          $('div#left').removeClass('open_title').addClass('close');
				         $('div#right').removeClass('open_title').addClass('close');
					         $('#stop').removeClass('open_title').addClass('close');
				        $('#transport').removeClass('open_title').addClass('close');
					        $('#north').removeClass('open_title').addClass('close');
				            $('#south').removeClass('open_title').addClass('close');
					         $('#west').removeClass('open_title').addClass('close');
				             $('#east').removeClass('open_title').addClass('close');
					       $('#street').html('НАЙДИ БЛИЖАЙШУЮ УЛИЦУ, НАЗВАНИЕ КОТОРОЙ НАЧИНАЕТСЯ НА БУКВУ '+'"'+letter+'"').removeClass('close').addClass('open_title').transition({opacity: 1 }, 1000, 'cubic-bezier(0.645, 0.045, 0.355, 1)');
				       break;
			
				    }
                }
			        
			}
		}
		
//������� �� ����� ���������

        max_generator_hour=24;
		min_generator_hour=0;
		max_generator_minute=60;
		min_generator_minute=0;
		
		function GeneratorScreenFunction()
		{
			RegimeManualScreen=0;//������ �������� ManualScreen
		    RegimeCycleDeriveScreen=0;//������ �������� CycleDeriveScreen
		    RegimeSimpleDeriveScreen=0;//������ �������� SimpleDeriveScreen
		    RegimeDeepDeriveScreen=0;//������ �������� DeepDeriveScreen
			RegimeGeneratorScreen=1;
			click = 0;
			MobileMenu();
			clearInterval(intervalID);//��������� ���������
			
			////////////////����, ������� �������� �Ѩ ������///////////////////////////////////////////////////
			$('p#SimpleDeriveScreenName').removeClass('open_title').transition({opacity: 0 });//�������� ��������� �������� ������
			$('div#SimpleDeriveScreen').removeClass('table').addClass('close').transition({opacity: 0 });//�������� �������� �������� ������
			$('p#CycleDeriveScreenName').removeClass('open_title').transition({opacity: 0 });//�������� ��������� ������������ ������
			$('div#CycleDeriveScreen').removeClass('table').addClass('close').transition({opacity: 0 });//�������� �������� ������������ ������
			$('p#DeepDeriveScreenName').removeClass('open_title').transition({opacity: 0 });//�������� ��������� �����ͨ����� ������
			$('div#DeepDeriveScreen').removeClass('table').addClass('close').transition({opacity: 0 });//�������� �������� �����ͨ����� ������
			$('p#ManualScreenName').removeClass('open_title').transition({opacity: 0 });//������ ��������� �������
		    $('div#ManualScreen').addClass('close');//������ �������� �������
			///////////////������///////////////////////////////////////////////////////////////////////////////
			
			////////////////����, ������� ���������� �Ѩ ������/////////////////////////////////////////////////
			
			$('p#GeneratorScreenName').addClass('open_title').transition({opacity: 1 }, 500, 'cubic-bezier(0.6, 0.04, 0.98, 0.335)');//�������� ��������� ����������
		    $('div#GeneratorScreen').removeClass('close').addClass('table').transition({opacity: 1 }, 2500, 'cubic-bezier(0.6, -0.28, 0.735, 0.045)');//�������� �������� ����������
		
			///////////////��������/////////////////////////////////////////////////////////////////////////////
			
			var hour;
			var minute;
			var points = ' : ';
			var zero='0';
			
			hour=Math.floor(Math.random() * (max_generator_hour - min_generator_hour)) + min_generator_hour;
			minute=Math.floor(Math.random() * (max_generator_minute - min_generator_minute)) + min_generator_minute;
			
			if (minute<10)
			{
                $('#display_en').html(hour+points+zero+minute);	
                $('#display_ru').html(hour+points+zero+minute);	
			}
			else
			{
                $('#display_en').html(hour+points+minute);	
                $('#display_ru').html(hour+points+minute);	
			}
            		
		}
		
//������� �� ����� �������

		function ManualScreenFunction()
		{
		    RegimeGeneratorScreen=0;//������ �������� GeneratorScreen
		    RegimeCycleDeriveScreen=0;//������ �������� CycleDeriveScreen
		    RegimeSimpleDeriveScreen=0;//������ �������� SimpleDeriveScreen
		    RegimeDeepDeriveScreen=0;//������ �������� DeepDeriveScreen
			RegimeManualScreen=1;
			click = 0;
			MobileMenu();
			
			////////////////����, ������� �������� �Ѩ ������///////////////////////////////////////////////////
			$('p#SimpleDeriveScreenName').removeClass('open_title').transition({opacity: 0 });//�������� ��������� �������� ������
			$('div#SimpleDeriveScreen').removeClass('table').addClass('close').transition({opacity: 0 });//�������� �������� �������� ������
			$('p#DeepDeriveScreenName').removeClass('open_title').transition({opacity: 0 });//�������� ��������� �����ͨ����� ������
			$('div#DeepDeriveScreen').removeClass('table').addClass('close').transition({opacity: 0 });//�������� �������� �����ͨ����� ������
			$('p#CycleDeriveScreenName').removeClass('open_title').transition({opacity: 0 });//�������� ��������� ������������ ������
			$('div#CycleDeriveScreen').removeClass('table').addClass('close').transition({opacity: 0 });//�������� �������� ������������ ������
			$('p#GeneratorScreenName').removeClass('open_title').transition({opacity: 0 });//�������� ��������� ����������
			$('div#GeneratorScreen').removeClass('table').addClass('close').transition({opacity: 0 });//�������� �������� ����������
			///////////////������///////////////////////////////////////////////////////////////////////////////
			
			////////////////����, ������� ���������� �Ѩ ������/////////////////////////////////////////////////
			
			$('p#ManualScreenName').addClass('open_title').transition({opacity: 1 }, 500, 'cubic-bezier(0.6, 0.04, 0.98, 0.335)');//�������� ���������
		    $('div#ManualScreen').removeClass('close').transition({opacity: 1 }, 500, 'cubic-bezier(0.6, 0.04, 0.98, 0.335)');//�������� ��������
			
			///////////////��������/////////////////////////////////////////////////////////////////////////////
		}		