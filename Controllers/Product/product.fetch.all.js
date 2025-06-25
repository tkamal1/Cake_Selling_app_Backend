import Product from "../../Models/model.product.js";

const ProductFetchAlldata = async (req ,res)=>{
  try {
    const ProductFetchResponse = await Product.find();
    if(!ProductFetchResponse){
      return res.status(404).json({
        success:false,
        msg:"Product not Found",
      });
    }
    return res.status(200).json({
      success:true,
      msg:"Product found Successfuly",
      data:ProductFetchResponse
    })
  } catch (error) {
     return res.status(500).json({
        success:false,
        msg:"server error"
      });
  }
};

export default ProductFetchAlldata;

