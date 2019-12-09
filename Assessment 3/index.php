<!DOCTYPE HTML>
<html>
<head>
</head>
<body>

<?php
// define variables and set to empty values
$nameErr = $fnameErr = $sidErr = $emailErr = $soltErr = "";
$name = $fname = $sid = $email = $solt = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  if (empty($_POST["name"])) {
   $nameErr = "Name is required";
 } else {
   $name = test_input($_POST["name"]);
 }

 if (empty($_POST["email"])) {
   $emailErr = "Email is required";
 } else {
   $email = test_input($_POST["email"]);
 }

 if (empty($_POST["fname"])) {
   $fnameErr = "First Name  is required";
 } else {
   $fname = test_input($_POST["fname"]);
 }

 if (empty($_POST["sid"])) {
   $sidErr = "SID  is required";
 } else {
   $sid = test_input($_POST["sid"]);
 }

 if (empty($_POST["solt"])) {
   $soltErr = "Solt is required";
 } else {
   $solt = test_input($_POST["solt"]);
 }
  if (!empty($_POST["name"]) && !empty($_POST["email"]) && !empty($_POST["fname"]) && !empty($_POST["sid"]) && !empty($_POST["solt"]) )
  {
    saveInfo($name,$fname,$sid,$email,$solt);
  }
}

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}
?>

<h2 style="color:red">COMPA207 - Register here for a practical slot</h2>
<p><b>Register only if you know what you are doing.</b></p>
<ul>
  <li>Please enter <b>all</b> information and select your desired day.Please benter a correct 'SID' number!</li>
  <li>Please check the number of available seats before submitting.</li>
  <li>Register only to one slot.</li>
  <li>Any problems? Writev a message <code><a href="weberb@csc.liv.ac.uk">weberb@csc.liv.ac.uk</a></code><li>
</ul>
<br>
<form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
   Name: <input type="text" name="name"> <span style="color:red">* <?php echo $nameErr;?></span>
   FirstName: <input type="text" name="fname"> <span style="color:red">* <?php echo $fnameErr;?></span>
   SID: <input type="number" name="sid"> <span style="color:red">* <?php echo $sidErr;?></span>
   E-mail Address: <input type="text" name="email"> <span style="color:red">* <?php echo $emailErr;?></span>
  <br><br>
  <b>Select The Practical slot :</b>
  <select  name="solt">
    <option value="Monday 15.00-17.00">Monday 15.00-17.00   51 seats remaining</option>
    <option value="Tuesday 14.00-16.00">Tuesday 14.00-16.00   1 seats remaining</option>
    <option value="Thursday 11.00-13.00">Thursday 11.00-13.00   12 seats remaining</option>
    <option value="Friday 10.00-12.00">Friday 10.00-12.00   26 seats remaining</option>
  </select>
   <span style="color:red">* <?php echo $soltErr;?></span>
  <br><br>
  <input type="submit" name="submit" value="Register">
</form>

<?php
  function saveInfo($name,$fname,$sid,$email,$solt)
  {
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "assessment";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);
    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $sql = "INSERT INTO student (name, fname, sid, email, solt)
    VALUES ('$name', '$fname', $sid, '$email', '$solt')";

    if ($conn->query($sql) === TRUE) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
  }

?>

</body>
</html>
