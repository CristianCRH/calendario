<?php
date_default_timezone_set('America/Lima');
define('MONTH_NAMES',["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]);
define('MONTHS',[[4,6,9,11],[1,3,5,7,8,10,12]]);
session_start();
class Calendar{
  protected $timestamp;
  protected $currentDate;
  protected $currentDay;
  protected $monthNumber;
  protected $currentYear;
  protected $monthNames;
  /**
   * año/mes/dia
   */
   public function __construct($fecha='') {
     $_SESSION['algo'];
    $this->timestamp=time();
    if(empty($fecha)){
      $this->currentDate=explode('/',date('d/m/Y',$this->timestamp));
      
    }else{
    $this->currentDate= explode('/',date('d/m/Y',strtotime($fecha[0].'/'.$fecha[1].'/'.$fecha[2])));
    }
    $this->currentDay =  $this->currentDate[0];
    $this->monthNumber = $this->currentDate[1];
    $this->currentYear = $this->currentDate[2];
    $this->monthNames=strtoupper(MONTH_NAMES[$this->monthNumber-1]);
  }
  /**
 *Retorna el numero total de días por mes
 */
  public function getAllDayMoths($month='')
  {    
      $month=$month==''?$this->monthNumber:$month;
      if($month==0){
          $month=12;
      }
      if(in_array($month,MONTHS[1])){
        return 31;
      }elseif (in_array($month,MONTHS[0])) {
          return  30;
      }else{
          return $this->isLeap()?29:28;
      }
  }
  /**
 * Retorna verdadero si el año es bisiesto, caso contrario falso 
 */
 public function isLeap()
  {
      $currentYear=$this->currentYear;
      return ($currentYear%100!==100)&&($currentYear%4===0)||($currentYear%400==0);
  }
    /**
   * Retorna el número de la semana
   */
  public function getStarDay()
  {
    $numberWeek=date('w',mktime(0,0,0,$this->monthNumber,1,$this->currentYear));
    return $numberWeek-1===-1?6:$numberWeek-1;
  }
  /**
 *  Método que muestra el número del mes y el año del anterior fecha
 */
 public function getLastMonth()
 {
    if($this->monthNumber!==1){
        $this->monthNumber--;
    }else{
        $this->monthNumber=12;
        $this->currentYear--;
    }
    return $this->setNewDate();
 }

 /**
  * Método que muestra el número del mes y el año del proximo fecha
  */
  public function getNextMonth()
  {
     if($this->monthNumber!==12){
         $this->monthNumber++;
     }else{
         $this->monthNumber=1;
         $this->currentYear++;
     }
    
     return $this->setNewDate();
  }
  /**
* Establecer una nueva fecha 
*/
  public function setNewDate(){
    $this->currentDate=explode('/',date('d/m/Y',strtotime($this->currentYear.'/'.$this->monthNumber.'/'.$this->currentDay)));
    /*$this->currentDay =  $this->currentDate[0];
    $this->monthNumber = $this->currentDate[1];
    $this->currentYear = $this->currentDate[2];*/
    $this->monthNames=strtoupper(MONTH_NAMES[$this->monthNumber-1]);
  return $this->writeMonth();
  }
/**
 * Dibujar las dias de la semana
 */

public function writeMonth()
{
  $month= $this->monthNumber;
  $_SESSION['algo']=$month;
  $allDays=$this->getAllDayMoths($month-1);
  $x=0;
  $nextDay=0;
  $daysPrev='';
  for ($i=$this->getStarDay(); $i >0 ; $i--) { 
    $daysPrev.="<div class='calendar__date calendar__item item__last' >".($allDays-($i-1))."</div>";
    $nextDay++;
  }
   
  $allDays=$this->getAllDayMoths();
  $todays='';
 
  for ($i=1; $i <=$allDays ; $i++) { 
    
    if(date('d')==$i && date('m')==$this->monthNumber && date('Y')==$this->currentYear){
     $todays.="<div class='calendar__date calendar__item toDay' id='{$i}' onmousedown='sele(this.id)' onmouseup='arrastrar(this.id)' >$i</div>";
    }else{
      $todays.="<div class='calendar__date calendar__item' id='{$i}' onmousedown='sele(this.id)'  onmouseup='arrastrar(this.id)'>$i</div>";
    }

  }
  
  $allDays=($this->getAllDayMoths()+$nextDay);
  $nextDays='';
  for ($i=42; $i >$allDays ; $i--) { 
     $x++;
     $nextDays.="<div class='calendar__date calendar__item item__text'>$x</div>";
  }
 
  $x=0;
  $nextDay=0;
  
  $data['month']=$this->monthNames;
  $data['year']=$this->currentYear;
  $data['days']=$daysPrev.$todays.$nextDays;
  $data['monthNumber']=$this->monthNumber;
  
  return $data;
}
/**
 * retorna la fecha
 */
public function getDate()
{
 $fecha[0]=$this->currentYear;
 $fecha[1]=$this->monthNumber;
 $fecha[2]=$this->currentDay;
 return $fecha;
}
}



if(empty($_GET['isRequest'])){
  $calendar=new Calendar();
  $data=$calendar->writeMonth();
 
}else{
  $fecha=$_GET['data'];
  $calendar=new Calendar($fecha);
  $data=$calendar->writeMonth();
  
  echo json_encode($data);
}


