export class App {
  private router
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'welcome'], name: 'welcome', moduleId: 'src/welcome', nav: true, title: 'Welcome' },
      { route: 'users', name: 'users', moduleId: 'src/users', nav: true, title: 'Github Users' },
      { route: 'child-router', name: 'child-router', moduleId: 'src/child-router', nav: true, title: 'Child Router' }
    ]);

    this.router = router;
  }
}
