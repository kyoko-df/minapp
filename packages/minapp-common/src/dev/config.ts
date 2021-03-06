/******************************************************************
MIT License http://www.opensource.org/licenses/mit-license.php
Author Mora <qiuzhongleiabc@126.com> (https://github.com/qiu8310)
*******************************************************************/

import {ComponentAttr} from './Component'

export const JSON_REGEXP = /\.(?:json|cjson|jsonc)$/i

export const BASE_ATTRS: ComponentAttr[] = [
  {name: 'id'},
  {name: 'class'},
  {name: 'style', desc: ['组件的内联样式']},
  {name: 'hidden', desc: ['组件是否隐藏']},
  // {name: 'data-'},
]


export interface CustomAttr extends ComponentAttr {
  addBrace?: boolean // 是否加上 {{}}
}

export const EVENT_ATTRS: CustomAttr[] = [
  {name: 'touchstart'},
  {name: 'touchmove'},
  {name: 'touchcancel'},
  {name: 'touchend'},
  {name: 'tap'},
  {name: 'longpress', since: '1.5.0'},
  {name: 'longtap'},
  {name: 'transitionend'},
  {name: 'animationstart'},
  {name: 'animationiteration'},
  {name: 'animationend'},
]

export const CTRL_ATTRS: CustomAttr[] = [
  {name: 'if', addBrace: true},
  {name: 'elif', addBrace: true},
  {name: 'else', addBrace: true},
  {name: 'for', addBrace: true},
  {name: 'key'},
  {name: 'for-item'},
  {name: 'for-index'},
]
