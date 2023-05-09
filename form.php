<?php

// Database credentials
$host = "localhost";
$username = "Group 39";
$password = "12345";
$dbname = "garbage_collection";

// Connect to database
$conn = mysqli_connect($host, $username, $password, $dbname);

// Check database connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Check if form has been submitted
if (isset($_POST["submit"])) {
    // Get form data
    $title = mysqli_real_escape_string($conn, $_POST["title"]);
    $author = mysqli_real_escape_string($conn, $_POST["author"]);
    $content = mysqli_real_escape_string($conn, $_POST["content"]);

    // Insert article into database
    $sql = "INSERT INTO articles (title, author, content) VALUES ('$title', '$author', '$content')";
    if (mysqli_query($conn, $sql)) {
        echo "Article added successfully";
    } else {
        echo "Error adding article: " . mysqli_error($conn);
    }

    // Close database connection
    mysqli_close($conn);
}

?>

<!DOCTYPE html>
<html>
<head>
    <title>Garbage Collection- Submit an Article</title>
    <style>
        body {
        background-color: #8FBC8F;
        font-family:Arial, sans-serif;
        font-size: 16px;  
         }
        
        form {
            background-color: white;
            padding:20px;
            border-radius:5px;
            width: 500px;
            margin:0 auto;
            box-shadow: 0px 0px 10px rgba(0, 0, 0,0.1);
         }

         h1 {
            text-align: center;
            color: #555;
            margin-bottom: 20px;
         }

         label {
            display:block;
            margin-bottom: 10px;
            color:#333;
           
         }

         input [type="text"],textarea{
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 5px;
            width: 100%;
            margin-bottom: 20px;
            font-size: 16px;
         }

         input [type="submit"] {
            background-color: #4CAF50;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
         }

         
         input [type="submit"] :hover{
            background-color: #45a049;
         }
  
   </style>

</head>
<body>

<h1>Garbage Collection- Submit an Article</h1>

<form method="post" action="<?php echo $_SERVER["PHP_SELF"]; ?>">
    <label for="title">Title:</label><br>
    <input type="text" id="title" name="title" required><br>
    <label for="author">Author:</label><br>
    <input type="text" id="author" name="author" required><br>
    <label for="content">Content:</label><br>
    <textarea id="content" name="content" required></textarea><br><br>
    <input type="submit" name="submit" value="Submit">
</form>

</body>
</html>
