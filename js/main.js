

var onLoadWindow = function(){
    if(document.readyState === 'complete'){
       
        Array.prototype.forEach.call(document.querySelectorAll(".onload"), function(e){
            e.classList.add('smoke');
           });
    
        document.getElementsByClassName('main_logo')[0].classList.add("pullDown");
        
        document.getElementsByClassName('test')[0].classList.add("fall");
        document.getElementsByClassName('test')[1].classList.add("fall");
        document.getElementsByClassName('test2')[0].classList.add("fall2");
        document.getElementsByClassName('test3')[0].classList.add("fall3");
         document.getElementsByClassName('test4')[0].classList.add("fall4");
    
        document.getElementsByClassName('glitch')[0].classList.add("slide");
           
    
       setTimeout(function(){
        document.getElementsByClassName('pullDown')[0].classList.add("active");
    }, 2000);
    
    setTimeout(function(){
        document.getElementsByClassName('onload')[0].classList.add("active");
        document.getElementsByClassName('onload')[1].classList.add("active");
    }, 2500);


const animItems = document.querySelectorAll('.anim-items');
const animItemsWrap = document.querySelectorAll('.anim-items-wrap');

const animItemsFooter = document.querySelectorAll('.anim-items-footer');
const animItemsWrapFooter = document.querySelectorAll('.anim-items-wrap-footer');


 if ((animItems.length > 0) && (animItemsWrap.length > 0))
 {
     window.addEventListener('scroll',animOnScroll);
     function animOnScroll()
     {

        for (let indexWrap =0 ; indexWrap < animItemsWrap.length; indexWrap++)
        {
            for (let index = 0; index <animItems.length; index++)
            {
                const animItem = animItems[index];
                const animItemWrap = animItemsWrap[indexWrap];
                const animItemHeight = animItem.offsetHeight;
                const animItemOffset = offset(animItem).top;
                const animStart = 8;
    
                let animItemPoint = window.innerHeight - animItemHeight / animStart;
    
                if (animItemHeight > window.innerHeight) {
                    animItemPoint = window.innerHeight - window.innerHeight / animStart;
                }
    
                if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight ))
                {
                    animItemWrap.classList.add('animation-appear');
                    animItem.classList.add('animation-appear-slow');
                } else {
                   /*animItemWrap.classList.remove('animation-appear');
                   animItem.classList.remove('animation-appear-slow');*/
                }
            }
        }

        for (let indexWrapFooter =0 ; indexWrapFooter < animItemsWrapFooter.length; indexWrapFooter++)
        {
            for (let indexFooter = 0; indexFooter <animItemsFooter.length; indexFooter++)
            {
                const animItemFooter = animItemsFooter[indexFooter];
                const animItemWrapFooter = animItemsWrapFooter[indexWrapFooter];
                const animItemHeight = animItemWrapFooter.offsetHeight;
                const animItemOffset = offset(animItemWrapFooter).top;
                const animStart = 8;
    
                let animItemPoint = window.innerHeight - animItemHeight / animStart;
    
                if (animItemHeight > window.innerHeight) {
                    animItemPoint = window.innerHeight - window.innerHeight / animStart;
                }
    
                if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight ))
                {
                    animItemWrapFooter.classList.add('animation-appear');
                    animItemFooter.classList.add('animation-appear-right-slow');
                } else {
                   animItemWrapFooter.classList.remove('animation-appear');
                   animItemFooter.classList.remove('animation-appear-right-slow');
                }
            }
        }
    }
     function offset(el){
         const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
     }

     animOnScroll();

 }


    if (window.location.pathname.indexOf('en') == -1)
    {
        document.getElementsByClassName('lang-ru')[0].classList.add("selected");
    }
    else
    {
        document.getElementsByClassName('lang-en')[0].classList.add("selected");
    }


    }
 };

 window.addEventListener("load", onLoadWindow);

 