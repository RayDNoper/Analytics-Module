const baseUrl = process.env.REACT_APP_API_URL

export const openSearchDashboard = process.env.REACT_APP_OPENSEARCH_DASHBOARD_URL

export const getTesting = (): string => {
  return baseUrl + '/testing'
}

export const overviewMetricPreferences = (): string => {
  return baseUrl + '/overview/preferences'
}

export const overviewMetrics = (metric: string): string => {
  return baseUrl + `/overview/metrics?metric=${metric}`
}
