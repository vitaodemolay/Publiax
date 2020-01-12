import { Model, Action, Inject, Trigger } from 'exredux';
import { AuthModel } from './AuthModel';
import { VagaDetalheModel } from './VagaDetalheModel';
import { DadosPessoaisModel } from './DadosPessoaisModel';


@Model
export class RouterModel {
  pathname = '';

  @Inject auth?: AuthModel;
  @Inject vagaDetalhe?: VagaDetalheModel;
  @Inject dadosPessoais?: DadosPessoaisModel;

  @Action
  routeChange(pathname: string) {
    this.pathname = pathname;
    const path = pathname.split('/');
    const page = path[1];

    if (page === 'token') {
      const token = path[2];
      this.auth.saveToken(token);
    }

    if (page === 'vagadetalhe') {
      const id = path[2];
      this.vagaDetalhe.setJobId(id);
    }

    if (page === 'candidatarvaga' && this.auth.isAuthenticated()) {
      const id = path[2];
      this.vagaDetalhe.setJobId(id);
    }
  }

  @Trigger(AuthModel, 'saveToken')
  protected authCompleted() {
    // tslint:disable-next-line: no-console
    console.log('Is Authenticated!');
  }

  @Trigger(VagaDetalheModel, 'setJobId')
  protected setJobIdCompleted() {
    // tslint:disable-next-line:no-console
    console.log('Job Id is Seted!');

    this.vagaDetalhe.get();
  }

  @Trigger(VagaDetalheModel, 'get')
  protected getVagaDetalheCompleted() {
    // tslint:disable-next-line:no-console
    console.log('Job get details is loaded!');
  }

  @Trigger(DadosPessoaisModel, 'getUserDataOnSource')
  protected getDadosPessoaisCompleted() {
    // tslint:disable-next-line:no-console
    console.log('User Data get is loaded!');
  }
}
