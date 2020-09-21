import hljs from 'highlight.js';
import { definer } from 'highlightjs-graphql';

export class GraphQLPlugin {
  initialize(): void {
    hljs.registerLanguage('graphql', definer);
  }
}
