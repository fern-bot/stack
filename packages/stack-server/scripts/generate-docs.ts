import { currentUserCrudHandlers } from '@/app/api/v1/current-user/crud';
import { usersCrudHandlers } from '@/app/api/v1/users/crud';
import { parseOpenAPI } from '@/lib/openapi';
import yaml from 'yaml';

console.log(yaml.stringify(parseOpenAPI({
  endpointOptions: [
    {
      handler: usersCrudHandlers.listHandler,
      path: '/users'
    },
    {
      handler: usersCrudHandlers,
      path: '/users/{userId}',
    },
    {
      handler: currentUserCrudHandlers,
      path: '/current-user',
    }
  ],
})));