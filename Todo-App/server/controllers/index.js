const DatabaseModel = require('../modal/index');


// To find all Todo list items
module.exports.getTodo = async (req, res)=> {
    const todo = await DatabaseModel.find();
    res.send(todo)
}

module.exports.saveTodo = async (req,res)=>{
    const {listItem} = req.body

    DatabaseModel
        .create({listItem})
        .then((data)=>{
            console.log("Added sucessfully");
            console.log(data);
            res.send(data)
        })
}

module.exports.updateTodo = async (req, res)=>{
    const {_id, listItem} = req.body;

    DatabaseModel
        .findByIdAndUpdate(_id , {listItem})
        .then(()=>res.send("Updated Successfully ..."))
        .catch((err)=> console.log(err))
}

module.exports.deleteTodo = async (req, res)=>{
    const {_id} = req.body;

    DatabaseModel
        .findByIdAndDelete(_id)
        .then(()=>res.send("Deleted Successfully ..."))
        .catch((err)=> console.log(err))
}