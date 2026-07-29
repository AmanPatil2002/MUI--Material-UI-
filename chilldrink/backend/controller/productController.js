const db = require("../config/db");

const getProduct = (req, res) => {
  db.query("SELECT * FROM product", (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
};

const postProduct = (req, res) =>{
  const {name,price,desc,image} = req.body;
  const sql =`INSERT INTO product(pname,price,desc,image) VALUES(?,?,?,?) `;
     db.query(sql ,[name, price,desc, image],(err,result)=>{
        if(err){
            return res.status(500).json(err);
        }
        res.json({
            message:"Added Successfully",
            id: result.insertId,
            name, price,desc,image
    });
    })
};

const updateProduct = (req, res) => {
  const { id } = req.params;
    const {name,price,desc,image} = req.body;
   const sql = `UPDATE product SET pname=?,price=?, desc=?, image=? WHERE id=?`;
  db.query(sql,[name, price,desc, image ,id],(err, result) => {
      if (err) {
        return res.status(500).json(err);
      }
      return res.json({message: "Updated Successfully",});
    }
  );
};

const deleteProduct = (req, res) => {
  const { id } = req.params;
  const sql = "DELETE FROM product WHERE id = ?";
  db.query(sql, [id], (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }
    res.json({message: "Deleted Successfully",});
  });
};

module.exports = { getProduct ,postProduct ,updateProduct,deleteProduct};