import { useState } from 'react'

interface IProp{
    commits: Array<any>
}

export default function Table(props: IProp) {
    return(
        <div data-testid="commits-table" className='bg-gray overflow-auto rounded-lg shadow'>
            <table className='w-full'>
            <thead className='bg-gray-50 border-b-2 border-gray-200'>
                <tr>
                <th className='p-3 text-sm font-semibold tracking-wide text-left'>Comment </th>
                <th className='w-60 p-3 text-sm font-semibold tracking-wide text-left'>Authored</th>
                <th className='w-60 p-3 text-sm font-semibold tracking-wide text-left'>Commited By</th>
                <th className='w-32 p-3 text-sm font-semibold tracking-wide text-left'>Date</th>
                <th className='w-32 p-3 text-sm font-semibold tracking-wide text-left'>URL</th>
                <th className='w-32 p-3 text-sm font-semibold tracking-wide text-left'>Hash</th>
                </tr>
            </thead>
            <tbody className='divide-y divide-gray-100'>
                {props.commits && props.commits.map((commit, index)=>(
                    <tr className={`${index%2 === 0 ? 'bg-white' : 'bg-gray-50'} `}>
                        <td className='w-32 p-3 text-sm text-gray-700 whitespace-nowrap'>{commit.commit.committer.date.split('T')[0]}</td>
                        <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>{commit.commit.message}</td>
                        <td className='w-60 p-3 text-sm text-gray-700 whitespace-nowrap'>{commit.commit.author.name}</td>
                        <td className='w-60 p-3 text-sm text-gray-700 whitespace-nowrap'>{commit.commit.committer.name}</td>
                        <td className='w-32 p-3 text-sm text-gray-700 whitespace-nowrap'><a href={commit.html_url} className='text-blue-500 hover:underline' target={'_blank'} >url</a> </td>
                        <td className='w-32 p-3 text-sm text-gray-700 whitespace-nowrap'>{commit.sha}</td>
                    </tr>
                ))}
            </tbody>
            </table>
        </div>
    )
}
