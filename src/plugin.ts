import hljs from 'highlight.js';
import { definer } from 'highlightjs-graphql';
import { Application } from 'typedoc';
import { Converter } from 'typedoc/dist/lib/converter';

export class GraphQLPlugin {
  initialize(app: Application): void {
    app.on(Converter.EVENT_BEGIN, () => {
      hljs.registerLanguage('graphql', definer);
    });
  }
}
