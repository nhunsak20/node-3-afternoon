module.exports = {
    create: (req, res) => {
        const { name, description, price, image_url } = req.body
        const dbObj = req.app.get('db')
        dbObj.create_product([name, description, price, image_url]).then(food => {
            res.status(200).send(food)
        }).catch(err => res.status(500).send(err))
    },
    getOne: (req, res) => {
        const { id } = req.params
        const dbObj = req.app.get('db')
        dbObj.read_product(id).then(food => {
            res.status(200).send(food)
        }).catch(err => res.status(500).send(err))
    },
    getAll: (req, res) => {
        const dbObj = req.app.get('db')
        dbObj.read_products().then(foods => {
            res.status(200).send(foods)
        }).catch(err => res.status(500).send(err))
    },
    update: (req, res) => {
        const { id } = req.params
        const { desc } = req.query
        const dbObj = req.app.get('db')
        dbObj.update_product([id, desc]).then(food => {
            res.status(200).send(food)
        }).catch(err => res.status(500).send(err))
    },
    delete: (req, res) => {
        const { id } = req.params
        const dbObj = req.app.get('db')
        dbObj.delete_product(id).then(food => {
            res.status(200).send(food)
        }).catch(err => res.status(500).send(err))
    }
}