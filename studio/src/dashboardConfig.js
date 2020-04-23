export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ea1822483c9a63c6243eb93',
                  title: 'Sanity Studio',
                  name: 'sanity-latest-blog-studio',
                  apiId: '7f6133e3-7912-4200-b79b-33599a33bc85'
                },
                {
                  buildHookId: '5ea1822467c433ad2231c4b4',
                  title: 'Blog Website',
                  name: 'sanity-latest-blog',
                  apiId: '2d0b8b5d-18ca-43b8-aaf5-73b5f5a226fb'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/akulk5/sanity-latest-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-latest-blog.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
