function thisWatch() 
{
    fecha=new Date(); 
    hour=fecha.getHours(); 
    minutes=fecha.getMinutes(); 
    seconds=fecha.getSeconds(); 
    
    if (hour<10) 
    {
        hour="0"+hour;
    }

    if (minutes<10) 
    {
        minutes="0"+minutes;
    }

    if (seconds<10) 
    { 
        seconds="0"+seconds;
    }
    
    
    justAwatch = hour+" : "+minutes+" : "+seconds;	
    return justAwatch; 
}

function getTime() 
{ 
    watch=thisWatch(); 
    justAwatch=document.getElementById("watch"); 
    justAwatch.innerHTML=watch; 
}
     setInterval(getTime,1000);