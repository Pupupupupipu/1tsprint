const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('films', 'root', '', {
  host: '127.0.0.1',
  dialect: 'mysql'
});

const User = sequelize.define('User', {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    login: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    sub: {
        type: DataTypes.STRING,
        allowNull: false
      }
  }, {
    // Other model options go here
    tableName:'users',
  });

  const Film = sequelize.define('Film', {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false
    },
    smallDescription: {
        type: DataTypes.STRING,
        allowNull: false
      },
    fullDescription: {
        type: DataTypes.STRING,
        allowNull: false
    },
    year: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    photo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    video: {
        type: DataTypes.STRING,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
  }, {
    // Other model options go here
    tableName:'films',
  });

  const Sub = sequelize.define('Sub', {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    sale: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
      },
    img: {
        type: DataTypes.STRING,
        allowNull: false
    },
    img_sale: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
  }, {
    // Other model options go here
    tableName:'subs',
  }); 

  User.belongsTo(Sub, { foreignKey: 'sub'})

;(async() =>{
    try {
        await User.sync({
            alter: true,
            force: false
        })

        //create
        const user = await User.create({ 
            login: "Jane@example.com", 
            password: crypto.generate('sha-1', "Doe"),
            sub: "pup" 
        });

        //update
        user.sub = 'sprint'
        user.save()

        //delete
        const userPk = await User.findByPk(1)
        userPk.destroy()

        const allUsers = await User.findAll()

        const film = await Film.findAll({
            where:{
                country: 'Россия'
            }
        })
        console.log("Jane's auto-generated ID:", jane.id);
    } catch (error) {
        console.error(error);
    }
});