ProductController
Get Products -DONE.
Add a Product -DONE.
Get one Product -DONE.
Filter Product -DONE.
Rate Product -
Add items to Cart -
Get items of Cart -
Remove items from cart -

UserController
SignUp - Email,Name,Password,TypeOfUser(customer,seller)- Done

SignIn -(Email,Password) - Done

todo-

handle req.body for post request to add product
handle using bodyparser/express.json({urlencoded})

- configure multer for image uploading, setup the path properly
  id: 1,
  name: "Product 1",
  desc: "Description for Product 1",
  sizes: ["M", "S", "L"],
  imageUrl:
  "https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg",
  category: "Category1",
  price: 19.99,

Basic authorization

//Cors policy
// it is to limit the access to the api, i.e to only handle request from limited client, to restrict unauthorized access
//if we want to give access to a specific route
//if we want to give access for all client req,
'\*"
server.use((req,res,next)=>{
res.header('Access-Control-Allow-Origin','http://localhost:5500');
res.header('Access-Control-Allow-Header','_');
res.header('Access-Control-Allow-Method','_');
// return ok for preflight request
if(req.method=='OPTIONS){
return res.sendStatus(200);
}
next();
})
//for all client req
server.use((req,res,next)=>{
res.header('Access-Control-Allow-Origin','\*')
})

preflight request :
A verification request sent by the client before making an actual request.
