const express=require('express');
const router=express.Router();
const Post=require('../model/Post');


//find all post

router.get('/',async(req,res)=>{

    try{
        //find all data using find
        const posts=await Post.find();
        res.send({posts:posts});

    }
   catch(e){
       res.send({message:e});
   }
});




//get specific post

router.get('/:postId',async(req,res)=>{
//    console.log(req.params.postId) ;
try{
    const post=await Post.findById(req.params.postId);
    res.json({post:post});

}
catch(err){
    res.json({ message:err });
}
});



//post PostData

router.post('',async(req,res)=>{
    // console.log(req.body);

    const post=new Post({
        title:req.body.title,
        description:req.body.description

    });

// post.save().then((data=>{
//     res.json(data);

// })).catch(err=>{
//     res.json({message:err});
// });



    
    //using asynchronous method

  try{
    const savedPost=await post.save();
    res.json({data:savedPost});
  }
  catch(e){
      res.json({messge:e});
  }



});


//delete Data

router.delete('/:postId',async(req,res)=>{

 

  try{
    const removePost= await Post.remove({_id:req.params.postId});
    res.json({removePost});
  }
  catch(err){
      res.json({message:err});
  }


});


//update a post

router.patch('/:postId',async(req , res)=>{
   try{
       const updatedPost=await Post.updateOne (
           {_id:req.params.postId},
           { $set : {title:req.body.title ,description:req.body.description} }
           );

       res.json(updatedPost);
   }
   catch(err){
       res.json({message:err});
   }
});

module.exports=router;