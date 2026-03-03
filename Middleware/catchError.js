export default function catchError(functions){
    return (req,res) => {
        functions(req,res).catch((error) => {
            res.status(500).json({message: "Internal Server Error", error: error.message})
        }
    )}
}