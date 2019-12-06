const router = require("express").Router();

router.all("*", (req, res) => {
    res.send('Hellow from server')
});

module.exports = router;
