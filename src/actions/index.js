export const Submitform=(username,password)=>{
    return{
        type:'Submitdata',
        payload:{
            id:Date.now()+Math.random()*2,
            username:username,
            password:password
        }
    }
}