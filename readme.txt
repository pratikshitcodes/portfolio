new things that i learnt 
1.for smooth scroll we use html {
  scroll-behavior:smooth;
}
2.Now jab we were scrolling then we used section {
  scroll-margin-top: 78px;
}
means that when a section element is scrolled into view, the browser will stop scrolling 78px before the element’s top edge.
As our navbar was sticky so our navbar should not cover the heading of different sections

(3).nav-links a.active::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -6px;
  width: 45px;
  height: 2.5px;
  background-color: cyan;
  border-radius: 20px;
}
a.active ->a is the element and active is the class name which is added when we click on on eof the options like home project about(jis pe bhi click karoge uspar .active class add hogi acc to js logic)
::after adds a fake(pseudo)element and it adds it in the <a> tag wala element.
then content:""; it very important it means there will be no text it will have just shape.
And also the cyan underline should be below the <a> element toh us tag ke andar rhe toh make 
.nav-links a {
  position: relative;
}
and then a.active::after wale ko position:absolute

4.100vh means full screen
5.background: radial-gradient(circle at 30% 30%, #ffffff, #00ffff, #111);
radial-gradient(...)
Generates a gradient that radiates outward from a central point.
then we tell the shape-> Gradient ka shape circle hoga.
at 30% 30%

Gradient ka center exact middle me nahi hoga.
Center hoga:

30% from left
30% from top
if 70% 70% then bottom-right 
0-50% top-left and 50-100% bottom right

6.if list-style:none means list jab bhi aati ha toh bullets ke sath aati ha so to remove use this.
7.text-decoration:none means jab aap link banate ho toh blue link jaise aa jata ha so to remove it we use text-decoration
.resume-container{
    display: grid;
    grid-template-columns: repeat(2,465px);
    column-gap: 160px;
    transform: translate(60px);
}
.resume-heading{
    transform: translateY(20px);
    font-size: 36px;
    font-family: "Poppins", sans-serif;
    color:#00e1e1;
    font-weight: 600;
}
.exp,.edu{
    font-size: 22px;
    font-family: "Poppins", sans-serif;
    color:#00e1e1;
    margin: 0;
}
.project-overview-1 p,.project-overview-2 p,.project-overview-3 p{
    width:400px;
}
.project-overview-1 h1,.project-overview-2 h1,.project-overview-3 h1,.clg h1,.grade-12 h1,.grade-10 h1{
    font-size: 20px;
    font-weight: 600;
    font-family: "Poppins", sans-serif;
    color:white;
}
.content{
    color:rgb(211, 211, 211);
    line-height: 1.4;
    font-size: 14px;
    font-family: "Poppins", sans-serif;
    margin-top:2px ;
    margin-bottom: 0px;
}
.year{
    color: #747474;
    font-size: 16px;
    font-family: "Poppins", sans-serif;
}