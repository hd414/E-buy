const Cart = require('../models/cart');
const slugify = require('slugify');
const { countDocuments } = require('../models/cart');

exports.addToCart = async (req, res) => {

    try {
        const cart = await Cart.findOne({ user: req.user._id });
        // return res.send(cart);

        if (cart) {
            // return res.send(cart.cartItems);
            // console.log(cart.cartItems)
            // let itemInd = cart.cartItems.findIndex((p) => {
            //     // console.log(p.product)
            //     JSON.stringify(p.product) == JSON.stringify(req.body.cartItems.product)
            // })
            let itemInd = -1;
            for (let i = 0; i < cart.cartItems.length; i++) {
                if (cart.cartItems[i].product == req.body.cartItems.product) {
                    itemInd = i;
                    break;
                }
            }

            // console.log("itemInd", itemInd);
            // return res.send(cart.cartItems[0].product);
            // console.log('itemInd ', itemInd);
            // console.log(req.body.cartItems.product)

            if (itemInd > -1) {
                console.log("error", cart.cartItems[itemInd].quantity)
                // res.send(cart.cartItems[itemInd].quantity);
                let quan = cart.cartItems[itemInd].quantity + req.body.cartItems.quantity;
                const { quantity, _id, product, price } = cart.cartItems[itemInd];
                let newItemObj = { quantity: quan, _id, product, price };
                // res.send(newItemObj);
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

