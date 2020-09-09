import hljs from 'highlight.js';
// @ts-expect-error: no types 🤷‍♂️
import { definer } from 'highlightjs-graphql';
import { Application } from 'typedoc';
import { Converter } from 'typedoc/dist/lib/converter';

export class GraphQLPlugin {
  initialize(app: Application): void {
    hljs.registerLanguage('graphql', definer);
    app.on(Converter.EVENT_BEGIN, () => {
      hljs.registerLanguage('graphql', definer);
    });
  }
}
