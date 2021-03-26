var cart=document.getElementById('cart');

var icon0=document.getElementById('icon0');
var text0=document.getElementById('text0');
var tab0=document.getElementById('tab0');



var icon1=document.getElementById('icon1');
var text1=document.getElementById('text1');
var tab1=document.getElementById('tab1');





var icon2=document.getElementById('icon2');
var text2=document.getElementById('text2');
var tab2=document.getElementById('tab2');

var icon3=document.getElementById('icon3');
var text3=document.getElementById('text3');
var tab3=document.getElementById('tab3');

var icon4=document.getElementById('icon4');
var text4=document.getElementById('text4');
var tab4=document.getElementById('tab4');

var icon5=document.getElementById('icon5');
var text5=document.getElementById('text5');
var tab5=document.getElementById('tab5');


var toggle2=document.getElementById('toggle2');





var next0=document.getElementById('next0');
var next1=document.getElementById('next1');

tab1.addEventListener('click',()=>{
    tab1.classList.remove('tab-link-active');
    tab2.classList.remove('tab-link-active');
    tab3.classList.remove('tab-link-active');
    tab4.classList.remove('tab-link-active');
    tab5.classList.remove('tab-link-active');
    tab1.classList.add('tab-link-active');
    
});

tab2.addEventListener('click',()=>{
    tab1.classList.remove('tab-link-active');
    tab2.classList.remove('tab-link-active');
    tab3.classList.remove('tab-link-active');
    tab4.classList.remove('tab-link-active');
    tab5.classList.remove('tab-link-active');
    tab2.classList.add('tab-link-active');
    
});


tab3.addEventListener('click',()=>{
    tab1.classList.remove('tab-link-active');
    tab2.classList.remove('tab-link-active');
    tab3.classList.remove('tab-link-active');
    tab4.classList.remove('tab-link-active');
    tab5.classList.remove('tab-link-active');
    tab3.classList.add('tab-link-active');


    
    
});

tab4.addEventListener('click',()=>{
    tab1.classList.remove('tab-link-active');
    tab2.classList.remove('tab-link-active');
    tab3.classList.remove('tab-link-active');
    tab4.classList.remove('tab-link-active');
    tab5.classList.remove('tab-link-active');
    tab4.classList.add('tab-link-active');
    
});

tab5.addEventListener('click',()=>{
    tab1.classList.remove('tab-link-active');
    tab2.classList.remove('tab-link-active');
    tab3.classList.remove('tab-link-active');
    tab4.classList.remove('tab-link-active');
    tab5.classList.remove('tab-link-active');
    tab5.classList.add('tab-link-active');
    
});


next0.addEventListener('click',()=>{
    update0();
    tab0.classList.remove('tab-link-active');
    tab1.click();
    tab1.classList.add('tab-link-active')
}     
);

next1.addEventListener('click',()=>{
    update1();
    tab1.classList.remove('tab-link-active');
    tab2.click();
    tab2.classList.add('tab-link-active')
}     
);


next2.addEventListener('click',()=>{
    update2();
    tab2.classList.remove('tab-link-active');
    
    tab3.classList.add('tab-link-active');
    tab3.click();
}     
);

next3.addEventListener('click',()=>{
    update3();
    tab3.classList.remove('tab-link-active');
    
    tab4.classList.add('tab-link-active');
    tab4.click();
    
    cart.style.transform="scale(1)";
    
    
    
    
}     
);

next4.addEventListener('click',()=>{
    update4();
    tab4.classList.remove('tab-link-active');
    
    tab5.classList.add('tab-link-active');
    tab5.click();
}     
);






function update0(){
    icon0.classList.remove('fa-dot-circle');
    icon0.classList.add('fa-check-circle');
    icon0.style.color="rgb(34, 68, 95);";
    text0.style.color="rgb(34, 68, 95);";
    tab0.style.zIndex="10";
}


function update1(){
    icon1.classList.remove('fa-dot-circle');
    icon1.classList.add('fa-check-circle');
    icon1.style.color="rgb(34, 68, 95);";
    text1.style.color="rgb(34, 68, 95);";
    tab1.style.zIndex="10";
}


function update2(){
    icon2.classList.remove('fa-dot-circle');
    icon2.classList.add('fa-check-circle');
    icon2.style.color="rgb(34, 68, 95);";
    text2.style.color="rgb(34, 68, 95);";
    tab2.style.zIndex="10";
}


 function update3(){
    icon3.classList.remove('fa-dot-circle');
    icon3.classList.add('fa-check-circle');
    icon3.style.color="rgb(34, 68, 95);";
    text3.style.color="rgb(34, 68, 95);";
    tab3.style.zIndex="10";
}

 function update4(){
    icon4.classList.remove('fa-dot-circle');
    icon4.classList.add('fa-check-circle');
    icon4.style.color="rgb(34, 68, 95);";
    text4.style.color="rgb(34, 68, 95);";
    tab4.style.zIndex="10";
 } 












 function selectAll(){  
    var ele=document.getElementsByName('brand');  
    for(var i=0; i<ele.length; i++){  
        if(ele[i].type=='checkbox')  
            ele[i].checked=true;  
    }  
}  

function deselectAll(){  
    var ele=document.getElementsByName('brand');  
    for(var i=0; i<ele.length; i++){  
        if(ele[i].type=='checkbox')  
            ele[i].checked=false;  
          
    }  
}

function selectToggler(){
    if(selectAllBrand==0){
        selectAll();
        selectAllBrand=1;
    }
    else{
        deselectAll();
        selectAllBrand=0;
    }
}


// var form4 = document.getElementById('form4');
// var reset4=document.getElementById('reset4');

// reset4.addEventListener('click',()=>form4.reset());