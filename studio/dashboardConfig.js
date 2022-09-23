export default {
  widgets: [
    {name: 'structure-menu'},
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
                  buildHookId: '632d0bddbb11711074bf2485',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-m7kbdwio',
                  apiId: '7d8fba80-ab9d-4b65-b741-b780992e19a7'
                },
                {
                  buildHookId: '632d0bdee94477105d6b28c6',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-dr665zus',
                  apiId: '58641f2d-ee4c-47da-8d70-fa89569ee4f9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/TatisLois/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-dr665zus.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
