import hljs from 'highlight.js';
import { definer } from 'highlightjs-graphql';
import { Application } from 'typedoc';

export class GraphQLPlugin {
  initialize(app: Application): void {
    hljs.registerLanguage('graphql', definer);
  }
}
