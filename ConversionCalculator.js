function calc(value,fromUnit,toUnit){
    var km=fromUnit;
    var m =toUnit;
    var input=value
    if(km=='kilogram' && m=='gram'){
        let res;
        res=value*1000;
        res=`Output: ${input} ${km} = ${res} ${m}`;
        console.log(res);
    }
    else if(km=='kilometer',m=='meter'){

        let res;
        res=value*1000;
        res=`Output: ${input} ${km} = ${res} ${m}`;
        console.log(res);
    }
    else if(km=='degreeCelcius',m=='farenheit'){

        let res;
        res=((input * (9/5)) + 32);
        res=`Output: ${input} ${km} = ${res} ${m}`;
        console.log(res);
    }
    else if(km=='foot',m=='inch'){

        let res;
        res=value*12;
        res=`Output: ${input} ${km} = ${res} ${m}`;
        console.log(res);
    }

}
calc(120,'degreeCelcius','farenheit')
calc(120,'kilometer','meter')
calc(120,'foot','inch')
calc(120,'kilogram','gram')