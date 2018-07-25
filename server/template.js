export default ({ html, helmet }) => `
<!DOCTYPE html>
<html lang="en">
<head>
  ${helmet.title.toString()}
  ${helmet.meta.toString()}
  ${helmet.link.toString()}
</head>
<body>
  <div id="root">
    ${html}
  </div>
  <script type="text/javascript" src="index.js"></script>
</body>
</html>
`