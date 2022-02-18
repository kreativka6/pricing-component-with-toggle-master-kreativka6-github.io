var input = document.getElementById("monthly");
var input1 = document.getElementById("monthly1");
var input2 = document.getElementById("monthly2");
var check = document.getElementById("checkbox");


function toogleTheme(check){
    if(check.checked === true){
        input.innerHTML = (`&dollar;<span>19.99</span>`);
        input1.innerHTML = (`&dollar;<span>24.99</span>`);
        input2.innerHTML = (`&dollar;<span>39.99</span>`);
    } else {
        if(check.checked === false){
        input.innerHTML = (`&dollar;<span>199.99</span>`);
        input1.innerHTML = (`&dollar;<span>249.99</span>`);
        input2.innerHTML = (`&dollar;<span>399.99</span>`);
      }
    }
}
