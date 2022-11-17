
const express = require('express')
const open = require('open')
const app = express()
const port = 3000

app.get('/', function (req, res) {
    res.set('Accept-CH', 'Sec-CH-Prefers-Color-Scheme, Sec-CH-Prefers-Reduced-Motion');
    res.set('Vary', 'Sec-CH-Prefers-Color-Scheme, Sec-CH-Prefers-Reduced-Motion');
    res.set('Critical-CH', 'Sec-CH-Prefers-Color-Scheme, Sec-CH-Prefers-Reduced-Motion');
    // res.set('Sec-CH-Prefers-Color-Scheme', 'dark');
    
    const prefersColorScheme = req.get("sec-ch-prefers-color-scheme");
    const prefersMotionScheme = req.get("sec-ch-prefers-reduced-motion");

    console.log("# prefersColorScheme = " + prefersColorScheme);
    console.log("# prefersMotionScheme = " + prefersMotionScheme);

    res.send(`
    <!DOCTYPE html>
<html>
<head>   
 <script>
        if (window.matchMedia('(prefers-color-scheme: dark)').media === 'not all') {
            console.log("# Dark!")
        }
    </script>
    <link rel="stylesheet" href="${prefersColorScheme}.css">
</head>

<body>
    <h1>User Preference media features headers</h1>
    <p class="dark">
        It's dark theme
    </p>
    <p class="light">
        It's light theme
    </p>
</body>
</html>`)

});

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    open(`http://localhost:${port}`)
})
