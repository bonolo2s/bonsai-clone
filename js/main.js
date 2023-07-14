const menuIcon = document.querySelector('#menu-outline');

menuIcon.addEventListener('click', function(){
    
    const navAccordion = document.querySelector('.nav-accordion');
    console.log(navAccordion)
    navAccordion.classList.toggle('nav-accordion-alt');
    //i want this code to toggle between the styles
   

})
//navbar accordion
const navLable = document.querySelectorAll('.nav-lable')
for(let i=0;i<navLable.length;i++){
    navLable[i].addEventListener('click',function(){
        console.log("bonolo")
        const navContent = document.querySelectorAll('.nav-content')
        navContent[i].classList.toggle('nav-content-alt')
    })
}
//linking pages

//toggling between pricing displays
const monthlyBtn = document.querySelector('#montly')
const yearlyBtn = document.querySelector('#yearly')

yearlyBtn.addEventListener('click',function(){
    const yearlyPrc = document.querySelector('.yearly-pricing')
    const monthlyPrc = document.querySelector('.monthly-pricing')
    yearlyPrc.style.display='flex'
    yearlyBtn.style.backgroundColor='green'
    monthlyPrc.style.display='none'
    monthlyBtn.style.backgroundColor='white'
    
})
monthlyBtn.addEventListener('click',function(){
    const yearlyPrc = document.querySelector('.yearly-pricing')
    const monthlyPrc = document.querySelector('.monthly-pricing')
    monthlyPrc.style.display='flex'
    monthlyBtn.style.backgroundColor='green'
    yearlyPrc.style.display='none'
    yearlyBtn.style.backgroundColor='white'
    
})

//FAQs accordion
const faqsLable = document.querySelectorAll('.FAQs-label')
for(let u=0 ;u<faqsLable.length;u++){
    
    faqsLable[u].addEventListener('click',function(){
        const faqsContent = document.querySelectorAll('.FAQS-content')
        faqsContent[u].classList.toggle('FAQS-content-alt')
    })
}


//hovering the links

const navLinks = document.querySelectorAll('.nav-links')
const products = document.querySelector('.products')
const industries = document.querySelector('.industries')
const template = document.querySelector('.template')
const resources = document.querySelector('.resources')

navLinks[0].addEventListener('mouseover',function(){
    products.style.display = 'flex';
    industries.style.display= 'none';
    template.style.display= 'none';
    resources.style.display= 'none';
    document.addEventListener('click',function(){
        products.style.display = 'none';
        industries.style.display= 'none';
        template.style.display= 'none';
        resources.style.display= 'none';
    })
})


navLinks[1].addEventListener('mouseover',function(){
    industries.style.display = 'flex';
    products.style.display= 'none';
    template.style.display= 'none';
    resources.style.display= 'none';
    document.addEventListener('click',function(){
        products.style.display = 'none';
        industries.style.display= 'none';
        template.style.display= 'none';
        resources.style.display= 'none';
    })
})


navLinks[2].addEventListener('mouseover',function(){
    template.style.display = 'flex';
    products.style.display = 'none';
    industries.style.display= 'none';
    resources.style.display= 'none';
    document.addEventListener('click',function(){
        products.style.display = 'none';
        industries.style.display= 'none';
        template.style.display= 'none';
        resources.style.display= 'none';
    })
})

navLinks[3].addEventListener('mouseover',function(){
    products.style.display = 'none';
    industries.style.display= 'none';
    template.style.display= 'none';
    resources.style.display= 'none';}
)

navLinks[4].addEventListener('mouseover',function(){
    resources.style.display = 'flex';
    products.style.display = 'none';
    industries.style.display= 'none';
    template.style.display= 'none';
    document.addEventListener('click',function(){
        products.style.display = 'none';
        industries.style.display= 'none';
        template.style.display= 'none';
        resources.style.display= 'none';}
    )
})

navLinks[5].addEventListener('mouseover',function(){
    products.style.display = 'none';
    industries.style.display= 'none';
    template.style.display= 'none';
    resources.style.display= 'none';
})
   




//footer links accordion
const ftrLable = document.querySelectorAll('.ftr-label')
for(let y=0; y<ftrLable.length;y++){
    
    ftrLable[y].addEventListener('click',function(){
        console.log("wa poppy")
        const ftrContent = document.querySelectorAll('.ftr-content')
        ftrContent[y].classList.toggle('ftr-content-alt')
    })
}

//forms
const loginBtn = document.querySelector('#Log-in')
loginBtn.addEventListener('click',function(){
    window.open("login.html");
})

const startBtn = document.querySelectorAll('.start')
startBtn.forEach(element => {
    element.addEventListener('click',function(){
        window.open("sign-up.html");
    });
});

