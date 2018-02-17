
<?php
  //header('Content-Type: application/json');
  header('Content-Type: application/json; Charset=UTF-8'); 
  
  //CORS Support
  /* if (isset($_SERVER['HTTP_ORIGIN'])) {
    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Max-Age: 86400');    // cache for 1 day
}
// Access-Control headers are received during OPTIONS requests
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
        header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");         

    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
        header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

}*/

  

  // $link= mysqli_connect("localhost","root","brieftut","revels16");
  
  $link= mysqli_connect("localhost","root","system@admin@hamlog","revels18");
  mysqli_query($link,'SET CHARACTER SET utf8');

 $query = mysqli_query($link,"select teamid, category,  event,round,position from result_confirm    where category='Sports'  ") or die("could not establish a connection");






 //$query = mysqli_query($link,"select teamid, category,  event,round,position,'0'  from result_confirm ,   where category='Sports'   ") or die("could not establish a connection");



 //$query = mysqli_query($link,"select teamid, category, event_id, event,round,position,event_max_team_number,day from result_confirm  rc , tblevents te where rc.category='Sports'  ") or die("could not establish a connection");

  
        //$query = mysqli_query($link,"select teamid, category, event_id, event_name ,round,position,event_max_team_number,day from result_confirm rs  , tblevents te  where cat_id = 17 AND te.event_id=rs.event") or die("could not establish a connection");
    
 


  $row = array();
  $data = array();

  $i = 0;


  while ($row = mysqli_fetch_row($query)) 
  {
    
      $data["data"][$i]["teamid"] = $row[0];
      $data["data"][$i]["catid"] = $row[1];
     // $data["data"][$i]["eveid"] = $row[2];
      $data["data"][$i]["evename"] = $row[2];
      $data["data"][$i]["roundno"] = $row[3];
      $data["data"][$i]["position"] = $row[4];
      //$data["data"][$i]["teamsize"] = $row[5];
    // $data["data"][$i]["day"] = $row[5];
     

    $i++;

  }
  echo json_encode($data);

?>