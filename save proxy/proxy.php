<?php




if( !isset( $_GET['stuff'] ) ){
	echo "fail";
	return;
}

echo urldecode( str_replace( '\\' , '' , $_GET['stuff'] ) );


?>
