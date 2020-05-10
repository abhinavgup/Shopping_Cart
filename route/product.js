const express = require('express')
const { Products } = require('../db')

var prod ;
const route = express.Router()

route.get('/', async (req, res) => {
  res.send(await Products.findAll())
   
 
})

route.post('/', async (req, res) => {


  //  prod = 
    
  //       {
       
  //        imagePath:"https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2019/01/plant3-free-img.jpg",
  //        Description:'Plants',
  //        name:'Boncellensis Secullant',
  //        price:500
      
            
  //     ,

      
  //       imagePath:"https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2019/01/plant3-free-img.jpg",
  //       Description:'cactus',
  //       name:'Cleistocactus',
  //       price:650

  //     ,

          
  //     imagePath:"https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2019/01/plant3-free-img.jpg",
  //       Description:'Plants',
  //       name:'Green Soil Lotus',
  //       price:200


  //       ,


  //       imagePath:"https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2019/01/plant3-free-img.jpg",
  //       Description:'Plants',
  //       name:'Money Plant',
  //       price:250

  //       ,


  //       imagePath:"https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2019/01/plant3-free-img.jpg",
  //       Description:'cactus',
  //       name:'Old Lady Cactus',
  //       price:700
      
  //       ,

  //       imagePath:"https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2019/01/cactus2-free-img.jpg",
  //       Description:'Plants',
  //       name:'Piorro Quisquam',
  //       price:380
      

  //       ,

  //       imagePath:"https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2019/01/plant5-free-img.jpg",
  //       Description:'Plants',
  //       name:'Rattle Snake Tail',
  //       price:800
      

  //       ,

  //       imagePath:"https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2019/01/plant3-free-img.jpg",
  //       Description:'cactus',
  //       name:'Star Cactus',
  //       price:450 
      

    
  //     }

    
    
      const newProd = await Products.create({
     id:req.body.id,
     imagePath:req.body.imagePath,
     Description:req.body.Description,
     name:req.body.name,
     price:req.body.price



      })



  res.status(201).send(newProd )

})

module.exports = route