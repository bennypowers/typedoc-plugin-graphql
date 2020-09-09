import { Application } from 'typedoc';
import { GraphQLPlugin } from './plugin';

export = (host: Application): void => {
  const plugin = new GraphQLPlugin();
  plugin.initialize(host.application);
};
