import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

type Data = 
| { msg: string }
| { repository: {} | null}


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  
  
  switch( req.method ) {
    case 'GET':
      return getRepository(req, res)
    default:
      return res.status(400).json({
        msg: 'Bad request'
      })
  }
  
}

export const getRepository = async(req: NextApiRequest, res: NextApiResponse<Data>) => {
    console.log("GET REPOSITORY: ")
  const repository : any | null = (await axios.get("https://api.github.com/repos/NGloni515/github-challenge",{'headers':{'Authorization': "token "+process.env.GITHUB_PRIVATE_KEY}})).data
  console.log("repository: ",repository)
  if(repository){
    return res.status(201).json({ repository, msg:'Repository data retrieved succesfully' })
  }else{
    return res.status(404).json({ msg:'Repository do not exist' })
  }
}