/**
 * Asynchronously loads the component for SearchForm
 */

import React from 'react'

import loadable from '../../utils/loadable'
import LoadingIndicator from '../LoadingIndicator'

export default loadable(() => import('./index'), {
  fallback: <LoadingIndicator />,
})
