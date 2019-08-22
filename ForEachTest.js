let days = ['mon','tue','wed','thu']

days.forEach(function(day,index,arr){ // function without name is a call back function
                                      // in this case of an array there are 3 params
    console.log('Days : '+day+' '+index+ ' '+arr);
});

for(i=0;i<days.length;i++){
    console.log(days[i]);
}