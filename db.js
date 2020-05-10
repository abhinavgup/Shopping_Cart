const Sequelize1 = require('sequelize');
var bodyParser = require('body-parser');



const db1 = new Sequelize1('cart','abhinav1','iitfiitjee',{

  host: 'localhost',
    dialect: 'mysql',
    
    pool:{

        max:25,
        min:0

    }


})

// var connection = mysql.createConnection(db1);

// function InsertintoDb(username, password, cb){
  
//   try {
//       connection.query(`Insert into user1 (username,password) Values('${username}', '${password}')`, function(error, results){
//           if(error) throw error;
//           cb();
//       })
//   }
//  catch(e){
//      console.log(e);
//  }
// }



// function getfromDb(user, cb){
//   connection.query(`Select password from user1 where username = '${user}'`, function(error, results){
//       if(error) throw error;
//       cb(results);
//   })
// }


const Users = db1.define('user',{

    id :{

        type:Sequelize1.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
   

    name:{

        type:Sequelize1.STRING,
        // allowNull: false
    }

})




const Products = db1.define('product',{

   id:{

    type:Sequelize1.INTEGER,
    autoIncrement:true,
    primaryKey:true

   },
   

    imagePath:{

      type:Sequelize1.STRING


    },


    Description:{
    
        type:Sequelize1.STRING

    },

    name:{

        type:Sequelize1.STRING,
        // allowNull: false
        
    },


    price:{

        type:Sequelize1.FLOAT,
        // allowNull: false
    }

})

db1
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


  db1.sync({ force: true })
  .then(() => {
    console.log(`Database & tables created!`)
  })




module.exports={


    Users,Products,
    // connection: connection,
    // InsertintoDb: InsertintoDb,
    // getfromDb: getfromDb
}