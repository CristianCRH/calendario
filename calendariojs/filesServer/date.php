<?php
date_default_timezone_set('America/Lima');
switch($_GET['ejecutar']??'nada')
{
    case 'getDateServer': getDateServer();
        break;
    case 'getActivity': getActivity();
        break;
}

function getDateServer()
{
    $timestamp=time();
    $date = date('m/d/yy',$timestamp);
    $time = date('h:i:s',$timestamp);
    $serverDate=[
        'date'=>$date,
        'time'=> $time,
    ];
    echo json_encode($serverDate);
}

function getActivity()
{
    $activitys=[
        1=>[
            '03/01/2020'=>[
                [
                'title'=>'Visitar a la compañía AB S. A. C.',
                'commit'=>'Hacer la primera vista a la compaía AB, PARA OFRECER EL SOFTWARE'
                ],
                [
                'title'=>'Visitar a la compañía CC S. A. C.',
                'commit'=>'Hacer la VISITA PARA CAPACITAR PARA EL USO DE EL SOFTWARE'
                ]
            ],
        ],
        2=>[
            '15/01/2020'=>[
                ['title'=>'Realizar la Cotizacion',
                'commit'=>'Realizar la Cotizacion de las impresoras modelo JM-c'
                ],
                [
                'title'=>'Buscar Clientes',
                'commit'=>'Salir a buscar a los posibles clientes'
                ],
            ],
           
        ],
        3=>[
            '28/01/2020'=>[
                'title'=>'Entrega de Equipos',
                'commit'=>'Entregar impresoras modelo JM-c a persona tal'
            ],
        ]
    ];
    
    echo json_encode($activitys);
}

?>
