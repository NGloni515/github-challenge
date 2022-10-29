import httpMocks from 'node-mocks-http'
import { NextApiRequest, NextApiResponse } from "next";
import * as branchAPI from "../../pages/api/branches"
import * as commitAPI from "../../pages/api/commits"
import * as repoAPI from "../../pages/api/repositories"
import { BRANCHES_1, REPOSITORY_1, COMMITS_1 } from '../mockedData/data1';

jest.mock('axios')

export const mocksInit = () => {
    
    //@ts-ignore
    branchAPI.getBranches = jest.fn((req,res) => {
        console.log('getBranches...', req.method);
        switch(req.method) {
            case ("GET"): {
                return BRANCHES_1;
            }
        }}
    );

    //@ts-ignore
    commitAPI.getCommits = jest.fn((req,res) => {
        console.log('getCommits...', req.method);
        switch(req.method) {
            case ("GET"): {
                return COMMITS_1;
            }
        }}
    );

    //@ts-ignore
    repoAPI.getRepository = jest.fn((req,res) => {
        console.log('getRepository...', req.method);
        switch(req.method) {
            case ("GET"): {
                return REPOSITORY_1;
            }
        }}
    );

}

mocksInit();

describe('API', () => {
    test('GET Branches', async() => {
        const mockReq = httpMocks.createRequest<NextApiRequest>();
        const mockRes = httpMocks.createResponse<NextApiResponse>();
        mockReq.method = "GET"
        const branches = await branchAPI.getBranches(mockReq,mockRes)
        expect(BRANCHES_1).toBe(branches);
    })

    test('GET Repository', async() => {
        const mockReq = httpMocks.createRequest<NextApiRequest>();
        const mockRes = httpMocks.createResponse<NextApiResponse>();
        mockReq.method = "GET"
        const repository = await repoAPI.getRepository(mockReq,mockRes)
        expect(REPOSITORY_1).toBe(repository);
    })

    test('GET Commits', async() => {
        const mockReq = httpMocks.createRequest<NextApiRequest>();
        const mockRes = httpMocks.createResponse<NextApiResponse>();
        mockReq.method = "GET"
        const commits = await commitAPI.getCommits(mockReq,mockRes)
        expect(COMMITS_1).toBe(commits);
    })
  
  });