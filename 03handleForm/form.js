export default function form() {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="/submit" method="post">

        <input type="text" placeholder="Enter Username">
        <input type="password" placeholder="Enter Password">
        <button>Login</button>
    </form>
</body>
</html>`;
}
