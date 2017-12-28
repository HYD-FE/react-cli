
export default [
  {
    name: '表格',
    url: '/table',
    children: {
      color: '#0e3a79',
      list: [
        { name: 'table', url: '/table' },
        { name: 'table2', url: '/table2' },
        {
          name: 'table3',
          url: '/table3',
          children: {
            color: '#1557a7',
            list: [
              { name: 'thirdtest', url: '/lala' },
              { name: 'thirdtest2', url: '/lala2' }
            ]
          }
        }
      ]
    }
  },
  {
    name: '树',
    url: '/tree'
  }
]
