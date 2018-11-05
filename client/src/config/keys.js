import {
  clientId as PCI,
  clientSecret as PCS
} from './prod_keys';

import {
  clientId as DCI,
  clientSecret as DCS
} from './dev_keys';

export const clientId = process.env.APP_ENV === 'production' ? PCI : DCI;
export const clientSecret = process.env.APP_ENV === 'production' ? PCS : DCS;
