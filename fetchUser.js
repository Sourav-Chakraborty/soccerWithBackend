const jwt=require('jsonwebtoken')

const JWTSecret="$$You are not $welcome&&#"

const fetchUser=(token)=>{
    const data=jwt.verify(token,JWTSecret)
    const email=data.user.email
    return email
}

module.exports=fetchUser