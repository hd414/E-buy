const Cart = require('../models/cart');
const slugify = require('slugify');
const { countDocuments } = require('../models/cart');

exports.addToCart = async (req, res) => {

    try {
        const cart = await Cart.findOne({ user: req.user._id });
        // return res.send(user);

        if (cart) {
            // return res.send(user);
            console.log(cart.cartItems)
            let itemInd = cart.cartItems.findIndex((p) => {
                console.log(p.product)
                JSON.stringify(p.product) == JSON.stringify(req.body.cartItems.product)
            })

            console.log('itemInd ', itemInd);
            console.log(req.body.cartItems.product)

            if (itemInd > -1) {

                let quan = cart.cartItems[itemInd].quantity + req.body.cartItems.quantity;
                let newItemObj = { ...cart.cartItems[itemInd], quantity: quan };
                cart.cartItems[itemInd] = newItemObj;
            }
            else
                cart.cartItems.push(req.body.cartItems);

            const updatedCart = await cart.save();
            res.status(201).send(updatedCart);
        }
        else {
            const cart = new Cart({
                user: req.user._id,
                cartItems: [req.body.cartItems]
            })

            const savedCart = await cart.save();
            res.status(201).send(savedCart);

        }




    }
    catch (e) {
        res.status(400).send({ e });
    }
}

