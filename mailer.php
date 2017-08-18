<?php
    // Modifications to mailer script from:
    // http://blog.teamtreehouse.com/create-ajax-contact-form
    // Added input sanitizing to prevent injection

    // Only process POST reqeusts.
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Get the form fields and remove whitespace.
        $name = strip_tags(trim($_POST["name"]));
				$name = str_replace(array("\r","\n"),array(" "," "),$name);
        $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
        $phone = trim($_POST["phone"]);
        $zipcode = trim($_POST["zipcode"]);
        $message = trim($_POST["message"]);

        // Check that data was sent to the mailer.
        if ( empty($name) OR empty($phone) OR empty($zipcode) OR empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
            // Set a 400 (bad request) response code and exit.
            //http_response_code(400);
            header("HTTP/1.0 404 Not Found?");
            //You can customise this message
            echo "Oops! There was a problem with your submission. Please complete the form and try again.";
            exit;
        }

        // Set the recipient email address.
        //IMPORTANT TODO: CHANGE THIS TO YOUR EMAIL ADDRESS!!
        $recipient = "demo@3rdwavemedia.com";

        // Set the email subject.
        $subject = "New contact from $name";

        // Build the email content.
        $email_content = "Name: $name\n\n";
        $email_content .= "Email: $email\n\n";
        $email_content .= "Phone: $phone\n\n";
        $email_content .= "Zip Code: $zipcode\n\n";
        $email_content .= "Project Info: $message\n\n";

        // Build the email headers.
        $email_headers = "From: $name <$email>";

        // Send the email.
        if (mail($recipient, $subject, $email_content, $email_headers)) {
            // Set a 200 (okay) response code.
            //http_response_code(200); 
            header('HTTP/1.0 200 OK');
            //You can customise this message
            echo "Thank You! Your info contact form has been sent successfully.";
        } else {
            // Set a 500 (internal server error) response code.
            //http_response_code(500);
            header('HTTP/1.0 500 Internal Server Error');
            //You can customise this message
            echo "Oops! Something went wrong and we couldn't send your message.";//You can customise this message
        }

    } else {
        // Not a POST request, set a 403 (forbidden) response code.
        //http_response_code(403);
        header('HTTP/1.0 403 Forbidden');
        //You can customise this message
        echo "There was a problem with your submission, please try again.";//You can customise this message
    }

?>
