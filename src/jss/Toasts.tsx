import { Config } from '../definitions/config'
import jss from 'jss'
const color = require('color')
// @ts-ignore
import camelCase from 'jss-camel-case'
// @ts-ignore
import nested from 'jss-nested'
// @ts-ignore
import increaseSpecificity from 'jss-increase-specificity'

import CodeHighlighting from './CodeHighlighting'

// @ts-ignore
jss.use(camelCase(), nested(), increaseSpecificity())

export default (config: Config) => {
  const hljs = config.scheme === 'dark' ? CodeHighlighting.dark : CodeHighlighting.light
  const styles = {
    'toast-box': {
      zIndex: '2147483000 !important',
      position: 'fixed !important',
      [config.position.y]: '80px !important',
      [config.position.x]: '0 !important',
      [`padding-${config.position.x}`]: '20px !important',
      width: '300px !important',
      maxHeight: `${config.notifications.toasts.maxHeight} !important`,
      overflow: 'hidden',
      display: 'flex !important',
      opacity: '1 !important',
      padding: '7px 0', // To prevent shadows from being cut
      [`padding-${config.position.y}`]: '20px !important',
      flexDirection: 'column-reverse !important',
      transition: 'opacity 0.4s ease,transform 0.2s cubic-bezier(0.47, 0, 0.75, 0.72)',
      transform: 'initial !important',
    },

    'toast': {
      display: 'block !important',
      flex: '1 0 100% !important',
      textAlign: `left !important`,
      transition: 'all 0.5s cubic-bezier(0, 0.8, 0.25, 1.18) !important',
      '& a': {
        color: '#1296CF',
        textDecoration: 'none',
        '&:hover': {
          textDecoration: 'underline'
        }
      },
      '& code': {
        backgroundColor: 'rgba(0, 0, 0, 0.2)'
      },
      '& pre': {
        margin: '6px 0',
        whiteSpace: 'pre-wrap',
        wordWrap: 'break-word',
      },
      '& .hljs': {
        border: '2px solid #282b30',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        fontFamily: 'Menlo, Consolas, Monaco, monospace',
        fontSize: '14px',
        lineHeight: '16px',
        padding: '7px',
        display: 'block',
        borderRadius: '5px',
        color: '#839496 !important',
        fontWeight: '100 !important'
      },
      ...hljs
    },
    'toast-hidden': {
      opacity: '0 !important',
      transform: `translate(${config.position.x === 'left' ? '-20px' : '20px'}) !important`,
    },
    'toast-visible': {
      opacity: '1 !important',
      transform: 'initial !important',
    },

    'toast-avatar': {
      height: '35px !important',
      margin: config.position.x === 'right' ? '6px 0 0 15px !important' : '6px 15px 0 0 !important',
      float: `${config.position.x} !important`,
      borderRadius: '100%',
      pointerEvents: 'initial',
      cursor: 'pointer'
    },
    'toast-message': {
      maxWidth: 'calc(100% - 100px) !important',
      backgroundColor: `${config.scheme === 'dark' ? '#36393E' : '#FFFFFF'} !important`,
      fontFamily: `'Roboto', sans-serif !important`,
      display: 'inline-block !important',
      fontSize: '15px !important',
      color: `${config.scheme === 'dark' ? 'rgba(255,255,255,0.7)' : '#6e7a89'} !important`,
      marginTop: '6px !important',
      overflowWrap: 'break-word !important',
      MsWordBreak: 'break-all !important',
      wordWrap: 'break-word !important',
      wordBreak: 'break-word !important',
      lineHeight: '1.3em !important',
      whiteSpace: 'pre-wrap !important',
      WebkitBoxShadow: '0 2px 8px 0 rgba(35,47,53,0.09) !important',
      boxShadow: '0 2px 8px 0 rgba(35,47,53,0.5) !important',
      padding: '17px 20px !important',
      position: 'relative !important',
      borderTopLeftRadius: config.position.x === 'right' ? '6px !important' : '0 !important',
      borderTopRightRadius: config.position.x === 'left' ? '6px !important' : '0 !important',
      borderBottomLeftRadius: '6px !important',
      borderBottomRightRadius: '6px !important',
      float: `${config.position.x} !important`,
      '&:after': {
        content: '"" !important',
        position: 'absolute !important',
        top: '0 !important',
        [config.position.x]: '-10px !important',
        borderWidth: config.position.x === 'right' ? '10px 10px 0 0 !important' : '10px 0 0 10px !important',
        borderStyle: 'solid !important',
        borderColor: `${config.scheme === 'dark' ?  '#36393E' : '#FFFFFF'} transparent !important`,
        display: 'block !important',
        width: '0 !important',
      }
    },
  }

  return jss.createStyleSheet(styles).attach().classes
}
