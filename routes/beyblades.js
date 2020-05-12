module.exports = function(app, db){

    app.get('/beyblades', (req, res) => {
        res.status(200).json(db.beyblades);
    });

    app.get('/beyblades/:owner', (req, res) => {
        const beast = req.params.beast;
        const beyblade = db.beyblades.filter(el => {
            return el.beast == beast;
        })
        res.status(200).json(beyblade);
    });
    
    app.post('/beyblades', (req, res) => {
        const beyblade = {
            beast: req.body.beast,
            owner: req.body.owner,
            team: req.body.team
        };
        db.beyblades.push(beyblade);
        res.status(201).json({ msg: "Created", result: beyblade });
    });
    
    app.put('/beyblades/:beast', (req, res) => {
        const beast = req.params.beast;
        const team = req.body.team;
        const owner = req.body.owner;
        db.beyblades.filter(el => {
            if (el.beast == beast) {
                el.team = team;
                el.owner = owner;
            }
        });
        const beyblade = {
            beast: beast,
            team: team,
            owner: owner
        }
        res.status(201).json({ msg: "Updated", result: beyblade });
    });
    
    app.delete('/beyblades/:beast', (req, res) => {
        const beast = req.params.beast;
        let beyblade;
        db.beyblades.filter(el => {
            if (el.beast === beast) {
                let i = db.beyblades.indexOf(el);
                beyblade = el;
                i !== -1 && db.beyblades.splice(i, 1);
            };
        });
        res.status(201).json({ msg: "Deleted", result: beyblade });
    });

}


