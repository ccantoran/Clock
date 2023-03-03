

//AM PM toggle
function dayChange(){
    var checkBox = document.getElementById('checkbox')
    if(checkBox.checked){
       document.getElementById('userAmPm').innerText = 'PM'
    }else{
       document.getElementById('userAmPm').innerText = 'AM'
    }
}


//User Hour
function getTimeHour(hr){
    if(hr.toString().length == 1){
        document.getElementById('userHour').innerText = `0${hr}`
    }else{
        document.getElementById('userHour').innerText = `${hr}`
    }

    //Min clock appears 
    document.querySelector('.clockMin').style.display = "flex"
    document.querySelector('.test1').style.display = "none"
}

//User Minute 
function getTimeMin(min){
    if(min.toString().length == 1){
        document.getElementById('userMin').innerText = `0${min}`
    }else{
        document.getElementById('userMin').innerText = `${min}`
    }

    //Hour Clock appears
    document.querySelector('.test1').style.display = "flex"
    document.querySelector('.clockMin').style.display = "none"
}


//Data Str 
function timeStr(){
    let strHr = document.getElementById('userHour').innerText 
    let strMin = document.getElementById('userMin').innerText
    var amOrPm = document.getElementById('userAmPm').innerText
    
    if(amOrPm.includes('PM')){
        strHr = parseInt(strHr) + 12
    }

    console.log(`datastr for hour will be ${strHr}:${strMin}`)
}


