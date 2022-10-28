import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

type Data = 
| { msg: string }
| { branches: [] | null}


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  
  
  switch( req.method ) {
    case 'GET':
      return getBranches(req, res)
    default:
      return res.status(400).json({
        msg: 'Bad request'
      })
  }
  
}

export const getBranches = async(req: NextApiRequest, res: NextApiResponse<Data>) => {
    console.log("GET BRANCHES: ")
  const branches : any | null = (await axios.get("https://api.github.com/repos/NGloni515/github-challenge/branches",{'headers':{'Authorization': "token "+process.env.GITHUB_PRIVATE_KEY}})).data
  if(branches){
    return res.status(201).json({ branches, msg:'Branches data retrieved succesfully' })
  }else{
    return res.status(404).json({ msg:'Branches do not exist' })
  }
}