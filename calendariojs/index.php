<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
   
    
    <link rel="stylesheet" href="./style.css">
</head>

<body>


    <div class="calendar">
        <div class="calendar__info">
            <div class="calendar__prev" id="prev-month">&#9664;</div>
            <div class="calendar__month"id="month"></div>
            <select name="months" id="months">
                <option value="">gg</option>
            </select>
            <div class="calendar__year" id="year" ></div>
            <div class="calendar__next" id="next-month">&#9654;</div>
        </div>
        <div class="calendar__week">
            <div class="calendar__day calendar__item">Lunes</div>
            <div class="calendar__day calendar__item">Martes</div>
            <div class="calendar__day calendar__item">Miercoles</div>
            <div class="calendar__day calendar__item">Jueves</div>
            <div class="calendar__day calendar__item">Viernes</div>
            <div class="calendar__day calendar__item">Sábado</div>
            <div class="calendar__day calendar__item">Domingo</div>
        </div>
        <div class="calendar__date" id="dates"></div>
    </div>
    <script src="./jquery-3.4.1.min.js"></script>
    <script src="./calendar.js"></script>
<div id="modal-container">

</div>
    

</body>

</html>