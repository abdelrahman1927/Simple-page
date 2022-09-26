//Q1
var q1=Number( prompt('Q1: Enter Number'));
alert('Q1: Number is '+q1);


//Q2
var q2=Number( prompt('Q2: Enter Number'));
if(q2 % 3 == 0 && q2 % 4 == 0){
    alert('Q2: Yes');
}
else{
    alert('Q2: No');
}


//Q3
var q3num1=Number( prompt('Q3: Enter First Number'));
var q3num2=Number( prompt('Q3: Enter Second Number'));
if(q3num1>q3num2){
    alert(`Q3: The biggest number is ${q3num1}`);
}
else if(q3num2>q3num1){
    alert(`Q3: The biggest number is ${q3num2}`);
}
else{
    alert(`Q3: The first number ${q3num1} is equal to the second number ${q3num2}`);
}


//Q4
var q4num1=Number( prompt('Q4: Enter Number'));
if(q4num1<0){
    alert('Q4: negative');
}
else if(q4num1>0){
    alert('Q4: positive');
}
else{
    alert(`Q4: You enterd ${q4num1}`);
}


//Q5
var q5num1=Number( prompt('Q5: Enter First Number'));
var q5num2=Number( prompt('Q5: Enter second Number'));
var q5num3=Number( prompt('Q5: Enter Third Number'));
if(q5num1>q5num2 && q5num1>q5num3){
    if(q5num2>q5num3){
        alert(`Q5:    Max number = ${q5num1}   Min Number = ${q5num3}`);
    }
    else{
        alert(`Q5:    Max number = ${q5num1}   Min Number = ${q5num2}`);
    }
}
else if(q5num2>q5num1 && q5num2>q5num3){
    if(q5num1>q5num3){
        alert(`Q5     Max number = ${q5num2}   Min Number = ${q5num3}`);
    }
    else{
        alert(`Q5:    Max number = ${q5num2}   Min Number = ${q5num1}`);
    }
}
else{
    if(q5num1>q5num2){
        alert(`Q5:    Max number = ${q5num3}   Min Number = ${q5num2}`);
    }
    else{
        alert(`Q5:    Max number = ${q5num3}   Min Number = ${q5num1}`);
    }
}



//Q6
var q6num1=Number( prompt('Q6: Enter Integer Number'));
if(q6num1 % 2 ==0){
    alert(`Q6:  even`);
}
else{
    alert(`Q6:  odd`);
}



//Q7
var q7str1= prompt('Q7: Enter character:');
if( q7str1=="a" ||  q7str1=="i" ||  q7str1=="o" ||  q7str1=="e" ||  q7str1=="u" || q7str1=="A" ||  q7str1=="I" ||  q7str1=="O" ||  q7str1=="E" ||  q7str1=="U"){
    alert("Q7:  Vowl");
}
else{
    alert("Q7:  Consonant");
}



//Q8
var q8num1=Number( prompt('Q8: Enter Integer Number'));
var q8numbers='1, ';
for (i=2; i<=q8num1; i++) {
   q8numbers+= `${i}, `;
    
}
alert('Q8: '+q8numbers);


//Q9
var q9num1=Number( prompt('Q9: Enter Integer Number'));
var q9table=`${q9num1} `;
for (i=2; i<=12; i++) {
    var CALC= i * q9num1 ;
    q9table+=`${CALC} `;
}
alert(`Q9:- ${q9table}`);


//Q10
var q10num1=Number( prompt('Q10: Enter Integer Number'));
if(q10num1>=2){
    var q10out=' '
    for(i=2; i<=q10num1; i+=2)
     q10out+= `${i} `;
}
else{
    var q10out=`there are no positive integer even numbers`
}
alert(q10out);


//Q11
var q11num1=Number( prompt('Q11: Enter Integer Number'));
var q11num2=Number( prompt('Q11: Enter the power'));
var q11out=1;
for(i=1; i<=q11num2;i++){
    q11out=q11out*q11num1;
}
alert(q11out);


//Q12
var q12num1=Number( prompt('Q12: Enter 1st subject: '));
var q12num2=Number( prompt('Q12: Enter 2nd subject: '));
var q12num3=Number( prompt('Q12: Enter 3rd subject: '));
var q12num4=Number( prompt('Q12: Enter 4th subject: '));
var q12num5=Number( prompt('Q12: Enter 5th subject: '));
var q12total=q12num1+q12num2+q12num3+q12num4+q12num5;
var q12average=q12total/5;
var q12percentage=(q12total/500)*100;
alert(`
Total marks= ${q12total}
Average Marks= ${q12average}
Percentage= ${q12percentage}`);


//Q13
var q13num1=Number( prompt('Q13: Enter month number: '));
if(q13num1==1 || q13num1==3 || q13num1==5 || q13num1==7 || q13num1==8 || q13num1==10 || q13num1==12){
    alert("Days in Month: 31");
}
else if(q13num1==2){
    alert("Days in Month: 28");
}
else if (q13num1==4 || q13num1==6 || q13num1==9 || q13num1==11){
    alert("Days in Month: 30");
}
else{
    alert('there are no month with this number');
}


//Q14
var q14num1=Number( prompt('Q14: Enter Physics degree: '));
var q14num2=Number( prompt('Q14: Enter Chemistry degree: '));
var q14num3=Number( prompt('Q14: Enter Biology degree: '));
var q14num4=Number( prompt('Q14: Enter Mathematics degree: '));
var q14num5=Number( prompt('Q14: Enter Computer degree: '));
var q14total=q14num1+q14num2+q14num3+q14num4+q14num5;
var q14average=q14total/5;
var q14percentage=(q14total/500)*100;
if(q14percentage<40){
    alert("Grad F");
}
else if(q14percentage>=40 && q14percentage<60){
    alert("Grad E");
}
else if(q14percentage>=60 && q14percentage<70){
    alert("Grad D");
}
else if(q14percentage>=70 && q14percentage<80){
    alert("Grad C");
}
else if(q14percentage>=80 && q14percentage<90){
    alert("Grad B")
}
else if(q14percentage>=90 && q14percentage<=100){
    alert("Grad A")
}


//Q15
var q15num1=Number( prompt('Q15: Enter month number: '));
switch (q15num1) {
    case 1:
        alert("Days in Month: 31")
        break;
    case 2:
        alert("Days in Month: 28");
        break;
    case 3:
        alert("Days in Month: 31");
        break;
    case 4:
        alert("Days in Month: 30");
        break;
    case 5:
        alert("Days in Month: 31");
        break;
    case 6:
        alert("Days in Month: 30");
        break;
    case 7:
        alert("Days in Month: 31");
        break;
    case 8:
        alert("Days in Month: 31");
        break;
    case 9:
        alert("Days in Month: 30");
        break;
    case 10:
        alert("Days in Month: 31");
        break;
    case 11:
        alert("Days in Month: 30");
        break;
    case 12:
        alert("Days in Month: 31");
        break;
    default:
        alert('there are no month with this number')
        break;
}


//Q16
var q16str1=prompt('Q16:  Enter  an alphabet: ');
switch (q16str1) {
    case 'a':
        alert("Q16:  Vowl");
        break;
    case 'e':
        alert("Q16:  Vowl");
        break;
    case 'i':
        alert("Q16:  Vowl");
        break;
    case 'o':
        alert("Q16:  Vowl");
        break;
    case 'u':
        alert("Q16:  Vowl");
        break;
    case 'A':
        alert("Q16:  Vowl");
        break;
    case 'E':
        alert("Q16:  Vowl");
        break;
    case 'I':
        alert("Q16:  Vowl");
        break;
    case 'O':
        alert("Q16:  Vowl");
        break;
    case 'U':
        alert("Q16:  Vowl");
        break;
    default:
        alert("Q16:  consonant");
        break;
}


//Q17
var q17num1=Number( prompt('Q17:  Enter 1st number: ') );
var q17num2=Number( prompt('Q17:  Enter 1st number: ') );
switch (q17num1>q17num2) {
    case true:
        alert(`first number ${q17num1} is the biggest`);
        break;

    default:
        alert(`second number ${q17num2} is the biggest`);
        break;
}



//Q18
var q18num1=Number( prompt('Q18:  Enter integer number: ') );
switch (q18num1 % 2 == 0) {
    case true:
        alert("even");
        break;

    default:
        alert('odd');
        break;
}


//Q19
var q19num1=Number( prompt('Q19:  Enter integer number: ') );
switch (q19num1> 0) {
    case true:
        alert("positive");
        break;
}
switch (q19num1< 0) {
    case true:
        alert("negative");
        break;
}
switch (q19num1== 0) {
    case true:
        alert("zero");
        break;
}


//Q20
var q20num1=Number( prompt('Q20:  Enter 1 for Addition & 2 for Subtraction & 3 for Multiplication & 4 for Division:') );
var q20x=Number( prompt("Q20: enter X number: "));
var q20y=Number( prompt("Q20: enter Y number: "));
switch (q20num1) {
    case 1:
        var q20add=q20x + q20y;
        alert(`X + Y = ${q20add}`);
        break;
    case 2:
        var q20sup=q20x-q20y;
        alert(`X - Y = ${q20sup}`);
        break;
    case 3:
        var q20mul=q20x * q20y;
        alert(`X * Y = ${q20mul}`);
        break;
    case 4:
        var q20div=q20x/q20y;
        alert(`X / Y = ${q20div}`);
        break;
    default:
        alert('you must chose number between 1 and 4');
        break;
}

