import '@emotion/react'
import { Theme as MaterialTheme } from '@mui/material/styles';

declare module '@emotion/react' {
  export interface Theme extends MaterialTheme {}
}