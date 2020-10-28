// Copyright 2020 H2O.ai, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import React from 'react'
import { stylesheet } from 'typestyle'
import { cards, Format } from './layout'
import { bond, Card, Rec, S } from './qd'
import { clas } from './theme'

const
  css = stylesheet({
    card: {
      display: 'flex',
      flexDirection: 'column',
      padding: 15,
    },
    values: {
      display: 'flex',
      alignItems: 'baseline',
    },
    aux_value: {
      marginLeft: 5,
      color: 'var(--text6)',
    },
    caption: {
      color: 'var(--text5)',
    }
  })

/** Create a stat card displaying a primary value, an auxiliary value and a caption. */
interface State {
  /** The card's title. */
  title: S
  /** The primary value displayed. */
  value: S
  /** The auxiliary value displayed next to the primary value. */
  aux_value: S
  /** The caption displayed below the primary value. */
  caption: S
  /** Data for this card. */
  data?: Rec
}

export const
  View = bond(({ name, state: s, changed }: Card<State>) => {
    const render = () => (
      <div data-test={name} className={css.card}>
        <Format data={s.data} format={s.title} className='s12 w6' />
        <div className={css.values}>
          <Format data={s.data} defaultValue={s.value} format={s.value} className='s40 w2' />
          <Format data={s.data} format={s.aux_value} className={css.aux_value} />
        </div>
        <Format data={s.data} format={s.caption} className={clas(css.caption, 's13')} />
      </div>
    )

    return { render, changed }
  })

cards.register('large_stat', View)