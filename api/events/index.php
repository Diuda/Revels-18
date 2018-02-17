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

 

 
  $query = mysqli_query($link,"select event_name,event_id,description,event_max_team_number,tc.cat_id,cat_name,te.day,contact_name,contact_number,hash1,hash2 from tblevents te,tblcategories tc where te.cat_id=tc.cat_id") or die("could not establish a connection");


  $row = array();
  $data = array();

  $i = 0;


  while ($row = mysqli_fetch_row($query)) 
  {
    
    
      $data["data"][$i]["ename"] = $row[0];
      $data["data"][$i]["eid"] = $row[1];
      $data["data"][$i]["edesc"] = $row[2];
      $data["data"][$i]["emaxteamsize"] = $row[3];
      $data["data"][$i]["cid"] = $row[4];
      $data["data"][$i]["cname"] = $row[5];
      $data["data"][$i]["cntctname"] = $row[7];
      $data["data"][$i]["cntctno"] = $row[8];
      $data["data"][$i]["type"] = $row[9];
      $data["data"][$i]["hash"] = $row[10];
      $data["data"][$i]["day"] = $row[6];

    $i++;

  }
  echo json_encode($data);

?>
