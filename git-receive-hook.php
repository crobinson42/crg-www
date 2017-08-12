<?php
// Use in the "Post-Receive URLs" section of your GitHub repo.
if ( $_POST['payload'] ) {
  // pull master for public_html root dir
  shell_exec( 'cd /home2/castley5/public_html && git reset --hard HEAD && git pull' );
  // pull develop branch for public_html/dev 
  shell_exec( 'cd /home2/castley5/public_html/dev && git reset --hard HEAD && git pull' );
}
?>
