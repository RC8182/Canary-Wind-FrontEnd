import { extendTheme } from "@chakra-ui/react";

export const customTheme = extendTheme({
    components: {
      Table: {
        variants: {
          mytable: {
            th: {
                color: '#0093D1',

            }
          }
        }
      }
    }
  });