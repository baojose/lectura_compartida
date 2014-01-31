<?php

require('../validacion_php/form_validations.php');     // segun veo deveulve false cuando email esta OK (mi no entender)
require_once('simpletest/autorun.php');



// $a_mails_ok = Array("fkjds@gmail.com","alsdfasd@sakdf.com");

$form_validations = new form_validations;
$response_check_mail = $form_validations->check_email("sltjaal@dj.com");
var_dump($response_check_mail);

    class CanAddUp extends UnitTestCase {
//         function testvalidateEmail() {
// 			$dummy_mail_ok = "sltjaa@ltjl.com";
// 			// $this->assertTrue($response_check_mail, true);
//             $this->assertEqual(1 + 1, 2);
//         }
    }

    // function validateEmail() {
    // 	$dummy_mail_ok = "sltjaa@ltjl.com";
    // 	$response_check_mail = $form_validations->check_email("sltjaaltjl.com");
    //     $this->assertTrue($response_check_mail, true);
    // }
?>