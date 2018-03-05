
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
  
  $link = mysqli_connect("localhost","root","system@admin@hamlog","revels18");
  mysqli_query($link,'SET CHARACTER SET utf8');

 $query = mysqli_query($link,"select * from revelscup_fixtures") or die("could not establish a connection");
  $row = array();
  $data = array();

  $i = 0;

  while ($row = mysqli_fetch_row($query)) 
  {
    
      $data["data"][$i]["sname"] = $row[0];
      $data["data"][$i]["date"] = $row[1];
      $data["data"][$i]["time"] = $row[2];
      $data["data"][$i]["venue"] = $row[3];
      $data["data"][$i]["team1"] = $row[4];
      $data["data"][$i]["team2"] = $row[5];
    $i++;
  }
  echo json_encode($data);

?>