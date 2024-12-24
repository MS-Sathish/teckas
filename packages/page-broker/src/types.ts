// Copyright 2017-2024 @polkadot/app-broker authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { CoreWorkload, CoreWorkplan } from '@polkadot/react-hooks/types';

export interface InfoRow {
  task?: string | number,
  maskBits?: number,
  core: number
  mask?: string
  start?: string | null,
  end?: string | null
  owner?: string
  leaseLength?: number
  endBlock?: number
  type?: CoreTimeTypes
}

export interface CoreInfo {
  core: number,
  workload: CoreWorkloadType[] | undefined,
  workplan: CoreWorkplanType[] | undefined
}

export interface statsType {
  idles: number,
  pools: number,
  tasks: number
}

export enum CoreTimeTypes {
  'Reservation',
  'Lease',
  'Bulk Coretime',
  'On Demand'
}

export interface CoreWorkplanType extends CoreWorkplan {
  lastBlock: number,
  type: CoreTimeTypes
}

export interface CoreWorkloadType extends CoreWorkload {
  lastBlock: number,
  type: CoreTimeTypes
}
