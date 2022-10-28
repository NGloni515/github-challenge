import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

type Data = 
| { msg: string }
| { commits: [] | null}


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  
  
  switch( req.method ) {
    case 'GET':
      return getCommits(req, res)
    default:
      return res.status(400).json({
        msg: 'Bad request'
      })
  }
  
}

export const getCommits = async(req: NextApiRequest, res: NextApiResponse<Data>) => {
    console.log("GET COMMITS: ",req.query.branch)
    const branch = req.query.branch || "main"
  const commits : any | null = (await axios.get("https://api.github.com/repos/NGloni515/github-challenge/commits?sha="+branch,{'headers':{'Authorization': "token "+process.env.GITHUB_PRIVATE_KEY}})).data
  console.log("commits: ",commits)
  if(commits){
    return res.status(201).json({ commits, msg:'Commits data retrieved succesfully for branch: '+ branch })
  }else{
    return res.status(404).json({ msg:'Commits do not exist' })
  }
}