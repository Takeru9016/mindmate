import type { NextApiRequest, NextApiResponse } from 'next'
import admin from 'firebase-admin'

import query from '@/lib/queryApi'
import { adminDb } from 'firebaseAdmin';

type Data = {
    answer: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { prompt, chatId, model, session, frequency_penalty, presence_penalty } = req.body

    if (!prompt) {
        res.status(400).json({ answer: 'Please provide a prompt!' })
        return
    }

    if (!chatId) {
        res.status(400).json({ answer: 'Please provide a chatId!' })
        return
    }

    if (!model) {
        res.status(400).json({ answer: 'Please select a model!' })
        return
    }

    if (!frequency_penalty) {
        res.status(400).json({ answer: 'Please select a frequency penalty' })
        return
    }

    if (!presence_penalty) {
        res.status(400).json({ answer: 'Please select a presence penalty' })
        return
    }

    const response = await query(prompt, chatId, model, frequency_penalty, presence_penalty)

    const message: Message = {
        text: response || "MindMate was unable to find an answer for that!",
        createdAt: admin.firestore.Timestamp.now(),
        user: {
            _id: "MindMate",
            name: 'MindMate',
            avatar: "https://links.papareact.com/89k",
        },
    }

    await adminDb.collection("users").doc(session?.user?.email).collection("chats").doc(chatId).collection("messages").add(message)

    res.status(200).json({ answer: message.text })
}