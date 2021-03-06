import { Component } from '@angular/core';

import { NavGroup } from 'projects/go-lib/src/public_api';

@Component({
  templateUrl: './table-docs.component.html'
})
export class TableDocsComponent {

  menuItems: Array<NavGroup> = [
    { routeTitle: 'Basics', subRoutes: [
      { route: './', routeTitle: 'Overview' },
      { route: './actions', routeTitle: 'Actions' },
      { route: './columns', routeTitle: 'Columns' },
      { route: './details', routeTitle: 'Details' },
      { route: './filters', routeTitle: 'Filters' },
      { route: './pagination', routeTitle: 'Pagination' },
      { route: './searching', routeTitle: 'Searching' },
      { route: './selection', routeTitle: 'Selection' },
      { route: './sorting', routeTitle: 'Sorting' },
      { route: './templating', routeTitle: 'Templating' }
    ]},
    { routeTitle: 'Advanced', subRoutes: [
      { route: './server-integration', routeTitle: 'Server-Side Integration' }
    ]}
  ];
}
