module.exports = function (sequelize, DataTypes) {
  const Customer = sequelize.define("customer", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 140],
      }
    },
  },
  );

  Customer.associate = function(models) {
    models.customer.hasMany(models.burger);
  };
  return Customer;
};