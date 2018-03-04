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

 
  $query = mysqli_query($link,"select te.event_id,event_name,tc.cat_id,cat_name,round,venue,start_time,end_time,ts.day,date,ts.isRevels from tblevents te,tblcategories tc,schdl ts where ts.cat_id=tc.cat_id AND te.event_id=ts.event_id") or die("could not establish a connection");
  
 


  $row = array();
  $data = array();

  $i = 0;


  while ($row = mysqli_fetch_row($query)) 
  {
    
   
      
      $data["data"][$i]["eid"] = $row[0];
      $data["data"][$i]["ename"] = $row[1];
      $data["data"][$i]["catid"] = $row[2];
      $data["data"][$i]["catname"] = $row[3];


      $data["data"][$i]["round"] = $row[4];
      $data["data"][$i]["venue"] = $row[5];
      $data["data"][$i]["stime"] = $row[6];
      $data["data"][$i]["etime"] = $row[7];
      $data["data"][$i]["day"] = $row[8];
      $data["data"][$i]["date"] = $row[9];
      $data["data"][$i]["isRevels"] = $row[10];
      

    $i++;

  }
  echo json_encode($data);

?>