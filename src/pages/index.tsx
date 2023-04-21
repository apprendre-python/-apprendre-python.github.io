import React from 'react'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'

export default function Home(): JSX.Element {
    const { siteConfig } = useDocusaurusContext()
    return (
        <Layout
            title={`${siteConfig.title}`}
            description={siteConfig.tagline}
        >
            <header className="mx-auto mt-16 max-w-7xl px-4 sm:mt-24 lg:mt-32">
                <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                    <div className="sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:text-left xl:col-span-4">
                        <p className="mx-auto mt-3 text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
                            {siteConfig.tagline}
                        </p>
                        <div className="mt-10 sm:flex sm:justify-center lg:justify-center">
                            <div className="rounded-md shadow">
                                <Link
                                    to="/docs/python/variable"
                                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-sky-600 px-8 py-3 text-base font-medium text-white hover:bg-sky-700 hover:text-white hover:no-underline md:py-4 md:px-10 md:text-lg"
                                >
                                    Commencer
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <main>
            </main>
        </Layout>
    )
}
