module.exports = {


    getAll: (req, res) => {
        const db = req.app.get('db');
        db.all_products()
          .then(products => res.status(200).send(products))
          .catch(err => {
        res.status(500).send({errorMessage: 'Its broken'})
        console.log(err)
        })
    },

    add: (req, res) => {
        const db = req.app.get('db')
     
        const {nameInput, priceInput, imageInput} = req.body
        db.add_product([imageInput, nameInput, priceInput])
        .then( () => res.sendStatus(200))
        .catch( err => {
            res.status(500).send({errorMessage: 'Its broken'})
            console.log(err)
        })
    },
    delete: (req, res) => {
   
        const db = req.app.get('db')

        const { id } = req.params
       
        db.delete_product(id)
        .then( (products) => res.status(200).send(products) )
        .catch( err => {
        res.status(500).send({errorMessage: 'Its broken'})
        console.log(err)
        })
    },
    change: (req, res) => {
        const db = req.app.get('db')
        const {params} = req
        console.log('asfadsfasdf', params, req.body)
        db.update_item([params.id, req.body.nameInput, req.body.priceInput, req.body.imageInput]).then(product => res.sendStatus(200))
        .catch( err => {
        res.status(500).send({errorMessage: 'Its broken'})
        console.log(err)
        })
    },
    returnOne: (req, res) => {
        const db = req.app.get('db');
        const { id } = req.params;

        db.one_product( id )
          .then(product => {console.log(product)
              res.status(200).send(product)})
          .catch(err => {
        res.status(500).send({errorMessage: 'Its broken'})
        console.log(err)
        })
    }
}