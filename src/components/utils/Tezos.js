import {TezosToolkit} from '@taquito/taquito';
import { wallet } from './Wallet';
export const tezos = new TezosToolkit("https://jakartanet.smartpy.io");

tezos.setWalletProvider(wallet);