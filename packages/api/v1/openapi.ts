import { generateOpenApi } from '@ts-rest/open-api';

import { NEXT_PUBLIC_WEBAPP_URL } from '@documenso/lib/constants/app';

import { ApiContractV1 } from './contract';

export const OpenAPIV1 = Object.assign(
  generateOpenApi(
    ApiContractV1,
    {
      info: {
        title: ' 0xDocHub API',
        version: '1.0.0',
        description: 'The 0xDocHub API for retrieving, creating, updating and deleting documents.',
      },
      servers: [
        {
          url: NEXT_PUBLIC_WEBAPP_URL(),
        },
      ],
    },
    {
      setOperationId: true,
    },
  ),
  {
    components: {
      securitySchemes: {
        authorization: {
          type: 'apiKey',
          in: 'header',
          name: 'Authorization',
        },
      },
    },
    security: [
      {
        authorization: [],
      },
    ],
  },
);
