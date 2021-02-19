const THRESHOLDS = {
  PHONE: 500,
  SMALL_TABLET: 800,
  TABLET: 1100
}

export const isPhone = `@media screen and (max-width: ${THRESHOLDS.PHONE}px)`
export const isSmallTablet = `@media screen and (max-width: ${THRESHOLDS.SMALL_TABLET}px)`
export const isTablet = `@media screen and (max-width: ${THRESHOLDS.TABLET}px)`
