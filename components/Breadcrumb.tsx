import { FC, useState } from 'react'

const data = {
  name: 'Project Name',
  href: '#',
  breadcrumbs: [
    { id: 1, name: 'Project Owner', href: '#' },
  ],
}

interface IProps {
    repository: any
}

export default function Breadcrumb(props: IProps) {
    console.log("PROPS:", props)
    return(
        <nav aria-label="Breadcrumb">
            <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <li key={props.repository.id}>
                <div className="flex items-center">
                    <a href={ props.repository.owner ? props.repository.owner.html_url : '' } className="mr-2 text-sm font-medium text-gray-900" target="_blank">
                    {props.repository.full_name ? props.repository.full_name.split('/')[0] : ''}
                    </a>
                    <svg
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                    >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                    </svg>
                </div>
                </li>
            <li className="text-sm">
                <a href={props.repository.html_url} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600" target="_blank">
                {props.repository.name}
                </a>
            </li>
            </ol>
        </nav>
    )
}

