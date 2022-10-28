
export const getRepositoryRequest = async( ) => {
    const response = await fetch(`/api/repositories`);
    const data = await response.json();
    return data.repository;
}

export const getBranchesRequest = async( ) => {
    const response = await fetch(`/api/branches`);
    const data = await response.json();
    return data.branches;
}

export const getCommitsRequest = async(branch: string) => {
    const response = await fetch(`/api/commits?branch=${branch}`);
    const data = await response.json();
    return data.branches;
}

export const getHomeData = async(branch: string) => {
    const repository = await getRepositoryRequest();
    const branches = await getBranchesRequest();
    const commits = await getCommitsRequest(branch);
    return {repository, branches, commits}
}