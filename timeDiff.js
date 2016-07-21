//solution 1
var startDate = new Date();
var startDateMsec = startDate.getTime();

var endDate = new Date();
var endDateMsec = endDate.getTime();


var intervalP = endDateMsec - startDateMsec;


function dhm(t){
    var cd = 24 * 60 * 60 * 1000,
        ch = 60 * 60 * 1000,
        d = Math.floor(t / cd),
        h = '0' + Math.floor( (t - d * cd) / ch),
        m = '0' + Math.round( (t - d * cd - h * ch) / 60000);
    return [d, h.substr(-2), m.substr(-2)].join(':');
}

//Example
var delay = intervalP;                   
var fullTime = dhm(delay);
console.log(fullTime);

//salida 0:00:03 d:hh:mm





//solution 2 
var startDate = new Date();
var startDateMsec = startDate.getTime();

var endDate = new Date();
var endDateMsec = endDate.getTime();


// asignar el valor de las unidades en milisegundos
var msecPerMinute = 1000 * 60;
var msecPerHour = msecPerMinute * 60;
var msecPerDay = msecPerHour * 24;

// Obtener la diferencia en milisegundos
var interval = endDateMsec - startDateMsec;

// Calcular cuentos días contiene el intervalo. Substraer cuantos días
//tiene el intervalo para determinar el sobrante
var days = Math.floor(interval / msecPerDay );
interval = interval - (days * msecPerDay );

// Calcular las horas , minutos y segundos
var hours = Math.floor(interval / msecPerHour );
interval = interval - (hours * msecPerHour );

var minutes = Math.floor(interval / msecPerMinute );
interval = interval - (minutes * msecPerMinute );

var seconds = Math.floor(interval / 1000 );

// Mostrar el resultado.
document.write(days + " days, " + hours + " hours, " + minutes + " minutes, " + seconds + " seconds.");


//salida 0 days, 0 hours, 3 minutes, 19 seconds.




//solution 3 best...

//salida 0 days, 0 hours, 3 minutes, 28 seconds, 824 millis

var startDate = new Date();
var startDateMsec = startDate.getTime();

var endDate = new Date();
var endDateMsec = endDate.getTime();

var delay = endDateMsec - startDateMsec;

var date = new Date(delay);
var str = '';
if(date.getUTCDate() > 0 )
	str += date.getUTCDate()-1 + ":";
if(date.getUTCHours() > 0 )
	str += date.getUTCHours() + ":";
if(date.getUTCMinutes() > 0 )
	str += date.getUTCMinutes() + ":";
if(date.getUTCSeconds() > 0 )
	str += date.getUTCSeconds() + ":";
if(date.getUTCMilliseconds() > 0 )
	str += date.getUTCMilliseconds();
console.log(str);
