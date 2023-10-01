const express = require('express')
const jwt = require('jsonwebtoken')
const cors = require('cors')
require('dotenv').config()
const app = express()
const port = process.env.PORT || 3000


// middleware 
app.use(cors())
app.use(express.json())




const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.umvg5wn.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        // await client.connect();


        const dressCollection = client.db('dnhFashionsDB').collection('dresses')
        const usersCollection = client.db('dnhFashionsDB').collection('users')
        const cartCollection = client.db('dnhFashionsDB').collection('carts')


        app.post('/jwt', (req, res) => {
            const user = req.body
            const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
                expiresIn: '1h',
            })

            res.send({ token })
        })

        // Save user email in DB
        app.put('/users/:email', async (req, res) => {
            const email = req.params.email
            const user = req.body
            const query = { email: email }
            const options = { upsert: true }
            const updateDoc = {
                $set: user,
            }
            const result = await usersCollection.updateOne(query, updateDoc, options)
            res.send(result)
        })

        // get all dress
        app.get('/initialDress', async (req, res) => {
            const result = await dressCollection.find().limit(10).toArray()
            res.send(result)
        })
        app.get('/allDress', async (req, res) => {
            const result = await dressCollection.find().toArray();
            res.send(result)
        })

        // get dress by category
        // get mens dress
        app.get('/category/mens', async (req, res) => {
            const query = { 'category': 'men' }
            const result = await dressCollection.find(query).toArray()
            res.send(result)
        })
        // get womens dress
        app.get('/category/womens', async (req, res) => {
            const query = { 'category': 'women' }
            const result = await dressCollection.find(query).toArray()
            res.send(result)
        })
        // get childrens dress
        app.get('/category/childrens', async (req, res) => {
            const query = { 'category': 'children' }
            const result = await dressCollection.find(query).toArray()
            res.send(result)
        })

        // get dress by ratings
        app.get('/rating/4.5', async (req, res) => {
            const preResult = await dressCollection.find().toArray();
            const result = []
            for (dressObject of preResult) {
                if (dressObject.rating >= 4.5) {
                    result.push(dressObject)
                }
            }
            res.send(result)
        })
        app.get('/rating/4', async (req, res) => {
            const preResult = await dressCollection.find().toArray();
            const result = []
            for (dressObject of preResult) {
                if (dressObject.rating >= 4) {
                    result.push(dressObject)
                }
            }
            res.send(result)
        })
        app.get('/rating/3.5', async (req, res) => {
            const preResult = await dressCollection.find().toArray();
            const result = []
            for (dressObject of preResult) {
                if (dressObject.rating >= 3.5) {
                    result.push(dressObject)
                }
            }
            res.send(result)
        })


        // get featured section dresses
        app.get('/featured', async (req, res) => {
            const query = { 'section': 'featured' };
            const result = await dressCollection.find(query).toArray();
            res.send(result)
        })

        // get spotlight section dresses
        app.get('/spotlight', async (req, res) => {
            const query = { 'section': 'spotlight' };
            const result = await dressCollection.find(query).toArray();
            res.send(result)
        })

        // get seasonal section dresses
        app.get('/seasonal/winter', async (req, res) => {
            const query = { 'section': 'winter' }
            const result = await dressCollection.find(query).toArray();
            res.send(result)
        })
        app.get('/seasonal/summer', async (req, res) => {
            const query = { 'section': 'summer' }
            const result = await dressCollection.find(query).toArray();
            res.send(result)
        })
        app.get('/seasonal/spring', async (req, res) => {
            const query = { 'section': 'spring' }
            const result = await dressCollection.find(query).toArray();
            res.send(result)
        })

        // get latest section dresses 
        app.get('/latest', async (req, res) => {
            const query = { 'section': 'latest' }
            const result = await dressCollection.find(query).toArray()
            res.send(result)
        })

        // add to cart
        app.post('/cart', async (req, res) => {
            const cartResult = await cartCollection.find().toArray()
            console.log(req.body);

            if (cartResult.length == 0) {
                const result = await cartCollection.insertOne(req.body)
                res.send(result)
                return
            } else {
                for (item of cartResult) {
                    if (item.id === req.body.id) {
                        res.send({ message: 'this item is already added' })
                        return

                    } else {
                        const result = await cartCollection.insertOne(req.body)
                        res.send(result)
                    }
                }
            }
        })
        // get cart item 
        app.get('/cart/:email', async (req, res) => {
            const email = req.params.email
            const query = { email: email }
            const result = await cartCollection.find(query).toArray()
            res.send(result)
        })

        app.get('/cart/cartList', async (req, res) => {
            const cartResult = await cartCollection.find().toArray()
            const dressResult = await dressCollection.find().toArray()
            for (item of cartResult) {
                if (item.id === _id) { }
            }
            console.log(cartResult);
        })

        app.delete('/deletItem/:id', async (req, res) => {
            const id = req.params.id
            const query = { _id: new ObjectId(id) }
            const result = await cartCollection.deleteOne(query)
            res.send(result)
        })







        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('dnh fashions server is running')
})

app.listen(port, () => {
    console.log(`dnh server running on port ${port}`)
})