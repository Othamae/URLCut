'use server'

import { ShortLinkURLResponse } from '@/lib/type'

const API = process.env.API!
const API_QR = process.env.API_QR!
const URL = process.env.URL!


export const createShortURL = async (longUrl: string) => {
    const res = await fetch(API, {
        method: 'POST',
        body: JSON.stringify({ longUrl }),
        headers: { 'Content-Type': 'application/json' },
    })
    if (!res.ok) {
        throw new Error('Failed to create short URL')
    }
    const data: ShortLinkURLResponse = await res.json()
    return URL + '/' + data.shortUrl
}


export const getQRCode = async (longUrl: string) => {
    const res = await fetch(API_QR, {
        method: 'POST',
        body: JSON.stringify({ longUrl }),
        headers: { 'Content-Type': 'application/json', 'Accept': 'image/png' },
    })

    if (!res.ok) {
        throw new Error('Failed to create short URL')
    }
    const arrayBuffer = await res.arrayBuffer()
    const base64String = Buffer.from(arrayBuffer).toString('base64')

    return base64String

}
