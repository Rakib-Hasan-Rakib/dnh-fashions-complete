const express = require('express')
const cors = require('cors')
require('dotenv').config()
const app = express()
const port = process.env.PORT || 3000


// middleware 
app.use(cors())
app.use(express.json())




const { MongoClient, ServerApiVersion } = require('mongodb');
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