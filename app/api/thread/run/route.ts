import { databaseAdmin } from '@/services/firebaseAdmin';
import { NextRequest, NextResponse } from 'next/server';
import { getUserIdFromRequest } from '@/services/auth';
import { runThread } from '@/services/llm/thread';

export const maxDuration = 60;

export async function POST(req: NextRequest) {
  let data: any = null;
  try {
    data = await req.json();
  } catch {}

  if (
    data == null ||
    typeof data !== 'object' ||
    typeof data?.threadId !== 'string' ||
    (data?.extraPrompt !== null && typeof data?.extraPrompt !== 'string')
  )
    return new NextResponse('Invalid body.', { status: 400 });

  const userId = await getUserIdFromRequest(req);

  if (userId == null) return new Response('Unauthorized', { status: 401 });

  const ref = databaseAdmin.ref(`/Users/${userId}/Chats/${data.threadId}`);

  if ((await (await ref.get()).val()) == null) return new Response('Unauthorized', { status: 401 });

  const stream = await runThread(data.threadId, data.extraPrompt);

  return new NextResponse(stream);
}
