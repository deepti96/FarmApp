<?php
        $locations=array();
        //$work=$_GET["service"];
        $uname="root";
        $pass="";
        $servername="localhost";
        $dbname="sih";
        $db=new mysqli($servername,$uname,$pass,$dbname);
        $query =  $db->query("SELECT * FROM map");
        //$number_of_rows = mysql_num_rows($db);  
        //echo $number_of_rows;
        while($row = $query->fetch_assoc()){
            $name = $row['name'];
            $longitude = $row['longitude'];                              
            $latitude = $row['lat'];
            $link=$row['id'];
            $mobile=$row['mobile_number'];
            $land=$row['land_area'];
            $crop=$row['crop'];
            /* Each row is added as a new array */
            $locations[]=array( 'name'=>$name, 'lat'=>$latitude, 'lng'=>$longitude, 'lnk'=>$link, 'mob'=>$mobile, 'land1'=>$land, 'crop1'=>$crop );
        }
        //echo $locations[0]['name'].": In stock: ".$locations[0]['lat'].", sold: ".$locations[0]['lng'].".<br>";
        //echo $locations[1]['name'].": In stock: ".$locations[1]['lat'].", sold: ".$locations[1]['lng'].".<br>";
    ?>
    <html>
    <head>
    <meta charset="utf-8">
    <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, width=device-width">
    <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" type="text/css">
  <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet" type="text/css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  <script src="https://use.fontawesome.com/d4dc5bd7b5.js"></script>
        <style>
  nav
{ 
  padding-top: 16px;
  height: 70px;
  background-color: #ffffff !important;
  /*box-shadow: 0 6px 8px 0 rgba(0,0,0,0.1), 0 17px 50px 0 rgba(0,0,0,0.1);*/
}
</style>
    </head>
    
    <script type="text/javascript" src="http://maps.googleapis.com/maps/api/js?key=AIzaSyDHjgaR76MfXcVJ2n_BPx-xF_4VshN6zyI"></script> 
    <script type="text/javascript">
    var map;
    var Markers = {};
    var infowindow;
    var locations = [
        <?php for($i=0;$i<sizeof($locations);$i++){ $j=$i+1;?>
        [
            'AMC Service',
            '<p><?php echo $locations[$i]['name'];?></p><p><?php echo $locations[$i]['mob'];?></p></p><p><?php echo $locations[$i]['land1'];?></p> <p><?php echo $locations[$i]['crop1'];?></p>',
            <?php echo $locations[$i]['lat'];?>,
            <?php echo $locations[$i]['lng'];?>,
            0
        ]<?php if($j!=sizeof($locations))echo ","; }?>
    ];
    var origin = new google.maps.LatLng(locations[0][2], locations[0][3]);
    function initialize() {
      var mapOptions = {
        zoom: 9,
        center: origin
      };
      map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
        infowindow = new google.maps.InfoWindow();
        for(i=0; i<locations.length; i++) {
            var position = new google.maps.LatLng(locations[i][2], locations[i][3]);
            var marker = new google.maps.Marker({
                position: position,
                map: map,
            });
            google.maps.event.addListener(marker, 'click', (function(marker, i) {
                return function() {
                    infowindow.setContent(locations[i][1]);
                    infowindow.setOptions({maxWidth: 200});
                    infowindow.open(map, marker);
                }
            }) (marker, i));
            Markers[locations[i][4]] = marker;
        }
        locate(0);
    }
    function locate(marker_id) {
        var myMarker = Markers[marker_id];
        var markerPosition = myMarker.getPosition();
        map.setCenter(markerPosition);
        google.maps.event.trigger(myMarker, 'click');
    }
    google.maps.event.addDomListener(window, 'load', initialize);
    </script>
    <body>
    <nav class="navbar navbar-default navbar-fixed-top" style="background-color:#000;">
  <div class="container-fluid" style="background-color:#000; color:#fff; padding:10px;margin-bottom:20px;">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#"><p style="color:#fff; font-size:25px;">&nbsp;&nbsp;AGROWORKS</p></a>
    </div>

    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav navbar-right" style="color:#000">
        <li><a href="http://localhost//index.html" style="color:#fff; font-size:15px;">HOME</a></li>
        <li><a href="http://localhost//try5.php" style="color:#fff; font-size:15px;">BUY/SELL</a></li>
        <li><a href="http://localhost//ChatBot2/form.html" style="color:#fff; font-size:15px;">HELPLINE</a></li>
        <li><a href="http://localhost//smartfarm-master/smartfarm-master/www/index.html#/register" style="color:#fff; font-size:15px;">PREDICT</a></li>
        <li><a href="http://localhost//smartFarmWebApp-master/smartFarmWebApp-master/index.html" style="color:#fff; font-size:15px;">PREDICTION GRAPHS</a></li>
        
        
        
      </ul>
    </div>
  </div>
</nav> 
<center><div id="map-canvas" style="height: 500px; width: 80%; margin-top: 100px;"></div></center>
    </body>
    </html>