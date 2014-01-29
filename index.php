<?php
/**
 * Copyright 2011 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License. You may obtain
 * a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 */

require 'src/facebook.php';

// Create our Application instance (replace this with your appId and secret).
$facebook = new Facebook(array(
  'appId'  => '827415657273366',
  'secret' => 'ad9da0f09316adc7c3e905bf1d881bdc',
));

// Get User ID
$user = $facebook->getUser();

// We may or may not have this data based on whether the user is logged in.
//
// If we have a $user id here, it means we know the user is logged into
// Facebook, but we don't know if the access token is valid. An access
// token is invalid if the user logged out of Facebook.

if ($user) {
  try {
    // Proceed knowing you have a logged in user who's authenticated.
    $user_profile = $facebook->api('/me');
  } catch (FacebookApiException $e) {
    error_log($e);
    $user = null;
  }
}

// Login or logout url will be needed depending on current user state.
if ($user) {
  $logoutUrl = $facebook->getLogoutUrl();
} else {
  $statusUrl = $facebook->getLoginStatusUrl();
  $loginUrl = $facebook->getLoginUrl(array(
  'scope' => 'email')
  );
}

?>
 <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<!-- <!doctype html>
<html xmlns:fb="http://www.facebook.com/2008/fbml"> -->
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>Club de Lectura Alfaguara</title>

<!--Page CSS-->
<link rel="stylesheet" href="css/stylesheet.css" type="text/css" />

<!--Tooltip-->
<script type="text/javascript" src="https://code.jquery.com/jquery-1.7.0.min.js"></script>
<script type="text/javascript" src="js/jquery.tooltipster.min.js"></script>
  
<!-- El js del Tooltip movido a js/js.js -->    

<!--Tooltip CSS-->
<link rel="stylesheet" type="text/css" href="css/tooltipster.css" />

<!--Image Gallery Pop Up-->
<script type="text/javascript" src="js/html5lightbox/html5lightbox.js"></script>

<!-- <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script> --> 
<!--  <script src="js/jquery.1.10.2.js"></script> copia local por si se trabaja sin conexion, quitar en produccion SED -->
<script src="js/json.js"></script>
<script src="js/js.js"></script>
<script src="js/control_lightbox.js"></script>

<!--Accordion-->
<script src="js/accordion/modernizr.js"></script>
    <style>
    .modalDialog {
  position: fixed;
  font-family: Arial, Helvetica, sans-serif;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0,0,0,0.8);
  z-index: 99999;
  opacity:0;
  -webkit-transition: opacity 400ms ease-in;
  -moz-transition: opacity 400ms ease-in;
  transition: opacity 400ms ease-in;
  pointer-events: none;
}
 .modalDialog:target {
  opacity:1;
  pointer-events: auto;
}

.modalDialog > div {
  width: 400px;
  position: relative;
  margin: 10% auto;
  padding: 5px 20px 13px 20px;
  border-radius: 10px;
  background: #fff;
  background: -moz-linear-gradient(#fff, #999);
  background: -webkit-linear-gradient(#fff, #999);
  background: -o-linear-gradient(#fff, #999);
}
.close {
  background: #606061;
  color: #FFFFFF;
  line-height: 25px;
  position: absolute;
  right: -12px;
  text-align: center;
  top: -10px;
  width: 24px;
  text-decoration: none;
  font-weight: bold;
  -webkit-border-radius: 12px;
  -moz-border-radius: 12px;
  border-radius: 12px;
  -moz-box-shadow: 1px 1px 3px #000;
  -webkit-box-shadow: 1px 1px 3px #000;
  box-shadow: 1px 1px 3px #000;
}

.close:hover { background: #00d9ff; }
    </style>
  </head>
  <body>
 <!-- 
    Asi se "instancia" openmodal con un href con #
    <a href="#openModal">Open Modal</a>
 -->
    <div id="openModal" class="modalDialog">
        <div>
          
             <a href="#close" title="Close" class="close">X</a>

              <?php if ($user): ?>

              <h1>HAY USER</h1>
                <h3>You</h3>
                <img src="https://graph.facebook.com/<?php echo $user; ?>/picture">
                <a href="<?php echo $logoutUrl; ?>">Logout</a>

                <pre><?php print_r($user_profile); 
                       echo "first_name=[".$user_profile['first_name']."]<br>";
                       echo "middle_name=[".$user_profile['middle_name']."]<br>";     
                       echo "last_name=[".$user_profile['last_name']."]<br>";     
                       echo "location=[".$user_profile['location']."]<br>";     
                       echo "email=[".$user_profile['email']."]<br>";   
                ?></pre>
                
              <?php else: ?>
              <h1>NO HAY USER</h1>
                <strong><em>You are not Connectedzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz.</em></strong>
                  <a href="<?php echo $loginUrl; ?>">Login with Facebook</a>

              <?php endif ?>
              <!-- 
               <h3>PHP Session</h3> 
               <pre><?php print_r($_SESSION); ?></pre>
              -->

        </div>
    </div>
<!--
 https://www.webuzz.es/aplicaciones/skeetching/php/ 
 -->

<!--Facebook Size resizer-->
<div id="fb-root"></div>

  <script type="text/javascript">
    window.fbAsyncInit = function() {
        FB.init({
            appId : 'XXXXXXXXXXXX',
            status : true, // check login status
            channelUrl : '/channel.html', // Channel File
            cookie : true, // enable cookies to allow the server to access the session
            xfbml : true // parse XFBML
        });
        FB.Canvas.setAutoGrow();
    };
    
    (function(d){
        var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
        if (d.getElementById(id)) {return;}
        js = d.createElement('script'); js.id = id; js.async = true;
        js.src = "//connect.facebook.net/en_US/all.js";
        ref.parentNode.insertBefore(js, ref);
    }(document));
    </script><!--End Facebook Size resizer-->

<!--Wrapper-->
<div id="wrapper">

    <!--Header-->
    <header> 
      <a href="http://www.alfaguara.com/" target="_blank">
          <img src="img/logo.png" width="101" height="119" alt="Club de Lectura Alfaguara Logo" />
        </a>
        
        <p>Club de Lectura Alfaguara</p> 
        
        <!--Acoordion-->        
        <div id="content">
        
        <div class="qaccordion">
          <h3 class="qHead">Un espacio para lectura de las mejores novelas</h3>
          <div>
            <p>Te invitamos a que participes en nuestro Club de Lectura Alfaguara a través de Facebook y comentes con nosotros algunas de las novelas que publicaremos en 2014.</p> 

            <p>Cada mes se propondrá un nuevo libro, pero puedes consultar en cualquier momento los post de los libros que ya no estén activos. Además de participar en el club que desees, puedes acceder a los contenidos extra de cada título.</p>
            
            <p>Esperamos que disfrutes de esta experiencia de lectura.</p>
          </div>
          
        </div><!--End Acoordion--> 
    
    </header><!--End Header-->
    
    <!--Slider-->
    <div id="slider">
    
      <!--Buttons-->
        <a class="ws_prev"></a>
        <a class="ws_next"></a>    
      
        <!--Slider Content-->
      <div class="slider_content">
            
            <div id="book_g">
        <div id="path_img" width="256" height="395"></div>
              <!-- <img src="img/book1.png" width="256" height="395" /> -->
            </div>
            
            <div id="book_content">
              <p id="titulo"></p>
                <p id="autor"></p>
                <p id="slogan"></p>
                <p id="descripcion"></p>
                <span id="link_comprar"></span> 
                <!--<span id="link_ebook"></span> -->        
            </div> 
            
      </div><!--End Slider Content-->
        
        <!--Shelf--> 
        <div id="shelf">
          <ul>
                <li class="tooltip" title="Za Za, Emperador de Ibiza, Ray Loriga"><img id="libro1" src="img/book2.png" width="84" height="102" /></li>
              <li class="tooltip" title="Cortázar de la A a la Z, Julio Cortázar, Carles Álvarez Garriga, Aurora Bernárdez"><img id="libro2" src="img/book1.png" width="84" height="102" /></li>
                <li class="tooltip" title="La rubia de ojos negros, John Banville"><img id="libro3" src="img/book3.png" width="84" height="102" /></li>
                <!-- libro GRIS -->
                <li title="proximamente" title="libro Gris"><img id="futuro_libro4" src="img/libro_gris.png" width="84" height="102" /></li>                
                <!-- libro GRIS -->
                <li title="proximamente" title="libro Gris"><img id="futuro_libro4" src="img/libro_gris.png" width="84" height="102" /></li>
                <!-- libro GRIS -->
                <li title="proximamente" title="libro Gris"><img id="futuro_libro4" src="img/libro_gris.png" width="84" height="102" /></li>
                <!-- libro GRIS -->
                <li title="proximamente" title="libro Gris"><img id="futuro_libro4" src="img/libro_gris.png" width="84" height="102" /></li>                
            </ul>           
        </div><!--End Shelf-->
        
        <!--Bar-->
        <div id="bar"></div><!--Bar ending-->     
    
  </div><!--End Slider-->
    
  <!--Boxes-->
  <div id="boxes_container">
  
        <div class="box_1">
          <img src="img/lap1.png" width="151" height="31" />
            <p id="caja_roja"></p>
            
           
                  
        </div>
        
    <div class="box_2">
          <img src="img/lap2.png" width="151" height="31" />
                        
            <p id="caja_rosa">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> 
               
        </div>
        
        <div class="box_3">
          <img src="img/lap3.png" width="151" height="31" />
            <p id="caja_lima">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            
            <!-- <a class="button_box3" href="#submit" style="">Ver más</a> -->
                  
        </div>
        
    <div class="box_1">
          <img src="img/lap4.png" width="151" height="31" />
            
            <div class="catalog" id="caja_naranja">
              <ul>
                    <div id="lblibro1">
                        
                  <li><a href="img/materiales/1.jpg" class="html5lightbox" title="Cortazar 1" data-group="set1"><img src="img/materiales/thumb1.jpg" width="48" height="49" /></a></li>
                    <li><a href="img/materiales/2.jpg" class="html5lightbox" title="Cortazar 2" data-group="set1"><img src="img/materiales/thumb2.jpg" width="48" height="49" /></a></li>
                    <li><a href="img/materiales/3.jpg" class="html5lightbox" title="Cortazar 3" data-group="set1"><img src="img/materiales/thumb3.jpg" width="48" height="49" /></a></li>
                    <li><a href="img/materiales/4.jpg" class="html5lightbox" title="Cortazar 4" data-group="set1"><img src="img/materiales/thumb4.jpg" width="48" height="49" /></a></li>
                    <li><a href="img/materiales/5.jpg" class="html5lightbox" title="Cortazar 5" data-group="set1"><img src="img/materiales/thumb5.jpg" width="48" height="49" /></a></li>
                    <li><a href="img/materiales/6.jpg" class="html5lightbox" title="Cortazar 6" data-group="set1"><img src="img/materiales/thumb6.jpg" width="48" height="49" /></a></li>
                    <li><a href="img/materiales/7.jpg" class="html5lightbox" title="Cortazar 7" data-group="set1"><img src="img/materiales/thumb7.jpg" width="48" height="49" /></a></li>
                    <li><a href="img/materiales/8.jpg" class="html5lightbox" title="Cortazar 8" data-group="set1"><img src="img/materiales/thumb8.jpg" width="48" height="49" /></a></li>
                    <li><a href="img/materiales/5.jpg" class="html5lightbox" title="Cortazar 5" data-group="set1"><img src="img/materiales/thumb5.jpg" width="48" height="49" /></a></li>
                    <li><a href="img/materiales/6.jpg" class="html5lightbox" title="Cortazar 6" data-group="set1"><img src="img/materiales/thumb6.jpg" width="48" height="49" /></a></li>
                    <li><a href="img/materiales/7.jpg" class="html5lightbox" title="Cortazar 7" data-group="set1"><img src="img/materiales/thumb7.jpg" width="48" height="49" /></a></li>
                    <li><a href="img/materiales/8.jpg" class="html5lightbox" title="Cortazar 8" data-group="set1"><img src="img/materiales/thumb8.jpg" width="48" height="49" /></a></li>
                    </div>


                    <div id="lblibro2" style="display:none">
                        
                    <li><a href="img/materiales/11.jpg" class="html5lightbox" title="Cortazar 11" data-group="set11"><img src="img/materiales/thumb11.jpg" width="48" height="49" /></a></li>
                    <li><a href="img/materiales/22.jpg" class="html5lightbox" title="Cortazar 22" data-group="set11"><img src="img/materiales/thumb22.jpg" width="48" height="49" /></a></li>
                    <li><a href="img/materiales/33.jpg" class="html5lightbox" title="Cortazar 33" data-group="set11"><img src="img/materiales/thumb33.jpg" width="48" height="49" /></a></li>
                    <li><a href="img/materiales/44.jpg" class="html5lightbox" title="Cortazar 44" data-group="set11"><img src="img/materiales/thumb44.jpg" width="48" height="49" /></a></li>
                    <li><a href="img/materiales/55.jpg" class="html5lightbox" title="Cortazar 55" data-group="set11"><img src="img/materiales/thumb55.jpg" width="48" height="49" /></a></li>
                    <li><a href="img/materiales/66.jpg" class="html5lightbox" title="Cortazar 66" data-group="set11"><img src="img/materiales/thumb66.jpg" width="48" height="49" /></a></li>
                    <li><a href="img/materiales/77.jpg" class="html5lightbox" title="Cortazar 77" data-group="set11"><img src="img/materiales/thumb77.jpg" width="48" height="49" /></a></li>
                    <li><a href="img/materiales/88.jpg" class="html5lightbox" title="Cortazar 88" data-group="set11"><img src="img/materiales/thumb88.jpg" width="48" height="49" /></a></li>               <li><a href="img/materiales/77.jpg" class="html5lightbox" title="Cortazar 77" data-group="set11"><img src="img/materiales/thumb77.jpg" width="48" height="49" /></a></li>
                    <li><a href="img/materiales/88.jpg" class="html5lightbox" title="Cortazar 88" data-group="set11"><img src="img/materiales/thumb88.jpg" width="48" height="49" /></a></li>               <li><a href="img/materiales/77.jpg" class="html5lightbox" title="Cortazar 77" data-group="set11"><img src="img/materiales/thumb77.jpg" width="48" height="49" /></a></li>
                    <li><a href="img/materiales/88.jpg" class="html5lightbox" title="Cortazar 88" data-group="set11"><img src="img/materiales/thumb88.jpg" width="48" height="49" /></a></li>
                    </div>

                    <div id="lblibro3" style="display:none">
                        
                    <li><a href="img/materiales/333.jpg" class="html5lightbox" title="Cortazar 11" data-group="set11"><img src="img/materiales/thumb333.jpg" width="48" height="49" /></a></li>
                    <li><a href="img/materiales/333.jpg" class="html5lightbox" title="Cortazar 11" data-group="set11"><img src="img/materiales/thumb333.jpg" width="48" height="49" /></a></li>
                    <li><a href="img/materiales/333.jpg" class="html5lightbox" title="Cortazar 11" data-group="set11"><img src="img/materiales/thumb333.jpg" width="48" height="49" /></a></li>
                    <li><a href="img/materiales/333.jpg" class="html5lightbox" title="Cortazar 11" data-group="set11"><img src="img/materiales/thumb333.jpg" width="48" height="49" /></a></li>
                    <li><a href="img/materiales/333.jpg" class="html5lightbox" title="Cortazar 11" data-group="set11"><img src="img/materiales/thumb333.jpg" width="48" height="49" /></a></li>
                    <li><a href="img/materiales/333.jpg" class="html5lightbox" title="Cortazar 11" data-group="set11"><img src="img/materiales/thumb333.jpg" width="48" height="49" /></a></li>
                    <li><a href="img/materiales/333.jpg" class="html5lightbox" title="Cortazar 11" data-group="set11"><img src="img/materiales/thumb333.jpg" width="48" height="49" /></a></li>
                    <li><a href="img/materiales/333.jpg" class="html5lightbox" title="Cortazar 11" data-group="set11"><img src="img/materiales/thumb333.jpg" width="48" height="49" /></a></li>
                    <li><a href="img/materiales/333.jpg" class="html5lightbox" title="Cortazar 11" data-group="set11"><img src="img/materiales/thumb333.jpg" width="48" height="49" /></a></li>
                    <li><a href="img/materiales/333.jpg" class="html5lightbox" title="Cortazar 11" data-group="set11"><img src="img/materiales/thumb333.jpg" width="48" height="49" /></a></li>
                    <li><a href="img/materiales/333.jpg" class="html5lightbox" title="Cortazar 11" data-group="set11"><img src="img/materiales/thumb333.jpg" width="48" height="49" /></a></li>
                    <li><a href="img/materiales/333.jpg" class="html5lightbox" title="Cortazar 11" data-group="set11"><img src="img/materiales/thumb333.jpg" width="48" height="49" /></a></li>

                    </div>
                </ul>
            </div>            
            
            <!-- <a class="button_box1" href="#submit" style="">Ver más</a> -->
                 
        </div>
        <div class="box_2">
          <img src="img/lap5.png" width="151" height="31" />
            <p id="caja_verde">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            
            <!-- <a class="button_box2" href="#submit" style="">Ver más</a> -->
                  
        </div>
        
    <div class="box_3">
          <img src="img/lap6.png" width="151" height="31" />           
            <p id="caja_azul"></p>               
            <!-- <a class="button_box2" href="#submit" style="">Ver más</a> -->
                                             
      </div>
        
        <!--Bar-->
        <div id="bar"></div><!--Bar ending-->                 
  
  </div><!--End Boxes-->
      
  <!--Footer-->
  <div id="footer">
  
      <div id="icons">
          <ul>
                <li><span id="footer_icono_facebook"><img src="img/facebook.png" width="38" height="38" /></span></li>
                <li><span id="footer_icono_twitter"><img src="img/twitter.png" width="38" height="38" /></span></li>
                <li><span id="footer_icono_spotify"><img src="img/spotify.png" width="38" height="38" /></span></li>
                <li><span id="footer_icono_mail"><img src="img/mail.png" width="38" height="38" /></span></li>
              <!--
              <li><a href="#"><img src="img/facebook.png" width="38" height="38" /></a></li>
                <li><a href="#"><img src="img/twitter.png" width="38" height="38" /></a></li>
                <li><a href="#"><img src="img/spotify.png" width="38" height="38" /></a></li>
                <li><a href="#"><img src="img/mail.png" width="38" height="38" /></a></li>
                 -->
            </ul>
        </div>
        
        <div id="banderas">
                <ul id="banderas_facebook" style="display:none">
                    <li><a href="link_facebook_localizado"><img src="img/banderas/spain.jpg"width="39" height="30" /></a></li>
                    <li><a href="link_facebook_localizado"><img src="img/banderas/2.jpg"width="39" height="30" /></a></li>
                    <li><a href="link_facebook_localizado"><img src="img/banderas/3.jpg"width="39" height="30" /></a></li>
                    <li><a href="link_facebook_localizado"><img src="img/banderas/4.jpg"width="39" height="30" /></a></li>
                    <li><a href="link_facebook_localizado"><img src="img/banderas/5.jpg"width="39" height="30" /></a></li>
                    <li><a href="link_facebook_localizado"><img src="img/banderas/6.jpg"width="39" height="30" /></a></li>
                    <li><a href="link_facebook_localizado"><img src="img/banderas/7.jpg"width="39" height="30" /></a></li>
                    <li><a href="link_facebook_localizado"><img src="img/banderas/8.jpg"width="39" height="30" /></a></li>
                    <li><a href="link_facebook_localizado"><img src="img/banderas/9.jpg"width="39" height="30" /></a></li>
                    <li><a href="link_facebook_localizado"><img src="img/banderas/10.jpg"width="39" height="30" /></a></li>
                    <li><a href="link_facebook_localizado"><img src="img/banderas/11.jpg"width="39" height="30" /></a></li>
                    <li><a href="link_facebook_localizado"><img src="img/banderas/12.jpg"width="39" height="30" /></a></li>
                    <li><a href="link_facebook_localizado"><img src="img/banderas/13.jpg"width="39" height="30" /></a></li>
                    <li><a href="link_facebook_localizado"><img src="img/banderas/14.jpg"width="39" height="30" /></a></li>
                </ul> 
                <ul id="banderas_twitter" style="display:none">
                    <li><a href="link_facebook_localizado"><img src="img/banderas/spain.jpg"width="39" height="30" /></a></li>
                    <li><a href="link_facebook_localizado"><img src="img/banderas/2.jpg"width="39" height="30" /></a></li>
                    <li><a href="link_facebook_localizado"><img src="img/banderas/3.jpg"width="39" height="30" /></a></li>
                    <li><a href="link_facebook_localizado"><img src="img/banderas/4.jpg"width="39" height="30" /></a></li>
                </ul> 
                <ul id="banderas_spotify" style="display:none">
                    <li><a href="link_facebook_localizado"><img src="img/banderas/spain.jpg"width="39" height="30" /></a></li>
                    <li><a href="link_facebook_localizado"><img src="img/banderas/2.jpg"width="39" height="30" /></a></li>
                    <li><a href="link_facebook_localizado"><img src="img/banderas/3.jpg"width="39" height="30" /></a></li>
                    <li><a href="link_facebook_localizado"><img src="img/banderas/4.jpg"width="39" height="30" /></a></li>
                    <li><a href="link_facebook_localizado"><img src="img/banderas/5.jpg"width="39" height="30" /></a></li>
                    <li><a href="link_facebook_localizado"><img src="img/banderas/6.jpg"width="39" height="30" /></a></li>
                    <li><a href="link_facebook_localizado"><img src="img/banderas/7.jpg"width="39" height="30" /></a></li>
                    <li><a href="link_facebook_localizado"><img src="img/banderas/8.jpg"width="39" height="30" /></a></li>
                    <li><a href="link_facebook_localizado"><img src="img/banderas/9.jpg"width="39" height="30" /></a></li>
                    <li><a href="link_facebook_localizado"><img src="img/banderas/10.jpg"width="39" height="30" /></a></li>
                    <li><a href="link_facebook_localizado"><img src="img/banderas/11.jpg"width="39" height="30" /></a></li>
                </ul> 
        </div><!--Fin banderas -->
          
  </div><!--End Footer-->

</div><!--End Wrapper-->

<!--Facebook Size resizer-->
<script type="text/javascript">
      FB.Canvas.setAutoResize( 100 );
</script><!--End Facebook Size resizer-->

<!--Accordion .js-->
<script src="js/accordion/index.js"></script>

</body>
</html>
