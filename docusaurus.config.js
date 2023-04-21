// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const path = require('path')

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')
const math = require('remark-math');
const katex = require('rehype-katex');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'apprendre-python',
    tagline: 'Cours et exercices en Python, conforme au programme de CPGE (MP, PC, PSI, PT, BCPST)',
    url: 'https://apprendre-python.github.io',
    baseUrl: '/',
    // onBrokenLinks: "throw",
    onBrokenLinks: 'warn',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'apprendre-python', // Usually your GitHub org/user name.
    projectName: 'apprendre-python.github.io', // Usually your repo name.
    deploymentBranch: 'gh-pages',
    trailingSlash: false,

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'fr',
        locales: ['fr']
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    remarkPlugins: [math],
                    rehypePlugins: [katex],
                    // editUrl:
                    //     'https://github.com/apprendre-python/apprendre-python.github.io',
                },
                blog: false,
                theme: {
                    customCss: require.resolve('./src/css/custom.css')
                },
            })
        ]
    ],
    stylesheets: [
        {
          href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
          type: 'text/css',
          integrity:
            'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
          crossorigin: 'anonymous',
        },
      ],
    themes: [
        [
            // @ts-ignore
            require.resolve('@easyops-cn/docusaurus-search-local'),
            /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
            // @ts-ignore
            ({
                hashed: true
            })
        ]
    ],

    
    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            navbar: {
                title: 'apprendre-python',
                logo: {
                    alt: 'apprendre-python Logo',
                    src: 'img/logo.svg'
                },
                items: [
                    {
                        type: 'doc',
                        docId: 'python/intro',
                        position: 'left',
                        label: 'Python'
                    },
                    {
                        href: 'https://github.com/apprendre-python/apprendre-python.github.io',
                        label: 'GitHub',
                        position: 'right'
                    }
                ]
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme
            },
        }),

    plugins: [
        async function tailwind() {
            return {
                name: 'tailwindcss',
                configurePostCss(postcssOptions) {
                    // Appends TailwindCSS and AutoPrefixer.
                    postcssOptions.plugins.push(require('tailwindcss'))
                    postcssOptions.plugins.push(require('autoprefixer'))
                    return postcssOptions
                }
            }
        },
        async function disableUsedExports() {
            return {
                name: 'disable-used-exports',
                configureWebpack() {
                    return {
                        optimization: {
                            usedExports: false
                        }
                    }
                }
            }
        },
        async function resolveReact() {
            return {
                name: 'resolve-react',
                configureWebpack() {
                    return {
                        resolve: {
                            alias: {
                                react: path.resolve('./node_modules/react')
                            }
                        }
                    }
                }
            }
        }
    ],

    scripts: [
        {
            src: 'https://plausible.pixellab.nz/js/plausible.js',
            defer: true,
            'data-domain': 'apprendre-python.github.io'
        }
    ]
}

module.exports = config
