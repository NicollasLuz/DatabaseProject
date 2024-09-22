<?php
$servername = "localhost";
$username = "root";
$password = "usbw";
$dbname = "react_localhost";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Erro de conexão: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $data = json_decode(file_get_contents("php://input"), true);
    $name = isset($data['nome']) ? $conn->real_escape_string($data['nome']) : '';
    $email = isset($data['email']) ? $conn->real_escape_string($data['email']) : '';
    $password = isset($data['senha']) ? $conn->real_escape_string($data['senha']) : '';

    if (!empty($name) && !empty($email) && !empty($password)) {
        $sql = "INSERT INTO users (name, email, password) VALUES ('$name', '$email', '$password')";

        if ($conn->query($sql) === TRUE) {
            echo json_encode(array("message" => "Dados inseridos com sucesso!"));
        } else {
            echo json_encode(array("message" => "Erro ao inserir os dados: " . $conn->error));
        }
    } else {
        echo json_encode(array("message" => "Todos os campos são obrigatórios!"));
    }

    $conn->close();
}
?>
