import dbConnect from "../../utils/dbConnection";

dbConnect();


export default async (req,res)=>{
    res.json({test:'test'});
}