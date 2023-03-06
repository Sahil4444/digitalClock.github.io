setInterval(()=>{
    let cDate = new Date();

    let day = document.getElementById('day');
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    let date = document.getElementById('date');
    var dd = String(cDate.getDate()).padStart(2, '0');
    var mm = String(cDate.getMonth() + 1).padStart(2, '0'); 
    var yyyy = cDate.getFullYear();

    let hour = document.getElementById('hrs');

    let minutes = document.getElementById('min');

    let sec = document.getElementById('sec');
    
    day.innerText = days[cDate.getDay()];
    date.innerText = dd + '-' + mm + '-' + yyyy;
    hour.innerText = cDate.getHours();
    minutes.innerText = cDate.getMinutes();
    sec.innerText = cDate.getSeconds();
    
    if (sec.innerText <=9){
        sec.innerText = "0" + sec.innerText
    }

}, 1000)