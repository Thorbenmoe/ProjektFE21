<?php
    if(isset($_POST['submit'])) {
        // Empfänger-Email-Adresse
        $to = "thorben.moe@gmail.com";
        // Betreff der Email
        $subject = "Frage über Tia Portal/PLC LAB";

        // Daten aus dem Formular sammeln
        $tasktitle = $_POST['tasktitle'];
        $category = $_POST['category'];
        $choice = $_POST['choice'];
        $desc = $_POST['desc'];

        // Nachricht zusammensetzen
        $message = "Titel: " . $tasktitle . "\n";
        $message .= "Kategorie: " . $category . "\n";
        $message .= "Fragentyp: " . $choice . "\n";
        $message .= "Beschreibung: " . $desc . "\n";

        // Header für die Email festlegen
        $headers = "Frage über das Projekt" . "\r\n";

        // Email versenden
        mail($to, $subject, $message, $headers);

        // Bestätigungsnachricht anzeigen
        echo "Ihre Anfrage wurde erfolgreich gesendet!";
    }
?>
