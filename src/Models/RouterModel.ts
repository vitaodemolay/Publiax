import { Model, Action, Inject, Trigger } from 'exredux';
import { AuthModel } from './AuthModel';


@Model
export class RouterModel {
  pathname = '';

  @Inject auth?: AuthModel;

  @Action
  routeChange(pathname: string) {
    this.pathname = pathname;
    const path = pathname.split('/');
    const page = path[1];

    if (page === 'token') {
      const token = path[2];
      this.auth.saveToken(token);
    }
  }

  @Trigger(AuthModel, 'completed')
  protected authCompleted() {
    // tslint:disable-next-line: no-console
    console.log('Is Authenticated!');
  }
}
