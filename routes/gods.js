module.exports = function (app, db) {

    app.get('/gods', (req, res) => {
        res.status(200).json(db.gods);
    });
    app.get('/gods/:name', (req, res) => {
        const name = req.params.name;
        const god = db.gods.filter(el => {
            return el.name == name;
        })
        res.status(200).json(god);
    });

    app.get('/gods/origin/:origin', (req, res) => {
        const origin = req.params.origin;
        const god = db.gods.filter(el => {
            return el.origin == origin;
        })
        res.status(200).json(god);
    });

    app.post('/gods', (req, res) => {
        const god = {
            name: req.body.name,
            origin: req.body.origin
        };
        db.gods.push(god);
        res.status(201).json({ msg: "Created", result: god });
    });

    app.put('/gods/:name', (req, res) => {
        // res.send(`[PUT] ${req.url}`);
        const name = req.params.name;
        const origin = req.body.origin;
        db.gods.filter(el => {
            if (el.name == name) {
                el.origin = origin;
            }
        });
        const god = {
            name: name,
            origin: origin
        }
        res.status(201).json({ msg: "Updated", result: god });
    });

    app.delete('/gods/:name', (req, res) => {
        // res.send(`[DELETE] ${req.url}`);
        const name = req.params.name;
        let god;
        db.gods.filter(el => {
            if (el.name === name) {
                let i = db.gods.indexOf(el);
                god = el;
                i !== -1 && db.gods.splice(i, 1);
            };
        });
        res.status(201).json({ msg: "Deleted", result: god });

    });

}


