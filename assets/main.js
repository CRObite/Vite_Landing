var modal = document.getElementById('modal');
var modal2 = document.getElementById('modal2');
var modal3 = document.getElementById('modal3');
var modal4 = document.getElementById('modal4');
var openModalBtn = document.getElementById('openModalBtn');
var openModalBtn2 = document.getElementById('openModalBtn2');
var openModalBtn3 = document.querySelectorAll('.checker__card-more')[0];
var openModalBtn4 = document.querySelectorAll('.checker__card-more')[1];
var openModalBtn5 = document.querySelectorAll('.checker__card-more')[2];
var againBtn = document.getElementById('again');
var closeBtn = document.getElementsByClassName('close')[0];
var closeBtn1 = document.getElementsByClassName('close')[1];
var closeBtn2 = document.getElementsByClassName('close')[2];
var closeBtn3 = document.getElementsByClassName('close')[3];
var checkboxQuota = document.getElementById('checkbox');
var professionItems = document.querySelectorAll(".profession");
const posterItems = document.querySelectorAll(".poster");
const resultItems = document.querySelectorAll(".poster2");
const arrowItems = document.querySelectorAll(".arrow2");
var ind;



// accordion

const accordionItems = document.querySelectorAll(".accordion__item");

accordionItems.forEach((accordion) => {
    accordion.addEventListener("click", () => {
      const isActive = accordion.classList.contains("active");
  
      accordionItems.forEach((item) => {
        item.classList.remove("active");
      });
  
      if (!isActive) {
        accordion.classList.add("active");
      }
    });
});

const slider = document.getElementById("myRange");
  const score = document.querySelector(".analysis__score");

  slider.addEventListener("input", function () {
    score.innerText = slider.value;
});


const checkerItems = document.querySelectorAll(".checker__card");
const dotsItems = document.querySelectorAll(".checker_dot");

checkerItems.forEach((checker , index) => {
    checker.addEventListener("click", () => {
      const isActive = checker.classList.contains("active");
  
      checkerItems.forEach((item, index2) => {
        item.classList.remove("active");
        dotsItems[index2].classList.remove("active");
      });
  
      if (!isActive) {
        checker.classList.add("active");
        dotsItems[index].classList.add("active");
      }
    });
});

dotsItems.forEach((dot , index) => {
  dot.addEventListener("click", () => {
    const isActive = dot.classList.contains("active");

    dotsItems.forEach((item, index2) => {
      item.classList.remove("active");
      checkerItems[index2].classList.remove("active");
    });

    if (!isActive) {
      dot.classList.add("active");
      checkerItems[index].classList.add("active");
    }
  });
});


const optionMenu = document.querySelector(".select-menu"),
  SelectBtn = optionMenu.querySelector(".select-btn"),
  options = optionMenu.querySelectorAll(".option"),
  sBtn_text = optionMenu.querySelector(".sBtn-text");



const optionMenu2 = document.querySelectorAll(".select-menu")[1],
  SelectBtn2 = optionMenu2.querySelector(".select-btn"),
  options2 = optionMenu2.querySelectorAll(".option"),
  sBtn_text2 = optionMenu2.querySelector(".sBtn-text");

SelectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));
SelectBtn2.addEventListener("click", () => optionMenu2.classList.toggle("active"));

var sub1;
var sub2;

options.forEach(option => {
  option.addEventListener("click", () => {
    let selectedOption = option.querySelector(".option-text").innerHTML;
    sBtn_text.innerHTML = selectedOption;
    sBtn_text2.innerHTML = "Екінші бейіндік пән";
    optionMenu.classList.remove("active");
    sub1 = option.querySelector(".option-text").getAttribute("data");
    makeAllClear(option.querySelector(".option-text").getAttribute("data"));
  })
})



options2.forEach(option2 => {
  option2.addEventListener("click", () => {
    if(!option2.classList.contains("disabled")){
      let selectedOption2 = option2.querySelector(".option-text").innerHTML;
      sBtn_text2.innerHTML = selectedOption2;
      sub2 = option2.querySelector(".option-text").getAttribute("data");
      optionMenu2.classList.remove("active");
    }
   
  })
})  

function makeAllClear(value){
  options2.forEach(option2 => {
    option2.classList.remove('disabled');
  });

  switch (value) {
    case 'math':

    options2.forEach(option2 => {
      if(option2.querySelector(".option-text").getAttribute("data") !== 'physics' && 
      option2.querySelector(".option-text").getAttribute("data") !== 'geog' && 
      option2.querySelector(".option-text").getAttribute("data") !== 'cs'){
        option2.classList.add('disabled');
    } 
    });
            
    
        break;
    case 'history':
      options2.forEach(option2 => {
        if(option2.querySelector(".option-text").getAttribute("data") !== 'geog' && 
        option2.querySelector(".option-text").getAttribute("data") !== 'rights'){
          option2.classList.add('disabled');
      } 
      });
        
        break;

    case 'biology':

      options2.forEach(option2 => {
        if(option2.querySelector(".option-text").getAttribute("data") !== 'geog'){
          option2.classList.add('disabled');
      } 
      });
          break; 

    case 'english':

      options2.forEach(option2 => {
        if(option2.querySelector(".option-text").getAttribute("data") !== 'history'){
          option2.classList.add('disabled');
      } 
      });
        
        break;  
    case 'kazakh':

        options2.forEach(option2 => {
          if(option2.querySelector(".option-text").getAttribute("data") !== 'kazakhlit'){
            option2.classList.add('disabled');
        } 
        });
        
        break;  

    case 'kr':

          options2.forEach(option2 => {
            if(option2.querySelector(".option-text").getAttribute("data") !== 'krlit'){
              option2.classList.add('disabled');
          } 
          });

          break;      
             
        
    case 'geog':

        options2.forEach(option2 => {
          if(option2.querySelector(".option-text").getAttribute("data") !== 'english'){
            option2.classList.add('disabled');
        } 
        });
            
                
        break;   
        
    case 'chemistry':

        options2.forEach(option2 => {
          if(option2.querySelector(".option-text").getAttribute("data") !== 'physics' && 
          option2.querySelector(".option-text").getAttribute("data") !== 'biology'){
            option2.classList.add('disabled');
        } 
        });
        
         
        break;  

    case 'art':

        options2.forEach(option2 => {
          if(option2.querySelector(".option-text").getAttribute("data") !== 'art'){
            option2.classList.add('disabled');
        } 
        });
     
        break;      
        
        
    default:
      
        options2.forEach(option2 => {
          option2.classList.remove('disabled');
        });

      break;
    }

}


// const subject1Select = document.getElementById('subject1');
// const subject2Select = document.getElementById('subject2');
const mapOfProfession = new Map([
  ['math-physics',['B009','B010','B054','B055','B056','B059','B061','B062','B063','B064','B065','B066','B067','B069','B070','B071','B074','B076','B082','B094','B162','B166','B167','B171','B183','B271']],
  ['math-geog',['B038','B044','B045','B046','B047','B048','B052','B075','B095','B145']],
  ['math-cs',['B011','B057','B058']],
  ['biology-geog',['B001','B002','B003','B019','B020','B041','B051','B079','B090']],
  ['geog-english',['B091','B093']],
  ['history-geog',['B008','B014','B015','B032','B034','B134']],
  ['history-rights',['B049','B096']],
  ['chemistry-biology',['B012','B013','B050','B053','B068','B072','B077','B078','B080','B083','B084','B085','B086','B087','B088','B089']],
  ['chemistry-physics',['B060']],
  ['english-history',['B018','B035','B036','B039','B040','B135','B140']],
  ['art-art',['B004','B005','B006','B007','B021','B027','B028','B029','B030','B031','B033','B042','B073','B092']],
  ['kazakh-kazakhlit',['B016','B017','B037','B043']],
  ['kr-krlit',['B016','B017','B037','B043']]
  ]);
const mapOfProfessionName = new Map([
  ['B009','Математика мұғалімдерін даярлау'],
  ['B010','Физика мұғалімдерін даярлау'],
  ['B054','Физика'],
  ['B055','Математика және статистика'],
  ['B056','Механика'],
  ['B059','Коммуникациялар және коммуникациялық технологиялар'],
  ['B061','Материалтану және технологиялар'],
  ['B062','Электр техникасы және энергетика'],
  ['B063','Электр техникасы және автоматтандыру'],
  ['B064','Механика және металл өңдеу'],
  ['B065','Автокөлік құралдары'],
  ['B066','Теңіз көлігі және технологиялары'],
  ['B067','Әуе көлігі және технологиялары'],
  ['B069','Материалдар өндірісі (шыны, қағаз, пластик, ағаш)'],
  ['B070','Тоқыма: киім, аяқ киім және былғары бұйымдары'],
  ['B071','Тау-кен ісі және пайдалы қазбаларды өндіру'],
  ['B074','Қала құрылысы,құрылыс жұмыстары және азаматтық құрылыс'],
  ['B076','Стандарттау, сертификаттау және метрология (сала бойынша)'],
  ['B082','Су ресурстары және суды пайдалану'],
  ['B094','Санитарлық-профилактикалық іс-шаралар'],
  ['B162','Жылу энергетикасы'],
  ['B166','Көліктек құрылыстары'],
  ['B167','Ұшу аппараттарын және қозғалтқыштарды ұшырып пайдалану'],
  ['B171','Металургия'],
  ['B183','Агроинженерия'],
  ['В271','Мұнай-газ ісі'],
  ['B038','Әлемтану'],
  ['B044','Менеджмент және басқару'],
  ['B045','Аудит және салық салу'],
  ['B046','Қаржы, экономика, банк және сақтандыру ісі'],
  ['B047','Маркетинг және жарнама'],
  ['B048','Еңбек дағдылары'],
  ['B052','Жер туралы ғылым'],
  ['B075','Кадастр және жерге орналастыру'],
  ['B095','Көлік қызметтері'],
  ['B145',' Мемлекеттік аудит'],
  ['B011','Информатика мұғалімдерін даярлау'],
  ['B057','Ақпараттық технологиялар'],
  ['B058','Ақпараттық қауіпсіздік'],
  ['B001','Педагогика және психология'],
  ['B002','Мектепке дейінгі оқыту және тәрбиелеу'],
  ['B003','Бастауышта оқыту педагогикасы мен әдістемесі'],
  ['B019','Әлеуметтік педагогтарды даярлау'],
  ['B020','Арнайы педагогика'],
  ['B041','Психология'],
  ['B051','Қоршаған орта'],
  ['B079','Орман шаруашылығы'],
  ['B090','Әлеуметтік жұмыс'],
  ['B091','Туризм'],
  ['B093','Мейрамхана ісі және мейманхана бизнесі'],
  ['B008','Құқық және экономика негіздері мұғалымдерін даярлау'],
  ['B014','География мұғалімдерін даярлау'],
  ['B015','Гуманитарлық пәндер мұғалімдерін даярлау'],
  ['B032','Философия және этика'],
  ['B034','Тарих'],
  ['B134','Археология және этнология'],
  ['B049','Құқық'],
  ['B096','Құқық қорғау қызметі'],
  ['B012','Химия мұғалімдерін даярлау'],
  ['B013','Биология мұғалімдерін даярлау'],
  ['B050','Биологиялық және сабақтас ғылымдар'],
  ['B053','Химия'],
  ['B068','Азық-түлік өнімдерінің өндірісі'],
  ['B072','Фармацевтикалық өндіріс технологиясы'],
  ['B077','Өсімдік шаруашылығы'],
  ['B078','Мал шаруашылығы'],
  ['B080','Балық шаруашылығы'],
  ['B083','Ветеринария'],
  ['B084','Мейірбике ісі'],
  ['B085','Фармация'],
  ['B086','Жалпы медицина'],
  ['B087','Стамотология'],
  ['B088','Педиатрия'],
  ['B089','Қоғамдық денсаулық сақтау'],
  ['B060','Химиялық инженерия және процестер'],
  ['B018','Шет тілі мұғалімдерін даярлау','B035 Түркітану және шығыстану'],
  ['B035','Түркітану және шығыстану'],
  ['B036','Аударма ісі'],
  ['B039','Мәдениеттану'],
  ['B040','Саясаттану'],
  ['B135','Шығыстану'],
  ['B140','Халықаралық қатынастар мен дипломатия'],
  ['B004','Бастапқы әскерги дайындық мұғалімдердін даярлау'],
  ['B005','Дене шынықтыру мұғалімдерін даярлау'],
  ['B006','Музыкалық мұғалімдерін даярлау'],
  ['B007','Көркем және сызу мұғалімдерін даярлау'],
  ['B021','Орындаушылық өнер'],
  ['B027','Театр өнері'],
  ['B028','Хореография'],
  ['B029','Аудиовизуалды құрылғылар және медиа өндіріс'],
  ['B030','Бейнелеу өнері'],
  ['B031','Сән, дизайн'],
  ['B033','Дінтану және теология'],
  ['B042','Журналистика және репортер ісі'],
  ['B073','Сәулет'],
  ['B092','Тынығу'],
  ['B016','Қазақ тілі мен әдебиеті мұғалімдерін даярлау'],
  ['B017','Орыс тілі мен әдебиеті мұғалімдерін даярлау'],  
  ['B037','Филология'],
  ['B043','Қазақ тілі мен әдебиеті мұғалімдерін даярлау'],
]);
const mapOfProfessionPoint = new Map([
  ['B009',126],
  ['B010',115],
  ['B054',60],
  ['B055',93],
  ['B056',52],
  ['B059',60],
  ['B061',52],
  ['B062',57],
  ['B063',57],  
  ['B064',52],
  ['B065',52],
  ['B066',53],
  ['B067',55],
  ['B069',52], 
  ['B070',52],
  ['B071',52],
  ['B074',62],
  ['B076',72],
  ['B082',52],
  ['B094',71],
  ['B162',87],
  ['B166',52],
  ['B167',102],
  ['B171',56],
  ['B183',52],   
  ['В271',118],
  ['B038',103],
  ['B044',122],
  ['B045',117],
  ['B046',128],
  ['B047',123],
  ['B048',114],
  ['B052',107],
  ['B075',93], 
  ['B095',112], 
  ['B145',97],
  ['B011',95],
  ['B057',106],
  ['B058',71],
  ['B001',91], 
  ['B002',77],
  ['B003',91],
  ['B019',77],
  ['B020',82],
  ['B041',92],
  ['B051',72],
  ['B079',52],
  ['B090',75],  
  ['B091',101],
  ['B093',99],
  ['B008',75],
  ['B014',100],
  ['B015',109],
  ['B032',87],
  ['B034',99],
  ['B134',92],
  ['B049',117],
  ['B096',75],
  ['B012',99],
  ['B013',95],
  ['B050',77],
  ['B053',63],   
  ['B068',55],
  ['B072',71],
  ['B077',52],
  ['B078',52],
  ['B080',52],
  ['B083',52],
  ['B084',99],
  ['B085',123],
  ['B086',116],
  ['B087',139],
  ['B088',102],
  ['B089',105],
  ['B060',52],
  ['B018',122],
  ['B035',113],
  ['B036',116],
  ['B039',110],
  ['B040',112],
  ['B135',111],
  ['B140',126],
  ['B004',115],
  ['B005',124],
  ['B006',125],
  ['B007',116],
  ['B021',117],
  ['B027',116],
  ['B028',119],
  ['B029',120],
  ['B030',117],
  ['B031',122],
  ['B033',122],
  ['B042',124],
  ['B073',114],
  ['B092',120],
  ['B016',115],
  ['B017',95],  
  ['B037',118],
  ['B043',109]
]);

// subject2Select.addEventListener('change', function(){
//   arrowItems.forEach((arrow, index) => {
//     arrow.classList.remove("active");
//     posterItems[index].innerHTML = "Мамандықты таңдау";
//     arrow.src = "img/Vector.svg";
//   });
// });



checkboxQuota.addEventListener('change', function(){
  arrowItems.forEach((arrow, index) => {
    arrow.classList.remove("active");
    posterItems[index].innerHTML = "Мамандықты таңдау";
    arrow.src = "img/Vector.svg";
  });
});

// subject1Select.addEventListener('change', function() {
//     subject2Select.disabled = false;
//     subject2Select.selectedIndex = 0;

//     arrowItems.forEach((arrow, index) => {
//       arrow.classList.remove("active");
//       posterItems[index].innerHTML = "Мамандықты таңдау";
//       arrow.src = "img/Vector.svg";
//     });

//     // Get the selected value of subject1Select
//     const selectedValue = subject1Select.value;
  
//     // Clear previous disabled options in subject2Select
//     subject2Select.querySelectorAll('option').forEach(function(option) {
//       option.disabled = false;
//     });

 
//   switch (selectedValue) {
//     case 'math':

//         subject2Select.querySelectorAll('option').forEach(function(option) {
//             if(option.value !== 'physics' && option.value !== 'geog' && option.value !== 'cs'){
//                 option.disabled = true;
//             } 
//         });
    
//         break;
//     case 'history':
//         subject2Select.querySelectorAll('option').forEach(function(option) {
//             if(option.value !== 'geog' && option.value !== 'rights'){
//                 option.disabled = true;
//             } 
//         });

//         break;

//     case 'biology':
//         subject2Select.querySelectorAll('option').forEach(function(option) {
//             if(option.value !== 'geog'){
//                 option.disabled = true;
//             } 
//         });
    
//         break; 

//     case 'english':
//         subject2Select.querySelectorAll('option').forEach(function(option) {
//             if(option.value !== 'history'){
//                 option.disabled = true;
//             } 
//         });
    
        
//         break;  
//     case 'kazakh':
//         subject2Select.querySelectorAll('option').forEach(function(option) {
//             if(option.value !== 'kazakhlit'){
//                 option.disabled = true;
//             } 
//         });
        
            
//         break;  

//     case 'kr':
//           subject2Select.querySelectorAll('option').forEach(function(option) {
//               if(option.value !== 'krlit'){
//                   option.disabled = true;
//               } 
//           });
          
              
//           break;      
             
        
//     case 'geog':
//         subject2Select.querySelectorAll('option').forEach(function(option) {
//             if(option.value !== 'english'){
//                 option.disabled = true;
//             } 
//         });
            
                
//         break;   
        
//     case 'chemistry':
//         subject2Select.querySelectorAll('option').forEach(function(option) {
//             if(option.value !== 'physics' && option.value !== 'biology'){
//                 option.disabled = true;
//             } 
//         });
                
                    
//         break;  

//     case 'art':
//         subject2Select.querySelectorAll('option').forEach(function(option) {
//           if(option.value !== 'art' ){
//             option.disabled = true;
//         } 
//         });
                    
                        
//         break;      
        
        
//     default:
      
//         subject2Select.querySelectorAll('option').forEach(function(option) {
//             option.disabled = false;
//         });

//       break;
//     }
// });



// modal



posterItems.forEach((poster, index) => {
  poster.addEventListener("click", () => {
    modal2.style.display = 'block';
    fillModalInfo();
    
    ind = index;
  });
});



arrowItems.forEach((arrow, index) => {
  arrow.addEventListener("click", () => {
    

    const isActive = arrow.classList.contains("active");
    if(isActive){
      arrow.classList.remove("active");
      posterItems[index].innerHTML = "Мамандықты таңдау";
      arrow.src = "img/Vector.svg";
      
    }else{
      modal2.style.display = 'block';
      fillModalInfo();
      ind = index;
    }
  });
});

var combiantion = "";
var point = 0; 

openModalBtn.addEventListener("click", () => {

  const pointRange = document.getElementById('myRange');
  var errorTvFild = document.getElementsByClassName('error_message2')[0];
  if(sub1 ==null || sub2 ==null){
    errorTvFild.style.display = 'block';
  }else{
    errorTvFild.style.display = 'none';
    combiantion = `${sub1}-${sub2}`;
    if(checkboxQuota.checked){
      point = Math.ceil(parseInt(pointRange.value) + pointRange.value*0.1);
    }else{
      point = pointRange.value;
    }
    arrowItems.forEach((arrow, index) => {
      arrow.classList.remove("active");
      posterItems[index].innerHTML = "Мамандықты таңдау";
      arrow.src = "img/Vector.svg";
    });
    console.log(point);
    console.log(combiantion);
    modal.style.display = 'block';
  }
  
});

openModalBtn2.addEventListener("click", () => {
  var errorTvFild = document.getElementsByClassName('error_message3')[0];

  let allActive = true;

  arrowItems.forEach(item => {
    if (!item.classList.contains('active')) {
      allActive = false;
      return;
    }
  });
  if(!allActive){
    errorTvFild.style.display = 'block';
  }else{
    errorTvFild.style.display = 'none';
    modal3.style.display = 'block';
  }
  
});

const title = document.querySelector(".modal-text-main");
const text = document.querySelector(".modal_text");
const inner = document.getElementById("inner_img");

openModalBtn3.addEventListener("click", () => {

  title.innerHTML = "Білікті мұғалімдер";
  text.innerHTML = "<p>Біздің оқытушылар өз пәнін өте жақсы меңгерген, ұстаздық тәжірибесі мол жоғары білікті және тәжірибелі мамандар. Біз студенттерге жоғары сапалы білім беру үшін мұғалімдерді мұқият таңдаймыз.Біздің оқытушылар өз саласының мамандары ғана емес, сонымен қатар қарым-қатынасқа ашық және студенттерге кез келген уақытта көмектесуге дайын. Олар материалды барынша тиімді қабылдауды қамтамасыз ету үшін әртүрлі әдістерді қолдана отырып, оқытудың интерактивті тәсілін қолдайды.Сонымен қатар, біздің оқытушылар әр студентке жеке қолдау мен қажетті көмекті алуын үнемі қадағалап отырады. Олар оқу үшін қолайлы жағдай жасауға тырысады және студенттерге өз біліміне сенімдірек сезінуге көмектеседі.Біздің оқытушылар ұжымы таңдаған салаңыз бойынша біліміңізді жетілдіруге көмектесіп қана қоймай, табысқа жету жолында сізге тәлімгер және тәлімгер болады. Мұғалімдеріміздің тәжірибесі мен білімінің арқасында сіз біздің онлайн мектебімізден барынша пайда алып, өз мақсаттарыңызға жете аласыз.</p>";
  inner.src = "img/icon1.svg";
  modal4.style.display = 'block';

});

openModalBtn4.addEventListener("click", () => {
  
  title.innerHTML = "Толық дайындық";
  text.innerHTML = "<p>Біз емтиханға толық, барлық пән бойынша дайындықты ұсынамыз.Сонымен қатар емтиханға дайындық материалдарын, соның ішінде тестілерді, тәжірибелік тапсырмаларды және оқушыларға білімдерін тексеруге және емтиханға дайындалуға көмектесетін басқа материалдарды ұсынамызСонымен қатар, ұстаздарымыз оқушылардың алған білімдерін есте сақтауға және өмірде қолдануға көмектесетін оқытудың түрлі әдістерін пайдаланады. Олар студенттерге теорияны білуге ​​ғана емес, алған білімдерін іс жүзінде қалай қолдану керектігін түсінуге көмектеседі.Сондай-ақ біз студенттерге қосымша көмек пен сұрақтарына жауап алу үшін емтиханға дайындық мәселелері бойынша жеке қолдау мен кеңес береміз. Біз студенттеріміздің емтиханға толық дайындалып, толық дайындығымыздың арқасында жоғары нәтижелерге қол жеткізе алатынына кепілдік береміз.</p>";
  inner.src = "img/icon2.svg";
  modal4.style.display = 'block';
});

openModalBtn5.addEventListener("click", () => {
  title.innerHTML = "Арнайы платформа";
  text.innerHTML = "<p>Біздің онлайн мектебімізде біз оқушылар мен мұғалімдердің қажеттіліктерін ескере отырып жасалған арнайы платформаны қолданамыз. Бұл платформа біздің курстарға, материалдар мен тапсырмаларға ыңғайлы және оңай қол жеткізуді қамтамасыз етеді. Оның көмегімен студенттер оқу материалдарын жылдам және ыңғайлы қарап, мұғалімдермен байланысып, кері байланыс ала алады. Сондай-ақ платформада оқытуды жақсарту үшін бейне оқулықтар, интерактивті тапсырмалар, басқа студенттермен байланысуға арналған форумдар және т.б. сияқты әртүрлі мүмкіндіктер бар. Бұл мүмкіндіктер студенттерге уақытын тиімді пайдалануға және білімдерін жетілдіруге көмектеседі. Платформа сонымен қатар біздің студенттер үшін қауіпсіздік пен құпиялылықтың жоғары деңгейін қамтамасыз етеді. Барлық деректер қауіпсіз серверлерде сақталады және тек авторизацияланған пайдаланушылар студенттер мен олардың үлгерімі туралы ақпаратқа қол жеткізе алады. Біздің арнайы платформа онлайн мектебімізде оқуды барынша ыңғайлы, тиімді және қауіпсіз ететініне сенімдіміз.</p>";
  
  inner.src = "img/icon3.svg";
  modal4.style.display = 'block';
});


closeBtn.onclick = function() {
  modal.style.display = 'none';


}


closeBtn1.onclick = function() {
    modal2.style.display = 'none';
}

closeBtn2.onclick = function() {
  modal3.style.display = 'none';
}
closeBtn3.onclick = function() {
  modal4.style.display = 'none';
} 


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  } else if(event.target == modal2){
    modal2.style.display = 'none';
  } else if(event.target == modal3){
    modal3.style.display = 'none';
  }else if(event.target == modal4){
    modal4.style.display = 'none';
  }
}

againBtn.onclick = function() {
  modal3.style.display = 'none';
  posterItems.forEach((poster,index) => {
    arrowItems[index].classList.remove("active");
    poster.innerHTML = "Мамандықты таңдау";
    arrowItems[index].src = "img/Vector.svg";
  });
}

function fillModalInfo(){
  var cont = document.getElementById('professions');
  var data = mapOfProfession.get(combiantion);
  cont.replaceChildren();

  for(var i = 0; i< data.length;i++){
    var row = `<div class="profession"> <p>${mapOfProfessionName.get(data[i])}</p> </div> <hr>`;

    cont.innerHTML += row;
  }  
  var codeItems = document.querySelectorAll(".code");
  var resItems = document.querySelectorAll(".res");
  professionItems = document.querySelectorAll(".profession");
  professionItems.forEach((profession, index) => {
    profession.addEventListener("click", () => {
      modal2.style.display = 'none';
      const selectedProfession = profession.innerHTML;
      const selectedPoster = posterItems[ind];
      const selectedPoster2 = resultItems[ind];
      const selectedCode = codeItems[ind];
      const selectedRes = resItems[ind];
      selectedCode.innerHTML = `Код: ${data[index]}`;
      var persent = Math.ceil(point*100/mapOfProfessionPoint.get(data[index]));
      console.log(persent);
      if( persent >= 100){
        selectedRes.innerHTML = `100%`;
      }else if(point < 65){ғл
        selectedRes.innerHTML = `0%`;
      }else{
        selectedRes.innerHTML = `${persent}%`;
      }
      
      selectedPoster2.innerHTML = selectedProfession;
      selectedPoster.innerHTML = selectedProfession;
      arrowItems[ind].src = 'img/Vector2.svg';
      arrowItems[ind].classList.add("active");
    });
  });
}





const carousel = document.querySelector(".slider__carousel");

let isDragStart = false, prevPageX, prevScrollLeft;

const dragStart = (e) => {
  isDragStart = true;
  prevPageX = e.type === "touchstart" ? e.touches[0].pageX : e.pageX;
  prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
  if (!isDragStart) return;
  e.preventDefault();
  let positionDiff = (e.type === "touchmove" ? e.touches[0].pageX : e.pageX) - prevPageX;
  carousel.scrollLeft = prevScrollLeft - positionDiff;
}

const dragStop = () => {
  isDragStart = false;
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);

carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);

carousel.addEventListener("mouseup", dragStop);
carousel.addEventListener("touchend", dragStop);

var phoneInputs = document.getElementsByClassName('telephone');

for (var i = 0; i < phoneInputs.length; i++) {
  Inputmask({
    mask: '+7 (999) 999-99-99',
    placeholder: '_',
    oncomplete: function() {
      var phoneNumberWithCode = this.value.replace(/[^0-9]/g, '');
      var phoneNumber = phoneNumberWithCode.slice(1);
      console.log(phoneNumber);
    }
  }).mask(phoneInputs[i]);
}


// Получение значений из полей ввода

var submitLession = document.getElementsByClassName('panel-btn btn yellow')[0];
var submitQuestion = document.getElementsByClassName('panel-btn btn yellow')[1];

// Создание объекта данных для отправки

submitLession.onclick = function() {
  const input1Value = document.getElementById('input1').value;
  const input2Value = document.getElementById('input2').value;
  var phoneNumberWithCode = input2Value.replace(/[^0-9]/g, '');
  var phoneNumber = phoneNumberWithCode.slice(1);

  console.log(phoneNumber);
  const data = {
    fullName: input1Value,
    number: phoneNumber,
    typeOfRequest: "LESSON"
  };

  axios.post('https://api.bilim-lab.kz/request/create', data)
  .then(response => {
    // Обработка успешного ответа
    if(response.status == 200){
      showNotification();
      var errorTvFild = document.getElementsByClassName('error_message')[0];
      errorTvFild.style.display = 'none';
    }
    console.log(response.data);
    console.log(response.status);
  })
  .catch(error => {
    var errorTvFild = document.getElementsByClassName('error_message')[0];
    // Обработка ошибок
    const fieldErrors = error.response.data.fieldErrors;
    if(fieldErrors.number){
      errorTvFild.innerHTML = fieldErrors.number;
      errorTvFild.style.display = 'block';
      console.log(fieldErrors.number);
    }else if(fieldErrors.fullName){
      errorTvFild.innerHTML = fieldErrors.fullName;
      errorTvFild.style.display = 'block';
      console.log(fieldErrors.fullName);
    }
    
    console.error(error);
  });
  console.log(data);
}


submitQuestion.onclick = function() {
  const input1Value = document.getElementById('input3').value;
  const input2Value = document.getElementById('input4').value;
  var phoneNumberWithCode = input2Value.replace(/[^0-9]/g, '');
  var phoneNumber = phoneNumberWithCode.slice(1);

  console.log(phoneNumber);
  const data = {
    fullName: input1Value,
    number: phoneNumber,
    typeOfRequest: "ANSWER"
  };

  axios.post('https://api.bilim-lab.kz/request/create', data)
  .then(response => {
    // Обработка успешного ответа
    if(response.status == 200){
      showNotification2();
      var errorTvFild = document.getElementsByClassName('error_message1')[0];
      errorTvFild.style.display = 'none';
    }
    console.log(response.data);
    console.log(response.status);
  })
  .catch(error => {
    var errorTvFild = document.getElementsByClassName('error_message1')[0];
    // Обработка ошибок
    const fieldErrors = error.response.data.fieldErrors;
    if(fieldErrors.number){
      errorTvFild.innerHTML = fieldErrors.number;
      errorTvFild.style.display = 'block';
      console.log(fieldErrors.number);
    }else if(fieldErrors.fullName){
      errorTvFild.innerHTML = fieldErrors.fullName;
      errorTvFild.style.display = 'block';
      console.log(fieldErrors.fullName);
    }
    
    console.error(error);
  });
  console.log(data);
}

const notificationBox = document.getElementsByClassName('notification_box')[0];
const notificationBox2 = document.getElementsByClassName('notification_box')[1];
const closeIcon = document.getElementsByClassName('bx-x')[0];
const closeIcon2 = document.getElementsByClassName('bx-x')[1];

function showNotification() {
    notificationBox.style.display = 'flex'; 
    notificationBox.style.right = '0';
    setTimeout(hideNotification, 5000); 
}

function hideNotification() {
    notificationBox.style.right = '-500px'; 
}

function showNotification2() {
  notificationBox2.style.display = 'flex'; 
  notificationBox2.style.right = '0';
  setTimeout(hideNotification2, 5000); 
}

function hideNotification2() {
  notificationBox2.style.right = '-500px'; 
}

closeIcon.addEventListener('click', hideNotification);
closeIcon2.addEventListener('click', hideNotification);

function navigateToDiv(divId) {
 console.log(divId);
}

